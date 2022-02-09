# Changelog
## 6.0.1
- Removed: MCMT (yup - it broke on the server, but not locally; i need to do better testing)
- Config: Reset changed Performant settings to defaults now that MCMT is gone

## 6.0.0
- Added: Lazy DataFixerUpper(LazyDFU) [FORGE]
  - Makes Minecraft's DataFixerUpper only execute when necessary improving load times5
- Added: Performant
  - Server-side performance tweaks
- Added: Starlight x Create
  - Rewrite Minecraft's lighting engine to improve performance
- Added: MCMT
  - Multithread tick execution (if this breaks stuff we will rollback)
- Added: Alex's Mobs
  - We just need more life, damn it!
- Updated: ImmersivePosts
- Config: Change some Waystone multipliers from 1.1 to 1.01
- Config: Change Waystone config to charge 1 level per 1000 blocks traveled
- Config: Hid additional yellorium/yellorite items from JEI
- Config: Adjusted RandomPatches packet sizes to try and prevent GodsGriever from DCing on ALT+TAB
- Config: Removed Alex's Mobs book on world join
- Config: Adjusted Alex's Mobs Lava Vision potion lava opacity to 0.10 from 0.65
- Config: MCMT compatability settings enabled - disableWorldPostTick, enableChunkTimeout, enableBlankReturn
- Config: Performant - multiEntities false to avoid conflict with MCMT
- Config: Adjusted some keybinds
  - Delete `options.txt` from top-level minecraft folder before opening game to get changes

## 5.8.7
- Removed: Extreme sound muffler (Forge)
  It didn't work when Dynamic Surroundings which already has (verified working) sound control

## 5.8.6
- Added: Absent by Design
- Added: Better Compatibility Checker
- Added: CC: Tweaked
- Added: Extreme sound muffler (Forge)

## 5.7.6
- Updated: Architectury API (Forge) to 1.29.51
- Config: Adjusted the Waystone XP cost to not be quite so insane
- Config: Reduced commonality of Waystone spawning
- Config: Tweaked default keybinds for Simply Jetpacks 2
- Config: Adjusted default jetpack HUD config for Simply Jetpacks 2

IMPORTANT: You must delete your keybindings.txt and options.txt files BEFORE running the server sync to pickup the changes

## 5.7.5
- Config: Fixed recipe conflict with Upgraded Fences and Horse Fences
- Config: Disabled Waystone cross-dimension teleports
- Config: Enabled and increased XP cost for using waystones
- Enabled: Cyclic Melting Chamber
- Enabled: Cyclic Solidification Chamber

## 5.7.4
- Config: Reduced max view distance to 5, min to 1 (helps with lag, reducing amount of data transmitted)

## 5.6.4
- Added: Enchanted Book Redesign
- Removed: FTB Backups

## 4.6.4
- Added: Refined Storage Addons
- Added: Refined Storage: Requestify
- Added: ExtraStorage
- Added: Cable Tiers
- Updated: Architectury API (Forge)
- Removed: Extra Disks (superseded by ExtraStorage)
- Config: Added additional cosmetic blocks to WorldStripper config to delete when checking oregen
- Config: Increased generation rate and cluster size of Uranium

## 4.5.4
- Fixed: Enderium Blend recipe
- Fixed: Ender Pearl Dust recipe (pulverize 1 Ender Pearl for 1 Ender Dust)
- Removed: Cyclic Speed Charm
- Updated: Architectury API (Forge)
- Updated: KubeJS (Forge)

## 4.5.3
### Added
- Discord Simple Rich Presence
- Configured

### Removed
- Inventory Crafting Grid

### Config Changes
- Tweak Simply Jetpacks 2 UI position
- Enabled "force" Configured

## 3.5.3
### Added
- Create Crafts & Additions

## 3.4.3
### Tweaked
- Turned off Quark Matrix Enchanting

## 3.4.2
### Added
- GildedArmor

## 3.3.2
### Added
- Cyclic
- FTB Ranks

### Updated
- CraftTweaker
- RefinedStorage
- RFToolsUtility

### Config Changes
- Re-enable Quark's oregen
- Fix dynview to not exceed 10 view distance
- (Hopefully) Stop overwriting people's JEI bookmarks
- Removed most machines from Cyclic as other mods' machines should be used

## 2.3.2
### Added
- Simple Discord Rich Presence

### Removed
- Auto Ore Dictionary Converter
- Enchantment Descriptions

### Tweaked
- Controls, UI, and V-Tweaks
- JER ore maps

## 2.2.2
### Added
- JAMD

### Removed
- Advanced Mining Dimension

## 2.1.2
### Added
- CTM
- PocketStorage

## 2.0.2
### Updated
- AppleSkin

## 2.0.1
### Removed
- Alex's Mobs config

## 2.0.0
### Added
- Inventory Crafting Grid
- TrashSlot