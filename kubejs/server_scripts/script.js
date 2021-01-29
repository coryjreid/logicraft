// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = true;
settings.logErroringRecipes = true;

const fs = require("fs");

console.info(
  "Hello, World! (You will see this line every time server resources reload)"
);

onEvent("recipes", (event) => {
  // Change recipes here
  event.shaped(Item.of("quark:polished_marble", 4), ["MM", "MM"], {
    M: "quark:marble",
  });
});

onEvent("item.tags", (event) => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});
