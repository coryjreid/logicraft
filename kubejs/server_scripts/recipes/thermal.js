// priority: 99
events.listen("recipes", (event) => {
    event.recipes.thermal.pulverizer(item.of("immersiveengineering:dust_aluminum", 2), "#forge:ores/aluminum");
    event.recipes.thermal.pulverizer(item.of("immersiveengineering:dust_aluminum"), "#forge:ingots/aluminum");
    event.recipes.thermal.pulverizer(item.of("immersiveengineering:dust_steel"), "#forge:ingots/steel");
    event.recipes.thermal.pulverizer(item.of("immersiveengineering:dust_hop_graphite"), "#forge:ingots/hop_graphite");

    event.recipes.thermal.pulverizer(item.of("mekanism:dust_refined_obsidian"), "#forge:ingots/refined_obsidian");
    event.recipes.thermal.pulverizer(item.of("mekanism:dust_uranium"), "#forge:ingots/uranium");
    event.recipes.thermal.pulverizer(item.of("mekanism:dust_osmium"), "#forge:ingots/osmium");
    event.recipes.thermal.pulverizer(item.of("mekanism:fluorite_gem", 6), "#forge:ores/fluorite");
    event.recipes.thermal.pulverizer(item.of("mekanism:dust_obsidian", 4), "#forge:obsidian");
    event.recipes.thermal.pulverizer(item.of("minecraft:ender_pearl"), "#forge:dusts/ender");

    event.recipes.thermal.pulverizer(item.of("minecraft:glowstone_dust"), "#forge:ingots/refined_glowstone");

    event.recipes.thermal.smelter(
        [item.of("immersiveengineering:dust_aluminum"), item.of("thermal:rich_slag").chance(0.3)],
        "#forge:ores/aluminum"
    );

    event.remove({ id: "thermal:machine/create/smelter_create_crushed_iron_ore" });
    event.remove({ id: "thermal:machine/create/smelter_create_crushed_gold_ore" });

    event.remove({ id: "thermal:machine/create/smelter_create_crushed_copper_ore" });
    event.remove({ id: "thermal:machine/create/smelter_create_crushed_copper_ore" });
    event.remove({ id: "thermal:machine/create/smelter_create_crushed_copper_ore" });

    event.recipes.thermal.press("immersiveengineering:plate_aluminum", "#forge:ingots/aluminum");
    event.recipes.thermal.press("immersiveengineering:plate_steel", "#forge:ingots/steel");

    event.remove({ id: "immersiveengineering:crafting/nugget_silver_to_ingot_silver" });
    event.remove({ id: "thermal:storage/silver_ingot_from_nuggets" });

    event.shaped(item.of("thermal:silver_ingot"), ["NNN", "NNN", "NNN"], {
        N: "#forge:nuggets/silver",
    });

    event.remove({ id: "immersiveengineering:crafting/nugget_constantan_to_ingot_constantan" });
    event.remove({ id: "thermal:storage/constantan_ingot_from_nuggets" });

    event.shaped(item.of("thermal:constantan_ingot"), ["NNN", "NNN", "NNN"], {
        N: "#forge:nuggets/constantan",
    });

    event.remove({ id: "immersiveengineering:crafting/nugget_nickel_to_ingot_nickel" });
    event.remove({ id: "thermal:storage/nickel_ingot_from_nuggets" });

    event.shaped(item.of("thermal:nickel_ingot"), ["NNN", "NNN", "NNN"], {
        N: "#forge:nuggets/nickel",
    });

    event.remove({ id: "immersiveengineering:crafting/nugget_electrum_to_ingot_electrum" });
    event.remove({ id: "thermal:storage/electrum_ingot_from_electrum" });

    event.shaped(item.of("thermal:electrum_ingot"), ["NNN", "NNN", "NNN"], {
        N: "#forge:nuggets/electrum",
    });

    event.remove({ id: "thermal:machine/centrifuge/centrifuge_oil_sand" });
    event.recipes.thermal.centrifuge(
        [
            item.of("minecraft:sand").chance(0.75),
            item.of("thermal:bitumen").chance(1.5),
            item.of("thermal:tar").chance(1.0),
            fluid.of("pneumaticcraft:oil", 100),
        ],
        "thermal:oil_sand"
    );

    event.remove({ id: "thermal:machine/centrifuge/centrifuge_oil_red_sand" });
    event.recipes.thermal.centrifuge(
        [
            item.of("minecraft:red_sand").chance(0.75),
            item.of("thermal:bitumen").chance(1.5),
            item.of("thermal:tar").chance(1.0),
            fluid.of("pneumaticcraft:oil", 100),
        ],
        "thermal:oil_red_sand"
    );

    event.remove({ id: "thermal:machine/refinery/refinery_crude_oil" });
    event.recipes.thermal.refinery(
        [fluid.of("thermal:heavy_oil", 40), fluid.of("thermal:light_oil", 60), item.of("thermal:bitumen").chance(1)],
        fluid.of("pneumaticcraft:oil", 100)
    );

    event.remove({ id: "create:empty_mekanism_creative_fluid_tank_of_thermal_crude_oil" });
    event.remove({ id: "create:empty_thermal_crude_oil_bucket_of_thermal_crude_oil" });
    event.remove({ id: "create:fill_minecraft_bucket_with_thermal_crude_oil" });
    event.remove({ id: "create:fill_mysterymilk_squid_milk_with_thermal_crude_oil" });
    event.remove({ id: "create:fill_mysterymilk_ravager_milk_with_thermal_crude_oil" });
    event.remove({ id: "create:fill_mysterymilk_slime_milk_with_thermal_crude_oil" });
    event.remove({ id: "create:fill_mysterymilk_phantom_milk_with_thermal_crude_oil" });
    event.remove({ id: "create:fill_mysterymilk_spider_milk_with_thermal_crude_oil" });
});
