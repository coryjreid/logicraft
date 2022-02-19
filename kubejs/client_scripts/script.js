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
  event.hide(/.+creative(.+|$)/);
  event.hide("create:handheld_worldshaper");
});
