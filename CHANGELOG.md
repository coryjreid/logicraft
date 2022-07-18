
## 14.0.0 (2022-07-17)

### Added

* Smooth Boot (Forge)

### Chore

* Bump version
* Update pack info

### Config

* V-Tweaks - tweaked pet protection to fix Alex's Mobs conflict
* Remove energy requirement for Refined Storage
* Increase Osmium spawn rate
* Updated default keybindings and settings
* Inventory Tweaks
* Client Tweaks
* Regenerated Blood Magic Client
* Regenerated Alex's Mobs

### Removed

* Unused config (Entity Culling)
* Simple Discord Rich Presence (crashes)
* Starlight x Create (memory leak)

### Swapped

* Fast Workbench for Fast Workbench Minus Replacement
* Fast Furnace for Fast Furnace Minus Replacement

### Updated

* Immersive Petroleum
* Macaw's Furniture


## 13.0.0 (2022-07-11)

### Added

* Pipez
* Integration Additions
* Integrated Proxy
* Integrated NBT
* Integrated Terminals
* Integrated Tunnels
* Integrated Dynamics

### Chore

* Bumped version

### Updated

* Blood Magic
* ZeroCore 2


## 12.3.0 (2022-07-10)

### Added

* Sound Device Options

### Chore

* Bumped version


## 12.2.1 (2022-07-07)

### Update

* Downgrade a few mods that were updated too far


## 12.2.0 (2022-07-07)

### Chore

* Bump version

### Update

* A bunch of mods


## 12.1.0 (2022-05-09)

### Chore

* Bump version

### Update

* Forge


## 12.0.0 (2022-05-09)

### Chore

* Bump version

### Update

* ZeroCore 2
* V-Tweaks
* Thermal Locomotion
* Thermal Foundation
* The One Probe
* SuperMartijn642's Core Lib
* Spark
* RFTools Utility
* RFTools Power
* RFTools Control
* RFTools Builder
* RFTools Base
* Pocket Storage
* Placebo
* Performant
* Ore Tweaker
* Mekanism Generators
* Mekanism
* McJtyLib
* Macaw's Windows
* Macaw's Trapdoors
* Macaw's Roofs
* Macaw's Paintings
* Macaw's Lights and Lamps
* Macaw's Furniture
* Macaw's Fences and Walls
* Macaw's Doors
* Macaw's Bridges - Oh The Biomes You'll Go
* Macaw's Bridges
* Just Enough Items (JEI)
* JourneyMap
* In Control!
* Extreme Reactors
* Dungeon Crawl
* Cyclic
* CraftTweaker
* Cosmetic Armor Reworked
* Configured
* Comforts (Forge)
* CoFH Core
* Clumps
* Cloth Config API (Fabric/Forge)
* CC: Tweaked
* Cable Tiers
* AttributeFix
* Architectury API (Fabric/Forge)
* AppleSkin
* Absent By Design


## 11.0.0 (2022-02-21)

### Added

* Performant (too laggy without it)

### Chore

* Bump version


## 10.0.0 (2022-02-20)

### Added

* MouseTweaks
* Easy Villagers

### Chore

* Bump version

### Removed

* Performant
* Entity Culling


## 9.0.1 (2022-02-20)

### Chore

* Bump version

### Fix

* Mark Entity Culling mod as client only


## 9.0.0 (2022-02-20)

### Added

* Entity Culling

### Chore

* Bump version

### Updated

* Performant


## 8.2.1 (2022-02-19)

### Chore

* Bump version number
* Remove unused extremesoundmuffler-client config

### Fix

* Remove accidentally-added Cable Tiers items from the game
* Turn off Chisels and Bits "bit injection" for JEI to cleanup JEI
* Actually fix the broken junk from before (and ignore some more files)
* Remove illegal characters from filename, again, because packwiz is stupid and uses URIs instead of URLs
* Add missing comma in updateModpack.py which was preventing mod additions from working correctly


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

