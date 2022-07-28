import os
import toml
import json
import argparse
import shutil
import subprocess


def main():
    managed_folders = ["config", "defaultconfigs", "kubejs", "resourcepacks", "scripts"]
    pwd = os.getcwd()

    parser = argparse.ArgumentParser()
    parser.add_argument("curseManagedInstance", help="path to the CurseForge Launcher managed Minecraft instance")
    parser.add_argument("versionNumber", help="new version number of the modpack")
    args = parser.parse_args()

    mc_instance_folder = args.curseManagedInstance
    version = args.versionNumber

    #########################
    # LOAD DATA
    #########################
    source_mods = {}
    with open(os.path.join(mc_instance_folder, "minecraftinstance.json")) as m:
        mci_data = json.load(m)
        for mod in mci_data["installedAddons"]:
            print(
                f"Loading data for source mod '{mod['installedFile']['id']}'")
            source_mods[mod["addonID"]] = mod["installedFile"]["id"]

    pack_mods = {}
    for filename in os.listdir(os.path.join(pwd, "mods")):
        with open(os.path.join(pwd, "mods", filename), "r") as f:
            mod = toml.load(f)
            if "update" in mod:
                print(f"Loading data for pack mod '{mod['update']['curseforge']['project-id']}'")
                pack_mods[mod["update"]["curseforge"]["project-id"]] = {
                    "fileId": mod["update"]["curseforge"]["file-id"],
                    "packSlug": filename.replace(".pw.toml", "")
                }

    #########################
    # DO PACK UPDATES
    #########################
    for key in (set(source_mods.keys()) - set(pack_mods.keys())):
        # install
        print(f"Installing pack mod {key}, file {source_mods[key]}")
        subprocess.run([os.path.join(pwd, "bin", "packwiz.exe"), "curseforge",
                        "install", "--addon-id", str(key), "--file-id", str(source_mods[key])])

    for modId in pack_mods:
        mod_data = pack_mods[modId]
        if modId in source_mods:
            slug = mod_data['packSlug']
            if source_mods[modId] != mod_data["fileId"]:
                # update
                print(f"Updating pack mod {slug}")
                subprocess.run(
                    [os.path.join(pwd, "bin", "packwiz.exe"), "update", slug])
        else:
            # delete
            print(f"Deleting pack mod {slug}")
            subprocess.run(
                [os.path.join(pwd, "bin", "packwiz.exe"), "remove", slug])

    # nuke all managed folders in repo
    for folder in managed_folders:
        path = os.path.join(pwd, folder)
        if os.path.isdir(path):
            print(f"Deleting '{path}'")
            shutil.rmtree(path)

    # copy managed folder changes from Minecraft instance folder
    for folder in managed_folders:
        src = os.path.join(mc_instance_folder, folder)
        dst = os.path.join(pwd, folder)
        print(f"Copying '{src}' to '{dst}'")
        shutil.copytree(src, dst)

    #########################
    # UPDATE BCC
    #########################
    # load data
    bcc_file = os.path.join(pwd, "config", "bcc-common.toml")
    print(f"Loading BCC data from '{bcc_file}'")
    bcc_data = toml.load(bcc_file)
    print(f"Success")

    # set default BCC values
    bcc_data['general']['modpackName'] = "Logicraft_"
    bcc_data['general']['modpackProjectID'] = 323471
    bcc_data['general']['useMetadata'] = False

    # update version
    print(f"Setting BCC pack version to {version}")
    bcc_data['general']['modpackVersion'] = version
    print("Success")

    # write changes to BCC file
    with open(bcc_file, 'w') as outfile:
        print(f"Writing BCC file")
        toml.dump(bcc_data, outfile)
        print("Success")

    #########################
    # UPDATE PACK.TOML FILE
    #########################
    # update pack version
    packData = toml.load(os.path.join(pwd, "pack.toml"))
    packData['version'] = version

    # write changes to pack.toml file
    with open(os.path.join(pwd, "pack.toml"), 'w') as outfile:
        print(f"Writing pack.toml file")
        toml.dump(packData, outfile)
        print("Success")

    #########################
    # UPDATE VERSION FILE
    #########################
    with open(os.path.join(pwd, "VERSION"), 'w') as f:
        f.write(version)

    print("Refreshing packwiz index")
    subprocess.run(
        [os.path.join(pwd, "bin", "packwiz.exe"), "refresh"])
    print("Success")

    print("Pack update complete")


if __name__ == "__main__":
    main()
