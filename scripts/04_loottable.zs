import loottweaker.LootTweaker;
import loottweaker.vanilla.loot.LootTable;
import loottweaker.vanilla.loot.LootPool;
import loottweaker.vanilla.loot.Functions;

# Add Endstone to Enderman
val enderman = LootTweaker.getTable("minecraft:entities/enderman");
val endstone = enderman.addPool("endstone", 1, 1, 1, 1);
#endstone.addItemEntry(<minecraft:end_stone>, 5);
endstone.addItemEntryHelper(<minecraft:end_stone>, 5, 1, [Functions.lootingEnchantBonus(2, 2, 2)], []);

