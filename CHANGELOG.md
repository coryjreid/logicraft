# Version 3.9.27 (October 7, 2020)

## Config Changes

* Rebalance Solar Flux Reborn solar panels to progress in a linear fashion
  |            | 1      | 2       | 3       | 4       | 5        | 6        | 7        | 8         |
  |-----------:|:------:|:-------:|:-------:|:-------:|:--------:|:--------:|:--------:|:---------:|
  | Capacity   | 100K   | 200K    | 400K    | 800K    | 1.6M     | 3.2M     | 6.4M     | 12.8M     |
  | Generation | 8 RF/t | 16 RF/t | 32 RF/t | 64 RF/t | 128 RF/t | 256 RF/t | 512 RF/t | 1024 RF/t |
  | Transfer   | 64 RF  | 128 RF  | 256 RF  | 512 RF  | 1024 RF  | 2048 RF  | 4096 RF  | 8192 RF   |
* Disable Draconic Evolution integration with Solar Flux Reborn

## Updates

* Cyclic

# Version 3.9.26 (October 6, 2020)

## Config Changes

* Make Exotic Birds spawning maximum rarity (i.e. reduce spawning)
* _Actually_ disable the IE and Mek integrations for SimplyJetpacks2

# Version 3.9.25 (October 6, 2020)

## Config Changes

* Update Forge version to `1.12.2 - 14.23.5.2854`
* Minor GUI tweaks to SimplyJetpacks2, Nature's Compass, and Draconic Evolution \
  _Note: You may need to make adjustments based on your resolution with DE_
* Disabled some unintentional SimplyJetpacks2 integrations \
  _Note: Mekanism and Immersive Engineering_
* Reduced cost of Endstone per Enderman spawn with RFTools spawner
* Enderman drop rates for Ender Pearls and Endstone adjusted
* Silver Fish can now drop Dimensional Shards on death
* Silver Fish RFTools spawner values have been adjusted
  * |MATTER  | Type          | QTY/Spawn |
    |-------:|:-------------:|:---------:|
    | Key    | Nether Quartz | `0.05`    |
    | Bulk   | Dirt          | `0.2`     |
    | Living | Any           | `10`      |
  * `400RF` per spawn
* Vex can now drop Nether Quartz on death
* Vex can now be spawned with the RFTools Spawner
  * |MATTER  | Type              | QTY/Spawn |
    |-------:|:-----------------:|:---------:|
    | Key    | Dimensional Shard | `0.05`    |
    | Bulk   | Dirt              | `0.2`     |
    | Living | Any               | `10`      |
  * `400RF` per spawn

**Loot Rates**
* Each adjustment was added as an additional pool
* Each added/adjusted pool is fixed to `1` _guaranteed_ roll
* Roll can contain `0-2` items
* Looting level offers a multiplier on stack size

When a mob dies if it has loot pools the game will attempt to generate loot from
_each_ pool using the following formula:

`ROLL x STACK_SIZE x LOOTING_LEVEL = DROP_AMOUNT`

Example: \
`1 x 2 x 3 = 6` items _from that pool_

# Version 3.9.24 (October 4, 2020)

## Config Changes

* Added Endstone to Enderman loot table

# Version 3.9.23 (Sep 26, 2020)

## Updates

* Brandon's Core
* Chunk-Pregenerator
* Draconic Evolution
* Solar Flux Reborn
* UniDict
* WanionLib

# Version 3.9.22 (Sep 7, 2020)

## Config Changes

### Chisel

* Disable increased movement speed on concrete

# Version 3.9.21 (Sep 30, 2020)

## Config Changes

### Better Sprinting

* Enable Run in All Directions

### Simply Jetpacks 2

* Adjust some keybinds

## Updates

* Bounding Box Outline Reloaded \
  (actually use the Forge version, not the Litemod version)

# Version 3.9.20 (Aug 30, 2020)

## Updates

