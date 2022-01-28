// priority: 99
events.listen("recipes", (event) => {
    event.remove({ id: "immersiveengineering:alloysmelter/brass" });
    event.remove({ id: "immersiveengineering:arcfurnace/alloy_brass" });

    event.recipes.immersiveengineering.alloy(
        Item.of("create:brass_ingot", 2),
        "#forge:ingots/copper",
        "#forge:ingots/zinc"
    );
    event.recipes.immersiveengineering.arc_furnace(
        Item.of("create:brass_ingot", 2),
        "#forge:ingots/copper",
        "#forge:ingots/zinc"
    );

    event.recipes.immersiveengineering.metal_press(
        "thermal:enderium_plate",
        "thermal:enderium_ingot",
        "immersiveengineering:mold_plate"
    );
    event.recipes.immersiveengineering.metal_press(
        "thermal:lumium_plate",
        "thermal:lumium_ingot",
        "immersiveengineering:mold_plate"
    );
    event.recipes.immersiveengineering.metal_press(
        "thermal:signalum_plate",
        "thermal:signalum_ingot",
        "immersiveengineering:mold_plate"
    );

    event.remove({ output: "immersiveengineering:sawdust" });
    event.shaped(item.of("immersiveengineering:sawdust", 18), [" BB"], {
        B: "thermal:sawdust_block",
    });

    event.shapeless(Item.of("thermal:enderium_plate"), ["immersiveengineering:hammer", "#forge:ingots/enderium"]);
    event.shapeless(Item.of("thermal:tin_plate"), ["immersiveengineering:hammer", "#forge:ingots/tin"]);
    event.shapeless(Item.of("thermal:bronze_plate"), ["immersiveengineering:hammer", "#forge:ingots/bronze"]);
    event.shapeless(Item.of("thermal:invar_plate"), ["immersiveengineering:hammer", "#forge:ingots/invar"]);
    event.shapeless(Item.of("thermal:signalum_plate"), ["immersiveengineering:hammer", "#forge:ingots/signalum"]);
    event.shapeless(Item.of("thermal:lumium_plate"), ["immersiveengineering:hammer", "#forge:ingots/lumium"]);
});
