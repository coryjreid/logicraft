
## 8.2.0 (2022-02-18)

### Chore

* Bump version to 8.2.0
* Add OptiFine to the pack
* Have updateModpack.py generate VERSION file for live deployments
* Delete no-longer-used manifest.json file
* Add .packwizignore to exclude non-Minecraft files from pack distributions
* Refactor update.bat to run the new pack updater
* Upgrade pack to use packwiz for managing the pack

### Fix

* Properly handle non-CurseForge mod in script
* Correct URL for InventoryHUD+ since packwiz is dumb as shit and uses URIs to handle paths/URLs
* Have updateModpack.py script also update the modpack version in the pack.toml file
* Stringify int values for subprocess and make sure to refresh packwiz index
* Correctly build path for running packwiz

### Update

* RFTools Builder
* Quark
* Performant
* McJtyLib
* KubeJS (Forge)
* Just Enough Items (JEI)
* In Control!
* CraftTweaker
* Comforts (Forge)
* Cloth Config API (Forge)
* Architectury API (Forge)


## 8.1.0 (2022-02-13)

### Fix

* Stop tracking Mekanism client config so user configurations aren't overwritten
* Adjust recipe: 4 uranium essence (2x2) -> 2 uranium ingot


## 8.0.0 (2022-02-09)

### Fix

* Rollback mod upgrades for further testing
* Correct string value to boolean value in BCC config


## 7.0.0 (2022-02-09)

### Chore

* Bump version to 7.0.0

### Refactor

* Add modpack specific commit types to changelog generator
* Update changelog generator config to handle specified commit titles/types
* Refactor the manifest generation script to more broadly update all required files during an upgrade
* Move tooling files to bin/ for better organization
* Add tooling to automatically generate changelogs from commit messages

### Update

* Quark
* Performant
* McJtyLib
* Cloth Config API (Forge)


## 6.0.1 (2022-02-09)

