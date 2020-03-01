import mods.jei.JEI;

/************************************************************
 *
 * This file is for removing items that should not be visible
 * in JEI.
 *
 ************************************************************/

/************************
 *
 * MINECRAFT
 *
 ************************/


/************************
 *
 * AROMA1997's DIMENSIONAL WORLD
 *
 ************************/
JEI.removeAndHide(<aroma1997sdimension:miningore>);

/************************
 *
 * BIOMES O'PLENTY
 *
 ************************/
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

/************************
 *
 * CHISEL
 *
 ************************/
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

/************************
 *
 * IMMERSIVE ENGINEERING
 *
 ************************/
JEI.removeAndHide(<immersiveengineering:ore>);
JEI.removeAndHide(<immersiveengineering:ore:1>);
JEI.removeAndHide(<immersiveengineering:ore:2>);
JEI.removeAndHide(<immersiveengineering:ore:3>);
JEI.removeAndHide(<immersiveengineering:ore:4>);

/************************
 *
 * IMMERSIVE PETROLEUM
 *
 ************************/
JEI.hide(<immersivepetroleum:metal_multiblock>);

/************************
 *
 * RFTOOLS
 *
 ************************/
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

/************************
 *
 * THE ONE PROBE
 *
 ************************/
JEI.removeAndHide(<theoneprobe:probe>);
JEI.removeAndHide(<theoneprobe:creativeprobe>);
JEI.removeAndHide(<theoneprobe:probenote>);
JEI.removeAndHide(<theoneprobe:diamond_helmet_probe>);
JEI.removeAndHide(<theoneprobe:gold_helmet_probe>);
JEI.removeAndHide(<theoneprobe:iron_helmet_probe>);
JEI.removeAndHide(<theoneprobe:probe_goggles>);

/************************
 *
 * WITHER SKELETON TWEAKS
 *
 ************************/
JEI.removeAndHide(<witherskelefix:blade>);
JEI.removeAndHide(<witherskelefix:blade2>);

/************************
 *
 * MEKANISM ITEMS
 *
 ************************/
JEI.removeAndHide(<mekanism:oreblock:1>);
JEI.removeAndHide(<mekanism:oreblock:2>);

/************************
 *
 * THERMAL EXPANSION
 *
 ************************/
JEI.removeAndHide(<thermalfoundation:ore:7>);
JEI.removeAndHide(<thermalfoundation:ore:8>);

/************************
 *
 * RANDOM THINGS
 *
 ************************/
