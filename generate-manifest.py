#!/usr/bin/python

import getopt
import json
import sys
import os


def main():
    try:
        opts = getopt.getopt(sys.argv[1:], "hf:", ["help", "file="])[0]

        if len(opts) == 0:
            print("ERROR: Missing require argument")
            usage()
            sys.exit(2)

        for o, a in opts:
            if o in ("-h", "--help"):
                usage()
                sys.exit()
            elif o in ("-f", "--file"):
                generateManifest(a)
            else:
                assert False, "unhandled option"
    except getopt.GetoptError as err:
        print(err)  # will print something like "option -a not recognized"
        usage()
        sys.exit(2)


def usage():
    print("./" + os.path.basename(__file__) +
          " -f <minecraft_instance_json_file>")


def generateManifest(filename):
    # Reads manifest template
    with open('manifest-template.json') as m:
        manifest = json.load(m)

    # Check if version is configured in manifest
    if manifest['minecraft']['version'] == '':
        print('Error. There is no Minecraft version specified in the manifest.json')
        exit()

    f = open(filename)

    data = json.load(f)

    files = []
    for i in data['installedAddons']:
        installedFile = i['installedFile']
        files.append({
            'modId': i['addonID'],
            'displayName': installedFile['displayName'],
            'fileName': installedFile['fileName'],
            'downloadUrl': installedFile['downloadUrl'],
            'fileLength': installedFile['fileLength']
        })
    manifest['files'] = files

    f.close()

    with open('manifest.json', 'w') as outfile:
        json.dump(manifest, outfile, indent=4)

if __name__ == "__main__":
    main()
