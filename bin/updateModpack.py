import toml
import json
import argparse


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("curseLauncherMcInstanceFile",
                        help="path to the CurseForge Launcher minecraftinstance.json file")
    parser.add_argument(
        "bccFile", help="path to the Better Compatability Checker common config file")
    parser.add_argument("manifestFile", help="path to the manifest file")
    parser.add_argument(
        "versionNumber", help="new version number of the modpack")
    args = parser.parse_args()

    mcInstanceFile = args.curseLauncherMcInstanceFile
    bccFile = args.bccFile
    manifestFile = args.manifestFile
    version = args.versionNumber

    # UPDATE BCC
    # load data
    bccData = toml.load(bccFile)

    # set default BCC values
    bccData['general']['modpackName'] = "Logicraft_"
    bccData['general']['modpackProjectID'] = 323471
    bccData['general']['useMetadata'] = False

    # update version
    bccData['general']['modpackVersion'] = version

    # write changes to BCC file
    with open(bccFile, 'w') as outfile:
        toml.dump(bccData, outfile)

    # UPDATE MANIFEST
    # load data
    with open(manifestFile) as m:
        manifestData = json.load(m)

    # set default manifest values
    manifestData['name'] = "Logicraft_"
    manifestData['author'] = "Aezshma"
    manifestData['manifestType'] = "minecraftModpack"
    manifestData['manifestVersion'] = 1
    manifestData['minecraft']['version'] = "1.16.5"
    manifestData['overrides'] = "overrides"

    # update version
    manifestData['version'] = version

    # fetch mods from minecraftinstance.json
    with open(mcInstanceFile) as m:
        mciData = json.load(m)

    files = []
    for i in mciData['installedAddons']:
        installedFile = i['installedFile']
        if installedFile is not None:
            files.append({
                'modId': i['addonID'],
                'fileId': installedFile['id'],
                'displayName': installedFile['displayName'],
                'fileName': installedFile['fileName'],
                'downloadUrl': installedFile['downloadUrl'],
                'fileLength': installedFile['fileLength']
            })

    # sort the data to make diffs consistent
    files.sort(key=lambda x: x['modId'])
    # store mods
    manifestData['files'] = files

    # write changes to manifest file
    with open(manifestFile, 'w') as outfile:
        json.dump(manifestData, outfile, indent=4)

    print(f"Updated version to '{version}'")


if __name__ == "__main__":
    main()
