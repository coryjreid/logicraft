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