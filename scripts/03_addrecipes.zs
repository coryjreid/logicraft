/************************************************************
 *
 * This file is for adding recipes.
 *
 ************************************************************/

/* Minecraft Utility Recipes - Chest */
recipes.addShaped(<minecraft:chest> * 4, [
  [<ore:logWood>, <ore:logWood>, <ore:logWood>],
  [<ore:logWood>, null, <ore:logWood>],
  [<ore:logWood>, <ore:logWood>, <ore:logWood>]
]);

/* Immersive Engineering */
/* Add recipes for correct plates */
recipes.addShapeless("immersiveengineering_material/plate_silver", <thermalfoundation:material:322>, [<ore:ingotSilver>, <immersiveengineering:tool>]);
recipes.addShapeless("immersiveengineering_material/plate_steel", <thermalfoundation:material:352>, [<ore:ingotSteel>, <immersiveengineering:tool>]);
recipes.addShapeless("immersiveengineering_material/plate_lead", <thermalfoundation:material:323>, [<ore:ingotLead>, <immersiveengineering:tool>]);
recipes.addShapeless("immersiveengineering_material/plate_aluminum", <thermalfoundation:material:324>, [<ore:ingotAluminum>, <immersiveengineering:tool>]);
recipes.addShapeless("immersiveengineering_material/plate_constantan", <thermalfoundation:material:356>, [<ore:ingotConstantan>, <immersiveengineering:tool>]);
recipes.addShapeless("immersiveengineering_material/plate_nickel", <thermalfoundation:material:325>, [<ore:ingotNickel>, <immersiveengineering:tool>]);
recipes.addShapeless("immersiveengineering_material/plate_gold", <thermalfoundation:material:33>, [<ore:ingotGold>, <immersiveengineering:tool>]);
recipes.addShapeless("immersiveengineering_material/plate_uranium", <immersiveengineering:metal:35>, [<ore:ingotUranium>, <immersiveengineering:tool>]);
recipes.addShapeless("immersiveengineering_material/plate_electrum", <thermalfoundation:material:353>, [<ore:ingotElectrum>, <immersiveengineering:tool>]);
recipes.addShapeless("immersiveengineering_material/plate_copper", <thermalfoundation:material:320>, [<ore:ingotCopper>, <immersiveengineering:tool>]);
recipes.addShapeless("immersiveengineering_material/plate_iron", <thermalfoundation:material:32>, [<ore:ingotIron>, <immersiveengineering:tool>]);