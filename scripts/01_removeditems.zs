import mods.jei.JEI;

/************************************************************
 *
 * This file is for removing items that should not be visible
 * in JEI.
 *
 ************************************************************/

## Minecraft Items


## Aroma1997's Dimensional World Ores
JEI.removeAndHide(<aroma1997sdimension:miningore>);

## Biomes O Plenty Ores
JEI.removeAndHide(<biomesoplenty:fleshchunk>);
JEI.removeAndHide(<biomesoplenty:flesh>);
JEI.removeAndHide(<biomesoplenty:terrestrial_artifact>);
JEI.removeAndHide(<forge:bucketfilled>.withTag({FluidName: "sand", Amount: 1000}), true);
JEI.removeAndHide(<forge:bucketfilled>.withTag({FluidName: "honey", Amount: 1000}), true);
JEI.removeAndHide(<forge:bucketfilled>.withTag({FluidName: "honey", Amount: 1000}), true);
JEI.removeAndHide(<forge:bucketfilled>.withTag({FluidName: "sand", Amount: 1000}), true);
JEI.removeAndHide(<fluid:honey>);
JEI.removeAndHide(<fluid:sand>);
JEI.removeAndHide(<biomesoplenty:jar_filled>);
JEI.removeAndHide(<thermalexpansion:florb>.withTag({Fluid: "honey"}), true);
JEI.removeAndHide(<thermalexpansion:florb>.withTag({Fluid: "sand"}), true);
JEI.removeAndHide(<biomesoplenty:biome_block>);
JEI.removeAndHide(<biomesoplenty:gem_ore>);
JEI.removeAndHide(<biomesoplenty:gem_ore:1>);
JEI.removeAndHide(<biomesoplenty:gem_ore:2>);
JEI.removeAndHide(<biomesoplenty:gem_ore:3>);
JEI.removeAndHide(<biomesoplenty:gem_ore:4>);
JEI.removeAndHide(<biomesoplenty:gem_ore:5>);
JEI.removeAndHide(<biomesoplenty:gem_ore:6>);
JEI.removeAndHide(<biomesoplenty:gem_ore:7>);
JEI.removeAndHide(<biomesoplenty:gem_block>);
JEI.removeAndHide(<biomesoplenty:gem_block:1>);
JEI.removeAndHide(<biomesoplenty:gem_block:2>);
JEI.removeAndHide(<biomesoplenty:gem_block:3>);
JEI.removeAndHide(<biomesoplenty:gem_block:4>);
JEI.removeAndHide(<biomesoplenty:gem_block:5>);
JEI.removeAndHide(<biomesoplenty:gem_block:6>);
JEI.removeAndHide(<biomesoplenty:gem_block:7>);
JEI.removeAndHide(<biomesoplenty:hive>);
JEI.removeAndHide(<biomesoplenty:hive:1>);
JEI.removeAndHide(<biomesoplenty:hive:2>);
JEI.removeAndHide(<biomesoplenty:hive:3>);
JEI.removeAndHide(<biomesoplenty:honey_block>);
JEI.removeAndHide(<biomesoplenty:honeycomb>);
JEI.removeAndHide(<biomesoplenty:filled_honeycomb>);
JEI.removeAndHide(<biomesoplenty:gem>);
JEI.removeAndHide(<biomesoplenty:gem:1>);
JEI.removeAndHide(<biomesoplenty:gem:2>);
JEI.removeAndHide(<biomesoplenty:gem:3>);
JEI.removeAndHide(<biomesoplenty:gem:4>);
JEI.removeAndHide(<biomesoplenty:gem:5>);
JEI.removeAndHide(<biomesoplenty:gem:6>);
JEI.removeAndHide(<biomesoplenty:gem:7>);
JEI.removeAndHide(<minecraft:spawn_egg>.withTag({EntityTag: {id: "biomesoplenty:wasp"}}), true);
JEI.removeAndHide(<biomesoplenty:biome_finder>);
JEI.removeAndHide(<biomesoplenty:pear>);
JEI.removeAndHide(<biomesoplenty:peach>);
JEI.removeAndHide(<biomesoplenty:persimmon>);
JEI.removeAndHide(<biomesoplenty:berries>);
# --
JEI.hide(<biomesoplenty:earth>);
JEI.hide(<biomesoplenty:blue_fire>);

## Chisel
JEI.removeAndHide(<chisel:blockcobalt>);
JEI.removeAndHide(<chisel:blockcobalt:1>);
JEI.removeAndHide(<chisel:blockcobalt:2>);
JEI.removeAndHide(<chisel:blockcobalt:3>);
JEI.removeAndHide(<chisel:blockcobalt:4>);
JEI.removeAndHide(<chisel:blockcobalt:5>);
JEI.removeAndHide(<chisel:blockcobalt:6>);
JEI.removeAndHide(<chisel:offsettool>);
JEI.removeAndHide(<chisel:chisel_iron>);
JEI.removeAndHide(<chiselsandbits:chisel_stone>);
JEI.removeAndHide(<chiselsandbits:chisel_iron>);
JEI.removeAndHide(<chiselsandbits:chisel_gold>);

## Immersive Engineering
JEI.removeAndHide(<immersiveengineering:ore>);
JEI.removeAndHide(<immersiveengineering:ore:1>);
JEI.removeAndHide(<immersiveengineering:ore:2>);
JEI.removeAndHide(<immersiveengineering:ore:3>);
JEI.removeAndHide(<immersiveengineering:ore:4>);

## Immersive Petroleum
JEI.hide(<immersivepetroleum:metal_multiblock>);

# RFTools
JEI.removeAndHide(<rftools:invisible_shield_block>);
JEI.removeAndHide(<rftools:notick_invisible_shield_block>);
JEI.removeAndHide(<rftools:invisible_shield_block_opaque>);
JEI.removeAndHide(<rftools:notick_invisible_shield_block_opaque>);
JEI.removeAndHide(<rftools:solid_shield_block>);
JEI.removeAndHide(<rftools:notick_solid_shield_block>);
JEI.removeAndHide(<rftools:camo_shield_block>);
JEI.removeAndHide(<rftools:notick_camo_shield_block>);
JEI.removeAndHide(<rftools:solid_shield_block_opaque>);
JEI.removeAndHide(<rftools:notick_solid_shield_block_opaque>);
JEI.removeAndHide(<rftools:camo_shield_block_opaque>);
JEI.removeAndHide(<rftools:notick_camo_shield_block_opaque>);

## The One Probe
JEI.removeAndHide(<theoneprobe:probe>);
JEI.removeAndHide(<theoneprobe:creativeprobe>);
JEI.removeAndHide(<theoneprobe:probenote>);
JEI.removeAndHide(<theoneprobe:diamond_helmet_probe>);
JEI.removeAndHide(<theoneprobe:gold_helmet_probe>);
JEI.removeAndHide(<theoneprobe:iron_helmet_probe>);
JEI.removeAndHide(<theoneprobe:probe_goggles>);

## Wither Skeleton Tweaks
JEI.removeAndHide(<witherskelefix:blade>);
JEI.removeAndHide(<witherskelefix:blade2>);

## Mekanism Items
JEI.removeAndHide(<mekanism:oreblock:1>);
JEI.removeAndHide(<mekanism:oreblock:2>);

## Thermal Expansion
JEI.removeAndHide(<thermalfoundation:ore:7>);
JEI.removeAndHide(<thermalfoundation:ore:8>);
