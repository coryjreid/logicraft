import os
import toml
import json
import argparse
import shutil
import subprocess


def main():
    managedFolders = ["config", "defaultconfigs",
                      "kubejs", "resourcepacks", "scripts"]
    pwd = os.getcwd()

    parser = argparse.ArgumentParser()
    parser.add_argument("curseManagedInstance",
                        help="path to the CurseForge Launcher managed Minecraft instance")
    parser.add_argument(
        "versionNumber", help="new version number of the modpack")
    args = parser.parse_args()

    mcInstanceFolder = args.curseManagedInstance
    version = args.versionNumber

    #########################
    # LOAD DATA
    #########################
    sourceMods = {}
    with open(os.path.join(mcInstanceFolder, "minecraftinstance.json")) as m:
        mciData = json.load(m)
        for mod in mciData["installedAddons"]:
            print(
                f"Loading data for source mod '{mod['installedFile']['id']}'")
            sourceMods[mod["addonID"]] = mod["installedFile"]["id"]

    packMods = {}
    for filename in os.listdir(os.path.join(pwd, "mods")):
        with open(os.path.join(pwd, "mods", filename), "r") as f:
            mod = toml.load(f)
            print(
                f"Loading data for pack mod '{mod['update']['curseforge']['project-id']}'")
            packMods[mod["update"]["curseforge"]["project-id"]] = {
                "fileId": mod["update"]["curseforge"]["file-id"],
                "packSlug": filename.replace(".toml", "")
            }

    #########################
    # DO PACK UPDATES
    #########################
    for key in (set(sourceMods.keys()) - set(packMods.keys())):
        # install
        print(f"Installing pack mod {key}, file {sourceMods[key]}")
        subprocess.run([os.path.join(pwd, "bin", "packwiz.exe"), "curseforge",
                       "install" "--addon-id", str(key), "--file-id", str(sourceMods[key])])

    for modId in packMods:
        modData = packMods[modId]
        if modId in sourceMods:
            if sourceMods[modId] != modData["fileId"]:
                # update
                print(f"Updating pack mod {modData['packSlug']}")
                subprocess.run(
                    [os.path.join(pwd, "bin", "packwiz.exe"), "update", modData["packSlug"]])
        else:
            # delete
            print(f"Deleting pack mod {modData['packSlug']}")
            subprocess.run(
                [os.path.join(pwd, "bin", "packwiz.exe"), "remove", modData["packSlug"]])

    # nuke all managed folders in repo
    for dir in managedFolders:
        path = os.path.join(pwd, dir)
        if os.path.isdir(path):
            print(f"Deleting '{path}'")
            shutil.rmtree(path)

    # copy managed folder changes from Minecraft instance folder
    for dir in managedFolders:
        src = os.path.join(mcInstanceFolder, dir)
        dst = os.path.join(pwd, dir)
        print(f"Copying '{src}' to '{dst}'")
        shutil.copytree(src, dst)

    #########################
    # UPDATE BCC
    #########################
    # load data
    bccFile = os.path.join(pwd, "config", "bcc-common.toml")
    print(f"Loading BCC data from '{bccFile}'")
    bccData = toml.load(bccFile)
    print(f"Success")

    # set default BCC values
    bccData['general']['modpackName'] = "Logicraft_"
    bccData['general']['modpackProjectID'] = 323471
    bccData['general']['useMetadata'] = False

    # update version
    print(f"Setting BCC pack version to {version}")
    bccData['general']['modpackVersion'] = version
    print("Success")

    # write changes to BCC file
    with open(bccFile, 'w') as outfile:
        print(f"Writing BCC file")
        toml.dump(bccData, outfile)
        print("Success")
    
    print("Refreshing packwiz index")
    subprocess.run(
                [os.path.join(pwd, "bin", "packwiz.exe"), "refresh"])
    print("Success")

    print("Pack update complete")


if __name__ == "__main__":
    main()