* /dank/null
* AppleSkin
* Aroma1997Core
* Aroma1997s Dimensional World
* Bad Wither No Cookie - Reloaded
* Bounding Box Outline Reloaded
* Carry On
* Chisel
* Chunk-Pregenerator
* CoFH Core
* CoFH World
* ConnectedTexturesMod
* Controlling
* CraftTweaker
* Cyclic
* Dynamic Surroundings
* Exotic Birds
* Flux Networks
* FTB Library
* FTB Utilities
* Immersive Engineering
* In Control!
* Inventory Tweaks
* JEI Integration
* JourneyMap
* Just Enough HarvestCraft (JEHC)
* Just Enough Items (JEI)
* LagGoggles
* LootTweaker
* McHorse's McLib
* OpenSecurity
* Reborn Core
* Redstone Arsenal
* Redstone Flux
* Refined Storage
* Refined Storage Addons
* Simply Jetpacks 2
* Thermal Cultivation
* Thermal Dynamics
* Thermal Expansion
* Thermal Foundation
* Thermal Innovation

# Version 3.9.19 (Mar 23, 2020)

## Config Changes

### RFTools

* Remove/hide a bunch of unused syringes
* Add spawner configs for Evoker, Vindicator, Phoenix, Elder Guardian, Gaia Guardian, and Spirit
* Tweak spawner config for Iron Golem
* Revert spawner config for Enderman to RFTools default

# Version 3.8.19 (Mar 21, 2020)

## Config Changes

### BetterFPS

