// priority: 100

settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = false;

events.listen("recipes", (event) => {
    const { smelting, blasting } = event.recipes.minecraft;

    var unifyMetal = function (name, hasOre, nuggetItem, ingotItem, blockItem, dustItem, gearItem, plateItem) {
        if (ingotItem !== "") event.replaceOutput("#forge:ingots/" + name, ingotItem);
        if (dustItem !== "") event.replaceOutput("#forge:dusts/" + name, dustItem);
        if (nuggetItem !== "") event.replaceOutput("#forge:nuggets/" + name, nuggetItem);
        if (blockItem !== "") event.replaceOutput("#forge:storage_blocks/" + name, blockItem);
        if (gearItem !== "") event.replaceOutput("#forge:gears/" + name, gearItem);
        if (plateItem !== "") event.replaceOutput("#forge:plates/" + name, plateItem);
        event.remove({ output: "#forge:ingots/" + name, type: "minecraft:smelting" });
        event.remove({ output: "#forge:ingots/" + name, type: "minecraft:blasting" });
        if (dustItem !== "" && ingotItem !== "") {
            smelting(ingotItem, "#forge:dusts/" + name).xp(0.7);
            blasting(ingotItem, "#forge:dusts/" + name).xp(0.7);
        }
        if (hasOre && ingotItem !== "") {
            smelting(ingotItem, "#forge:ores/" + name).xp(0.7);
            blasting(ingotItem, "#forge:ores/" + name).xp(0.7);
        }
    };

    unifyMetal(
        "iron",
        true,
        "minecraft:iron_nugget",
        "minecraft:iron_ingot",
        "minecraft:iron_block",
        "thermal:iron_dust",
        "thermal:iron_gear",
        "thermal:iron_plate"
    );
    unifyMetal(
        "gold",
        true,
        "minecraft:gold_nugget",
        "minecraft:gold_ingot",
        "minecraft:gold_block",
        "thermal:gold_dust",
        "thermal:gold_gear",
        "thermal:gold_plate"
    );
    unifyMetal("diamond", true, "", "", "minecraft:diamond_block", "thermal:diamond_dust", "thermal:diamond_gear", "");
    unifyMetal(
        "steel",
        false,
        "immersiveengineering:nugget_steel",
        "immersiveengineering:ingot_steel",
        "immersiveengineering:storage_steel",
        "immersiveengineering:dust_steel",
        "",
        "immersiveengineering:plate_steel"
    );
    unifyMetal(
        "copper",
        true,
        "thermal:copper_nugget",
        "thermal:copper_ingot",
        "thermal:copper_block",
        "thermal:copper_dust",
        "thermal:copper_gear",
        "thermal:copper_plate"
    );
    unifyMetal(
        "silver",
        true,
        "thermal:silver_nugget",
        "thermal:silver_ingot",
        "thermal:silver_block",
        "thermal:silver_dust",
        "thermal:silver_gear",
        "thermal:silver_plate"
    );
    unifyMetal(
        "nickel",
        true,
        "thermal:nickel_nugget",
        "thermal:nickel_ingot",
        "thermal:nickel_block",
        "thermal:nickel_dust",
        "thermal:nickel_gear",
        "thermal:nickel_plate"
    );
    unifyMetal(
        "uranium",
        true,
        "mekanism:nugget_uranium",
        "mekanism:ingot_uranium",
        "mekanism:block_uranium",
        "mekanism:dust_uranium",
        "",
        "immersiveengineering:plate_uranium"
    );
    unifyMetal(
        "tin",
        true,
        "thermal:tin_nugget",
        "thermal:tin_ingot",
        "thermal:tin_block",
        "thermal:tin_dust",
        "thermal:tin_gear",
        "thermal:tin_plate"
    );
    unifyMetal(
        "lead",
        true,
        "thermal:lead_nugget",
        "thermal:lead_ingot",
        "thermal:lead_block",
        "thermal:lead_dust",
        "thermal:lead_gear",
        "thermal:lead_plate"
    );
    unifyMetal(
        "bronze",
        false,
        "thermal:bronze_nugget",
        "thermal:bronze_ingot",
        "thermal:bronze_block",
        "thermal:bronze_dust",
        "thermal:bronze_gear",
        "thermal:bronze_plate"
    );
    unifyMetal(
        "electrum",
        false,
        "thermal:electrum_nugget",
        "thermal:electrum_ingot",
        "thermal:electrum_block",
        "thermal:electrum_dust",
        "thermal:electrum_gear",
        "thermal:electrum_plate"
    );
    unifyMetal(
        "bronze",
        false,
        "thermal:bronze_nugget",
        "thermal:bronze_ingot",
        "thermal:bronze_block",
        "thermal:bronze_dust",
        "thermal:bronze_gear",
        "thermal:bronze_plate"
    );
    unifyMetal(
        "constantan",
        false,
        "thermal:constantan_nugget",
        "thermal:constantan_ingot",
        "thermal:constantan_block",
        "thermal:constantan_dust",
        "thermal:constantan_gear",
        "thermal:constantan_plate"
    );

    event.remove({ output: "immersiveengineering:slab_storage_constantan" });
    event.replaceOutput("mekanism:copper_ore", "thermal:copper_ore");
    event.replaceOutput("mekanism:lead_ore", "thermal:lead_ore");
    event.replaceOutput("mekanism:tin_ore", "thermal:tin_ore");

    event.remove({ output: "mcwbridges:iron_platform" });
    event.replaceInput("mcwbridges:iron_platform", "#forge:plates/iron");
    event.remove({ output: "mcwbridges:iron_rod" });
    event.replaceInput("mcwbridges:iron_rod", "#forge:rods/iron");

    event.replaceInput("appliedenergistics2:silicon", "#forge:silicon");
    event.replaceOutput("appliedenergistics2:silicon", "refinedstorage:silicon");

    event.replaceInput("appliedenergistics2:ender_dust", "#forge:dusts/ender");
    event.replaceInput("thermal:ender_pearl_dust", "#forge:dusts/ender");
    event.replaceOutput("thermal:ender_pearl_dust", "appliedenergistics2:ender_dust");

    event.replaceInput("thermal:quartz_dust", "#forge:dusts/quartz");
    event.replaceOutput("thermal:quartz_dust", "appliedenergistics2:nether_quartz_dust");
    event.replaceInput("mekanism:dust_quartz", "#forge:dusts/quartz");
    event.replaceOutput("mekanism:dust_quartz", "appliedenergistics2:nether_quartz_dust");

    event.replaceInput("mekanism:dust_quartz", "#forge:dusts/quartz");
    event.replaceOutput("mekanism:dust_quartz", "appliedenergistics2:nether_quartz_dust");

    event.replaceInput("mekanism:dust_lapis_lazuli", "#forge:dusts/lapis");
    event.replaceOutput("mekanism:dust_lapis_lazuli", "thermal:lapis_dust");

    event.replaceInput("mekanism:dust_emerald", "#forge:dusts/emerald");
    event.replaceOutput("mekanism:dust_emerald", "thermal:emerald_dust");

    event.replaceInput("immersiveengineering:dust_wood", "#forge:sawdust");
    event.replaceOutput("immersiveengineering:dust_wood", "thermal:sawdust");
    event.replaceInput("mekanism:sawdust", "#forge:sawdust");
    event.replaceOutput("mekanism:sawdust", "thermal:sawdust");

    event.replaceInput("immersiveengineering:dust_sulfur", "#forge:dusts/sulfur");
    event.replaceOutput("immersiveengineering:dust_sulfur", "thermal:sulfur_dust");
    event.replaceInput("mekanism:dust_sulfur", "#forge:dusts/sulfur");
    event.replaceOutput("mekanism:dust_sulfur", "thermal:sulfur_dust");

    event.replaceOutput("bloodmagic:coalsand", "mekanism:dust_coal");
    event.replaceOutput("bloodmagic:saltpeter", "immersiveengineering:dust_saltpeter");
    event.replaceOutput("bloodmagic:sulfur", "thermal:sulfur_dust");
    event.replaceOutput("bloodmagic:ironsand", "thermal:iron_dust");
    event.replaceOutput("bloodmagic:goldsand", "thermal:gold_dust");

    event.remove({ id: "mysticalagriculture:essence/common/sulfur" });
    event.shaped(item.of("thermal:sulfur_dust", 8), ["   ", "SSS", "   "], {
        S: "mysticalagriculture:sulfur_essence",
    });

    event.replaceInput("quantumstorage:chestdiamond", "krate:krate_big");

    event.remove({ id: "envirocore:blocks/crystals/litherite/ct_uncraft_litherite_blocks" });
    event.remove({ id: "envirocore:blocks/crystals/erodium/ct_uncraft_erodium_blocks" });
    event.remove({ id: "envirocore:blocks/crystals/kyronite/ct_uncraft_kyronite_blocks" });
    event.remove({ id: "envirocore:blocks/crystals/pladium/ct_uncraft_pladium_blocks" });
    event.remove({ id: "envirocore:blocks/crystals/ionite/ct_uncraft_ionite_blocks" });
    event.remove({ id: "envirocore:blocks/crystals/aethium/ct_uncraft_aethium _blocks" });
    event.remove({ id: "envirocore:blocks/crystals/nanorite/ct_uncraft_nanorite_blocks" });
    event.remove({ id: "envirocore:blocks/crystals/xerothium/ct_uncraft_xerothium_blocks" });
});

