// priority:0

console.info(
  "Hello, World! (You will see this line every time client resources reload)"
);

onEvent("jei.hide.items", (event) => {
  // Hide items in JEI here
  // event.hide('minecraft:cobblestone')

  // Chisels and Bits
  event.hide("chiselsandbits:block_bit");

  // Extra Disks Items
  event.hide("extradisks:infinite_storage_block");
  event.hide("extradisks:infinite_storage_part");
  event.hide("extradisks:infinite_storage_disk");
  event.hide("extradisks:infinite_fluid_storage_block");
  event.hide("extradisks:infinite_fluid_storage_part");
  event.hide("extradisks:infinite_fluid_storage_disk");

  // Mekanism Items
  event.hide("mekanism:copper_core");
  event.hide("mekanism:tin_core");
  event.hide("mekanism:lead_core");

  // TheOneProbe
  event.hide(/theoneprobe.+/)

  // Spawn Eggs
  event.hide(/.+spawn_egg(.+|$)/);

  // Creative Items
  event.hide("bloodmagic:activationcrystalcreative");
  event.hide("botania:lens_storm");
  event.hide("botania:creative_pool");
  event.hide("botania:infrangible_platform");
  event.hide("cyclic:battery_infinite");
  event.hide("immersiveengineering:capacitor_creative");
  event.hide("mekanism:creative_bin");
  event.hide("mekanism:creative_fluid_tank");
  event.hide("mekanism:creative_chemical_tank");
  event.hide("rftoolspower:dimensionalcell_creative");
  event.hide("rftoolsutility:creative_screen");
  event.hide("mekanism:creative_fluid_tank");
  event.hide("refinedstorage:creative_storage_disk");
  event.hide("refinedstorage:creative_fluid_storage_disk");
  event.hide("refinedstorage:creative_portable_grid");
  event.hide("refinedstorage:creative_storage_block");
  event.hide("refinedstorage:creative_fluid_storage_block");
  event.hide("refinedstorage:creative_controller");
  event.hide("refinedstorage:creative_wireless_grid");
  event.hide("refinedstorage:creative_wireless_fluid_grid");
  event.hide("refinedstorage:creative_wireless_crafting_monitor");
  event.hide("refinedstorage:white_creative_controller");
  event.hide("refinedstorage:orange_creative_controller");
  event.hide("refinedstorage:magenta_creative_controller");
  event.hide("refinedstorage:lime_creative_controller");
  event.hide("refinedstorage:yellow_creative_controller");
  event.hide("mekanism:creative_energy_cube");
  event.hide("refinedstorage:pink_creative_controller");
  event.hide("refinedstorage:gray_creative_controller");
  event.hide("refinedstorage:light_gray_creative_controller");
  event.hide("refinedstorage:cyan_creative_controller");
  event.hide("refinedstorage:purple_creative_controller");
  event.hide("refinedstorage:blue_creative_controller");
  event.hide("refinedstorage:brown_creative_controller");
  event.hide("refinedstorage:green_creative_controller");
  event.hide("refinedstorage:black_creative_controller");
  event.hide("refinedstorage:red_creative_controller");
  event.hide("refinedstorageaddons:creative_wireless_crafting_grid");
  event.hide("simplyjetpacks:jetpack_creative");
  event.hide("simplyjetpacks:jetpack_creative_armored");
  event.hide("theoneprobe:creativeprobe");
  event.hide('thermal:rf_coil_creative_augment');
  event.hide('thermal:fluid_tank_creative_augment');
  event.hide('thermal:machine_efficiency_creative_augment');
  event.hide('thermal:machine_catalyst_creative_augment');
  event.hide('buildinggadgets:construction_paste_container_creative');
  event.hide('create:creative_motor');
  event.hide('create:creative_fluid_tank');
  event.hide('create:creative_crate');
  event.hide('create:creative_blaze_cake');
  event.hide('create:handheld_worldshaper');
  event.hide('bigreactors:reinforced_reactorcreativewatergenerator');
  event.hide('bigreactors:basic_turbinecreativesteamgenerator');
  event.hide('bigreactors:reinforced_turbinecreativesteamgenerator');
  event.hide('mysticalagradditions:creative_essence');
  event.hide('wormhole:creative_energy_cell');
});