* Disable Fast Beacon setting (it breaks the beacon effect see: [this issue](https://github.com/Guichaguri/BetterFps/issues/97) on GitHub)

## Updates

* Pam's HarvestCraft
* Random Things
* Reborn Core

# Version 3.8.18 (Mar 06, 2020)

## Additions

* OpenSecurity

## Updates

* Nature's Compass
* Reborn Core

# Version 3.7.18 (Mar 02, 2020)

## Config Changes

### Material Changer

* Fix config issue blocking login on servers

# Version 3.7.17 (Mar 02, 2020)

## Additions

* Material Changer (to edit armor values)

## Updates

* Cyclic

## Config Changes

### FTB Utilities

* Fix the %$&!^@) permissions so the mod stops breaking

### JEI Integration

* Enable display of additional info on tooltips in advancedTooltip mode

### Mekanism

* Adjust the durability of Obisidian tools/armor to be in-line with modpack

### Botania

* Buff end-game armor/tools to hopefully compete with Draconic Evolution armor/tools

# Version 3.7.16 (Mar 01, 2020)

## Config Changes

### FTBUtilities

* Enable AFK timer (notify 5m, but do not kick)

# Version 3.7.15 (Mar 01, 2020)

## Config Changes

### FTBUtilities

* MOTD and AFK Timer

### Inventory Tweaks

* Tweak some sorting rules

### Draconic Evolution

* Move the HUD to (hopefully) prevent overlapping with other mods

### Default Options

* Set auto-jump off by default

### JEI

* Do not set JEI to cheat mode by default (sorry!)

# Version 3.7.14 (Mar 01, 2020)

## Config Changes

### FTBUtilities

* Add some required Team permissions

# Version 3.7.13 (Feb 29, 2020)

## Additions

* /Dank/Null
* Cyclic
* Random Things

## Removals

* Emoticons (Caused unpleasant visual glitches)

## Config Changes

### Dank Null

* Disable HUD

### JEI Integration

* Show item registration ID on TOP tooltip

### Random Things

* Remove a bunch of OP crap
  
## Known Issues

* Couldn't hide Random Things Spectre Coil Nr. 416 in JEI

# Version 3.6.13 (Feb 23, 2020)

## Updates

* Solar Flux Reborn ([bugfix](https://gitlab.com/DragonForge/SolarFluxReborn/issues/88))

## Config Changes

### Natures Compass

* Exclude Sacred Springs
* Update HUD position to prevent conflicts

### Simply Jetpacks 2

* Update HUD position to prevent conflicts

### TheOneProbe

* Update HUD position to prevent conflicts

# Version 3.6.12 (Feb 23, 2020)

## Additions

* Emoticons

## Config Changes

### Inventory Tweaks

* Add a default tree files for a number of mods

### Default Options

* Some keybind updates

# Version 3.5.12 (Feb 22, 2020)

## Updates

* FTB Library

## Config Changes

### Default Options

* Set default keybinds
* Set default options
* Add default server configuration

# Version 3.5.11 (Feb 22, 2020)

## Removals

* World Stripper (was meant to be debugging only)

# Version 3.4.11 (Feb 19, 2020)

## Updates

* SolarFluxReborn

## Config Changes

### Inventory Tweaks

* Disable middle-click sorting
* Enable sorting on pickup
* Enable auto-equip armor

# Version 3.4.10 (Feb 18, 2020)

## Config Changes

### In Control!

* Re-enable spawning of bats (needed for some crafting recipes)

# Version 3.4.9 (Feb 17, 2020)

## Updates

* SolarFluxReborn

## Config Changes

### FTBUtilities

* Raise the defined claim/load limits for OPs

# Version 3.4.8 (Feb 16, 2020)

## Config Changes

### Immersive Engineering

* Removed bad recipes for IE plates
* Added recipes to make Thermal Foundation plates with IE hammer

# Version 3.4.7 (Feb 16, 2020)

The majority of these updates are centered around ore generation. It was discovered that Aluminum and Dimensional Shards were not generating (or struggling to generate). Most fixes are related to these fixes.

These oregen changes separate the ores into more distinct spawning layers. The goal is to hopefully allow each mineral type to have increased spawning chance without forcefully bumping rates. You can view our [ore configuration](https://docs.google.com/spreadsheets/d/1s2UInXcfo180PBI2JcHAOAfNMPe-dR5VdotWcSLWJN0/edit?usp=sharing) for more info.

## Config Changes

### Ore Generation 

* Disable CoFH retrogeneration
* Fully turn off all oregen in `aroma1997sdimension`
* Add Clay Ore generation in Mining World
  * Unhide Clay Ore in JEI
* Separate Emerald oregen rules for Overworld and Mining World
* Disable all Chisel oregen for Limestone and Marble
  * Add oregen for Limestone and Marble in CoFH World
* Disable Mekanism oregen
  * Add Osmium oregen to CoFH World
* Separate the ores into more distinct layers

### Mekanism

* Disable Mekanism chunkloading
* Hide inaccessible ores in JEI

### Thermal Expansion

* Hide inaccessible ores in JEI

### Botania

* Increase flowerParticles.frequency back to 0.75

### Exotic Birds

* Re-enable nest spawning but at a reduced rate
* Leaving the increased spawn rates for birds that the mod update reset \
  (old values stored in `exoticbirds.bak` in case lag increases)

### Morpheus

* Change the morning text
* Disable the On Sleep and On Wake text
* Set the ground level to 1 \
  (effectively makes sure all players receive notification)

### Toast Control

* Increase max toasts to 7

### Resourcepacks

* Added new texture for Clay Ore

# Version 3.3.7 (Feb 15, 2020)

## Config Changes

### Ore Generation

* Turn on retrogeneration to spawn more aluminum
* Increase gold generation rate

# Version 3.3.6 (Feb 15, 2020)

## Config Changes

### Ore Generation

* Add Aluminum ore generation that was missing

# Version 3.3.5 (Feb 14, 2020)

## Updates

* Aroma1997Core
* Biomes O' Plenty
* Botania
* Brandon's Core
* Comforts
* Controlling
* CraftTweaker
* Draconic Evolution
* ElecCore
* FastWorkbench
* Flux Networks
* FoamFix
* Inventory Tweaks
* JourneyMap
* Just Enough HarvestCraft
* Just Enough Items
* LootTweaker
* ModTweaker
* Nature's Compass
* Reborn Core
* RFTools
* UniDict

# Version 3.3.4 (Dec 05, 2019)

## Config Changes

### Ore Generation

* Disabled generation of Mekanism Tin and Copper

# Version 3.3.3 (Dec 05, 2019)

## Additions

* Bibliocraft
* Mekanism
* Mekanism Generators
* Mekanism Tools

# Version 3.2.3 (Dec 05, 2019)

## Updates

* List of changed mods unavailable (but probably a lot of them)

# Version 3.2.2 (Nov 17, 2019)

## Updates

* OpenComputers
* Loot Tweaker
* FTBUtilities

## Config Changes

* FTBUtilities 
    * Settings
    * Permissions

# Version 3.2.1 (Nov 17, 2019)

## Updates

* OpenComputers
* Loot Tweaker
* FTBUtilities 

# Version 3.1.0 (Jun 03, 2019)

## Additions 

* Gravestone

# Version 3.0.0 (Jun 03, 2019)

Initial Release