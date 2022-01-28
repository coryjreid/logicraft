// priority: 99
events.listen('recipes', event => {
    event.recipes.mekanism.enriching(item.of('immersiveengineering:dust_aluminum', 2), '#forge:ores/aluminum')
    event.recipes.mekanism.crushing(item.of('immersiveengineering:dust_aluminum'), '#forge:ingots/aluminum')

    event.recipes.mekanism.enriching(item.of('thermal:silver_dust', 2), '#forge:ores/silver')
    event.recipes.mekanism.crushing(item.of('thermal:silver_dust'), '#forge:ingots/silver')

    event.recipes.mekanism.enriching(item.of('thermal:nickel_dust', 2), '#forge:ores/nickel')
    event.recipes.mekanism.crushing(item.of('thermal:nickel_dust'), '#forge:ingots/nickel')

    event.recipes.mekanism.enriching(item.of('create:crushed_zinc_ore', 2), '#forge:ores/zinc')
})