events.listen("item.tags", (event) => {
    event.get("forge:dusts/quartz").remove("thermal:quartz_dust");
    event.get("forge:dusts/quartz").remove("mekanism:dust_quartz");

    event.get("forge:dusts/lapis").remove("mekanism:dust_lapis_lazuli");

    event.get("forge:dusts/emerald").remove("mekanism:dust_emerald");

    event.get("forge:sawdust").remove("immersiveengineering:dust_wood");
    event.get("forge:sawdust").remove("mekanism:sawdust");
    event.get("forge:dusts/wood").remove("immersiveengineering:dust_wood");
    event.get("forge:dusts/wood").remove("mekanism:sawdust");
    event.get("forge:dusts/wood").add("thermal:sawdust");

    event.get("forge:dusts/sulfur").remove("immersiveengineering:dust_sulfur");
    event.get("minecolonies:blacksmith_ingredient_excluded").remove("mekanism:dust_sulfur");
    event.get("minecolonies:blacksmith_product_excluded").remove("mekanism:dust_sulfur");
    event.get("forge:dusts/sulfur").remove("mekanism:dust_sulfur");
    event.get("minecolonies:dyer_ingredient").remove("mekanism:dust_sulfur");
    event.get("minecolonies:dyer_product").remove("mekanism:dust_sulfur");
    event.get("forge:dyes/yellow").remove("mekanism:dust_sulfur");
    event.get("minecolonies:fletcher_ingredient_excluded").remove("mekanism:dust_sulfur");
    event.get("minecolonies:glassblower_ingredient_excluded").remove("mekanism:dust_sulfur");
    event.get("minecolonies:stonemason_ingredient_excluded").remove("mekanism:dust_sulfur");
    event.get("minecolonies:blacksmith_ingredient_excluded").add("thermal:sulfur_dust");
    event.get("minecolonies:blacksmith_product_excluded").add("thermal:sulfur_dust");
    event.get("forge:dusts/sulfur").add("thermal:sulfur_dust");
    event.get("minecolonies:dyer_ingredient").add("thermal:sulfur_dust");
    event.get("minecolonies:dyer_product").add("thermal:sulfur_dust");
    event.get("forge:dyes/yellow").add("thermal:sulfur_dust");
    event.get("minecolonies:fletcher_ingredient_excluded").add("thermal:sulfur_dust");
    event.get("minecolonies:glassblower_ingredient_excluded").add("thermal:sulfur_dust");
    event.get("minecolonies:stonemason_ingredient_excluded").add("thermal:sulfur_dust");

    event.get("forge:dusts/iron").remove("bloodmagic:ironsand");
    event.get("forge:dusts/gold").remove("bloodmagic:goldsand");
    event.get("forge:dusts/sulfur").remove("bloodmagic:sulfur");
    event.get("forge:dusts/saltpeter").remove("bloodmagic:saltpeter");
    event.get("forge:dusts/coal").remove("bloodmagic:coalsand");

    event.get("forge:wool").add("/.+wool/");
    event.get("forge:wool/white").add("/.+(white).+wool/");
    event.get("forge:wool/orange").add("/.+(orange).+wool/");
    event.get("forge:wool/magenta").add("/.+(magenta).+wool/");
    event.get("forge:wool/light_blue").add("/.+(light_blue).+wool/");
    event.get("forge:wool/light_gray").add("/.+(light_gray).+wool/");
    event.get("forge:wool/yellow").add("/.+(yellow).+wool/");
    event.get("forge:wool/lime").add("/.+(black).+lime/");
    event.get("forge:wool/pink").add("/.+(pink).+wool/");
    event.get("forge:wool/gray").add("/.+(gray).+wool/");
    event.get("forge:wool/cyan").add("/.+(cyan).+wool/");
    event.get("forge:wool/purple").add("/.+(purple).+wool/");
    event.get("forge:wool/blue").add("/.+(blue).+wool/");
    event.get("forge:wool/brown").add("/.+(brown).+brown/");
    event.get("forge:wool/green").add("/.+(green).+wool/");
    event.get("forge:wool/red").add("/.+(red).+wool/");
    event.get("forge:wool/black").add("/.+(black).+wool/");
});

events.listen("fluid.tags", (event) => {
    event
        .get("minecraft:water")
        .remove([
            "create:flowing_honey",
            "create:honey",
            "create:flowing_chocolate",
            "create:chocolate",
        ]);
});
