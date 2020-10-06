import loottweaker.LootTweaker;
import loottweaker.vanilla.loot.LootTable;
import loottweaker.vanilla.loot.LootPool;
import loottweaker.vanilla.loot.Functions;

/*******************************************************************************
 * ENDERMAN
 ******************************************************************************/
val endermanTable = LootTweaker.getTable("minecraft:entities/enderman");

# Change Ender Pearl rate
val mainPool = endermanTable.getPool("main");
mainPool.setRolls(1, 1);
mainPool.removeEntry("minecraft:ender_pearl");
mainPool.addItemEntryHelper(
    <minecraft:ender_pearl>,
    1,
    0,
    [
        Functions.setCount(0, 2),
        Functions.lootingEnchantBonus(1, 1, 0)
    ],
    [],
    "minecraft:ender_pearl"
);

# Add Endstone
val endstonePool = endermanTable.addPool("endstone", 1, 1, 0, 0);
endstonePool.addItemEntryHelper(
    <minecraft:end_stone>,
    1,
    0,
    [
        Functions.setCount(0, 2),
        Functions.lootingEnchantBonus(1, 1, 0)
    ],
    [],
    "minecraft:end_stone"
);

/*******************************************************************************
 * SILVER FISH
 ******************************************************************************/
val silverfishTable = LootTweaker.getTable("minecraft:entities/silverfish");

# Add Nether Quartz
val quartzPool = silverfishTable.addPool("netherquartz", 1, 1, 0, 0);
quartzPool.addItemEntryHelper(
    <minecraft:quartz>,
    1,
    0,
    [
        Functions.setCount(0, 2),
        Functions.lootingEnchantBonus(1, 1, 0)
    ],
    [],
    "minecraft:quartz"
);

/*******************************************************************************
 * VEX
 ******************************************************************************/
val vexTable = LootTweaker.getTable("minecraft:entities/vex");

# Add Dimensional Shards
val dimensionalshardPool = vexTable.addPool("dimensionalshard", 1, 1, 0, 0);
dimensionalshardPool.addItemEntryHelper(
    <rftools:dimensional_shard>,
    1,
    0,
    [
        Functions.setCount(0, 2),
        Functions.lootingEnchantBonus(1, 1, 0)
    ],
    [],
    "rftools:dimensional_shard"
);