JEI.removeAndHide(<randomthings:biomeradar>);
JEI.removeAndHide(<randomthings:ingredient:4>);
JEI.removeAndHide(<randomthings:blockbreaker>);
JEI.removeAndHide(<randomthings:blockofsticks>);
JEI.removeAndHide(<randomthings:blockofsticks:1>);
JEI.removeAndHide(<randomthings:enderbridge>);
JEI.removeAndHide(<randomthings:enderanchor>);
JEI.removeAndHide(<randomthings:enderbucket>);
JEI.removeAndHide(<randomthings:reinforcedenderbucket>);
JEI.removeAndHide(<randomthings:prismarineenderbridge>);
JEI.removeAndHide(<randomthings:fertilizeddirt>);
JEI.removeAndHide(<randomthings:fertilizeddirttilled>);
JEI.removeAndHide(<randomthings:igniter>);
JEI.removeAndHide(<randomthings:imbuingstation>);
JEI.removeAndHide(<randomthings:imbue>);
JEI.removeAndHide(<randomthings:imbue:1>);
JEI.removeAndHide(<randomthings:imbue:2>);
JEI.removeAndHide(<randomthings:imbue:3>);
JEI.removeAndHide(<randomthings:inventoryrerouter>);
JEI.removeAndHide(<randomthings:inventorytester>);
JEI.removeAndHide(<randomthings:itemcollector>);
JEI.removeAndHide(<randomthings:advanceditemcollector>);
JEI.removeAndHide(<randomthings:lightredirector>);
JEI.removeAndHide(<randomthings:pitcherplant>);
JEI.removeAndHide(<randomthings:playerinterface>);
JEI.removeAndHide(<randomthings:creativeplayerinterface>);
JEI.removeAndHide(<randomthings:spectrecoil_normal>);
JEI.removeAndHide(<randomthings:spectrecoil_redstone>);
JEI.removeAndHide(<randomthings:spectrecoil_ender>);
JEI.removeAndHide(<randomthings:spectrecoil_number>);
JEI.removeAndHide(<randomthings:spectrecoil_genesis>);
JEI.removeAndHide(<randomthings:spectrelens>);
JEI.removeAndHide(<randomthings:spectreanchor>);
JEI.removeAndHide(<randomthings:spectreilluminator>);
JEI.removeAndHide(<randomthings:spectrepickaxe>);
JEI.removeAndHide(<randomthings:spectreshovel>);
JEI.removeAndHide(<randomthings:spectreaxe>);
JEI.removeAndHide(<randomthings:spectreenergyinjector>);
JEI.removeAndHide(<randomthings:ingredient:12>);
JEI.removeAndHide(<randomthings:triggerglass>);
JEI.removeAndHide(<randomthings:blazeandsteel>);
JEI.removeAndHide(<randomthings:chunkanalyzer>);
JEI.removeAndHide(<randomthings:escaperope>);
JEI.removeAndHide(<randomthings:diviningrod>);
JEI.removeAndHide(<randomthings:diviningrod:1>);
JEI.removeAndHide(<randomthings:diviningrod:2>);
JEI.removeAndHide(<randomthings:diviningrod:3>);
JEI.removeAndHide(<randomthings:diviningrod:4>);
JEI.removeAndHide(<randomthings:diviningrod:5>);
JEI.removeAndHide(<randomthings:diviningrod:6>);
JEI.removeAndHide(<randomthings:diviningrod:7>);
JEI.removeAndHide(<randomthings:diviningrod:8>);
JEI.removeAndHide(<randomthings:diviningrod:9>);
JEI.removeAndHide(<randomthings:diviningrod:10>);
JEI.removeAndHide(<randomthings:diviningrod:11>);
JEI.removeAndHide(<randomthings:diviningrod:12>);
JEI.removeAndHide(<randomthings:diviningrod:13>);
JEI.removeAndHide(<randomthings:diviningrod:14>);
JEI.removeAndHide(<randomthings:diviningrod:15>);
JEI.removeAndHide(<randomthings:diviningrod:16>);
JEI.removeAndHide(<randomthings:diviningrod:17>);
JEI.removeAndHide(<randomthings:spectrecharger:2>.withTag({options: {}}));
JEI.removeAndHide(<randomthings:spectrecharger:1>.withTag({options: {}}));
JEI.removeAndHide(<randomthings:spectrecharger>.withTag({options: {}}));
JEI.removeAndHide(<randomthings:spectrecharger:3>.withTag({options: {}}));
JEI.removeAndHide(<randomthings:goldencompass>);
JEI.removeAndHide(<randomthings:emeraldcompass>);
JEI.removeAndHide(<randomthings:portkey>);
JEI.removeAndHide(<randomthings:summoningpendulum>);
JEI.removeAndHide(<randomthings:dungeonchestgenerator>);
JEI.removeAndHide(<randomthings:superlubricentstone>);
JEI.removeAndHide(<randomthings:superlubricentboots>);
JEI.removeAndHide(<randomthings:ingredient:6>);
JEI.removeAndHide(<randomthings:superlubricentice>);
JEI.removeAndHide(<randomthings:superlubricentplatform>);
JEI.removeAndHide(<randomthings:filteredsuperlubricentplatform>);
JEI.removeAndHide(<randomthings:ingredient:7>);
JEI.removeAndHide(<randomthings:floosign>);
JEI.removeAndHide(<randomthings:flootoken>);
JEI.removeAndHide(<randomthings:floopouch>);
JEI.removeAndHide(<randomthings:floobrick>);
JEI.removeAndHide(<randomthings:plate_redirector>);
JEI.removeAndHide(<randomthings:plate_filteredredirector>);
JEI.removeAndHide(<randomthings:plate_redstone>);
JEI.removeAndHide(<randomthings:plate_corrector>);
JEI.removeAndHide(<randomthings:plate_itemsealer>);
JEI.removeAndHide(<randomthings:plate_itemrejuvenator>);
JEI.removeAndHide(<randomthings:plate_accelerator>);
JEI.removeAndHide(<randomthings:plate_accelerator_directional>);
JEI.removeAndHide(<randomthings:plate_bouncy>);
JEI.removeAndHide(<randomthings:plate_collection>);
JEI.removeAndHide(<randomthings:plate_extraction>);
JEI.removeAndHide(<randomthings:plate_processing>);
JEI.removeAndHide(<randomthings:ingredient:8>);
JEI.removeAndHide(<randomthings:rezstone>);
JEI.removeAndHide(<minecraft:potion>.withTag({Potion: "randomthings:collapse"}));
JEI.removeAndHide(<minecraft:potion>.withTag({Potion: "randomthings:long_collapse"}));
JEI.removeAndHide(<minecraft:potion>.withTag({Potion: "randomthings:strong_collapse"}));
JEI.removeAndHide(<minecraft:splash_potion>.withTag({Potion: "randomthings:collapse"}));
JEI.removeAndHide(<minecraft:splash_potion>.withTag({Potion: "randomthings:long_collapse"}));
JEI.removeAndHide(<minecraft:splash_potion>.withTag({Potion: "randomthings:strong_collapse"}));
JEI.removeAndHide(<minecraft:lingering_potion>.withTag({Potion: "randomthings:collapse"}));
JEI.removeAndHide(<minecraft:lingering_potion>.withTag({Potion: "randomthings:long_collapse"}));
JEI.removeAndHide(<minecraft:lingering_potion>.withTag({Potion: "randomthings:strong_collapse"}));
JEI.removeAndHide(<minecraft:tipped_arrow>.withTag({Potion: "randomthings:collapse"}));
JEI.removeAndHide(<minecraft:tipped_arrow>.withTag({Potion: "randomthings:long_collapse"}));
JEI.removeAndHide(<minecraft:tipped_arrow>.withTag({Potion: "randomthings:strong_collapse"}));
JEI.removeAndHide(<randomthings:voxelprojector>);
JEI.removeAndHide(<randomthings:ancientbrick>);
JEI.removeAndHide(<randomthings:naturecore>);
JEI.removeAndHide(<randomthings:magichood>);
JEI.removeAndHide(<randomthings:ingredient>);
JEI.removeAndHide(<randomthings:sakanade>);
JEI.removeAndHide(<randomthings:ingredient:9>);
JEI.removeAndHide(<randomthings:ingredient:13>);
JEI.removeAndHide(<randomthings:spectreblock>);
JEI.removeAndHide(<randomthings:specialchest>);
JEI.removeAndHide(<randomthings:specialchest:1>);
JEI.removeAndHide(<randomthings:spectrecore>);
