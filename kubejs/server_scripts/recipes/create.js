// priority: 99
events.listen("recipes", (event) => {

    event.remove({ id: "create:emptying/milk_bucket" });
    event.remove({ id: "create:filling/milk_bucket" });

    event.recipes.create.pressing("thermal:tin_plate", "thermal:tin_ingot").processingTime(60);
    event.recipes.create.pressing("thermal:lead_plate", "thermal:lead_ingot").processingTime(60);
    event.recipes.create.pressing("thermal:silver_plate", "thermal:silver_ingot").processingTime(60);
    event.recipes.create.pressing("thermal:nickel_plate", "thermal:nickel_ingot").processingTime(60);
    event.recipes.create.pressing("thermal:bronze_plate", "thermal:bronze_ingot").processingTime(60);
    event.recipes.create.pressing("thermal:electrum_plate", "thermal:electrum_ingot").processingTime(60);
    event.recipes.create.pressing("thermal:invar_plate", "thermal:invar_ingot").processingTime(60);
    event.recipes.create.pressing("thermal:constantan_plate", "thermal:constantan_ingot").processingTime(60);
    event.recipes.create.pressing("thermal:signalum_plate", "thermal:signalum_ingot").processingTime(60);
    event.recipes.create.pressing("thermal:lumium_plate", "thermal:lumium_ingot").processingTime(60);
    event.recipes.create.pressing("thermal:enderium_plate", "thermal:enderium_ingot").processingTime(60);
    event.recipes.create
        .pressing("immersiveengineering:plate_aluminum", "immersiveengineering:ingot_aluminum")
        .processingTime(60);
    event.recipes.create.pressing("immersiveengineering:plate_uranium", "mekanism:ingot_uranium").processingTime(60);
    event.recipes.create
        .pressing("immersiveengineering:plate_steel", "immersiveengineering:ingot_steel")
        .processingTime(60);
});
