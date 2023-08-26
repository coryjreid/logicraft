ServerEvents.recipes(event => {
    // RECIPES ARE (OUTPUT, INPUT)    

    // Clumps -> Dirty Dust
    event.recipes.thermal.pulverizer(Item.of('#mekanism:dirty_dusts/iron', 1), Item.of('#mekanism:clumps/iron', 1))
    event.recipes.thermal.pulverizer(Item.of('#mekanism:dirty_dusts/gold', 1), Item.of('#mekanism:clumps/gold', 1))
    event.recipes.thermal.pulverizer(Item.of('#mekanism:dirty_dusts/osmium', 1), Item.of('#mekanism:clumps/osmium', 1))
    event.recipes.thermal.pulverizer(Item.of('#mekanism:dirty_dusts/copper', 1), Item.of('#mekanism:clumps/copper', 1))
    event.recipes.thermal.pulverizer(Item.of('#mekanism:dirty_dusts/tin', 1), Item.of('#mekanism:clumps/tin', 1))
    event.recipes.thermal.pulverizer(Item.of('#mekanism:dirty_dusts/lead', 1), Item.of('#mekanism:clumps/lead', 1))
    event.recipes.thermal.pulverizer(Item.of('#mekanism:dirty_dusts/uranium', 1), Item.of('#mekanism:clumps/uranium', 1))

    // Gems -> Dust
    event.recipes.thermal.pulverizer(Item.of('#forge:dusts/fluorite', 1), Item.of('#forge:gems/fluorite', 1))
    event.recipes.thermal.pulverizer(Item.of('#forge:dusts/quartz', 1), Item.of('#forge:gems/quartz', 1))
    
    event.recipes.mekanism.crushing(Item.of('#forge:dusts/sulfur', 1), Item.of('#forge:gems/sulfur', 1))
    event.recipes.mekanism.crushing(Item.of('#forge:dusts/quartz', 1), Item.of('#forge:gems/quartz', 1))
    event.recipes.mekanism.crushing(Item.of('#forge:dusts/niter', 1), Item.of('#forge:gems/niter', 1))
    event.recipes.mekanism.crushing(Item.of('#forge:dusts/cinnabar', 1), Item.of('#forge:gems/cinnabar', 1))
    event.recipes.mekanism.crushing(Item.of('#forge:dusts/apatite', 1), Item.of('#forge:gems/apatite', 1))
    
    // Misc -> Dust    
    event.recipes.thermal.pulverizer(Item.of('#forge:dusts/refined_obsidian', 1), Item.of('#forge:ingots/refined_obsidian', 1))    
    event.recipes.thermal.pulverizer(Item.of('#forge:dusts/charcoal', 1), Item.of('#forge:charcoal', 1))
    event.recipes.thermal.pulverizer(Item.of('#forge:dusts/coal', 1), Item.of('#minecraft:coals', 1))
    
    event.recipes.mekanism.crushing(Item.of('#forge:dusts/ender_pearl', 1), Item.of('#forge:ender_pearls', 1))
    event.recipes.mekanism.crushing(Item.of('#forge:dusts/wood', 8), ['#forge:stripped_logs', '#forge:stripped_wood', '#minecraft:logs', '#minecraft:logs_that_burn', 'byg:all/logs'])
    event.recipes.mekanism.crushing(Item.of('#forge:dusts/glowstone', 4), Item.of('#forge:storage_blocks/glowstone', 1))

    // Raw -> Dust
    event.recipes.thermal.pulverizer(Item.of('#forge:dusts/osmium', 1), Item.of('#forge:raw_materials/osmium', 1))
    event.recipes.thermal.pulverizer(Item.of('#forge:dusts/uranium', 1), Item.of('#forge:raw_materials/uranium', 1))
    event.recipes.thermal.pulverizer(Item.of('create:crushed_raw_zinc', 2), Item.of('#forge:raw_materials/zinc', 1))
    
    event.recipes.mekanism.crushing(Item.of('#forge:dusts/nickel', 1), Item.of('#forge:raw_materials/nickel', 1))
    event.recipes.mekanism.crushing(Item.of('#forge:dusts/silver', 1), Item.of('#forge:raw_materials/silver', 1))
    event.recipes.mekanism.crushing(Item.of('#forge:dusts/osmium', 1), Item.of('#forge:raw_materials/osmium', 1))
    event.recipes.mekanism.crushing(Item.of('#forge:dusts/uranium', 1), Item.of('#forge:raw_materials/uranium', 1))
    event.recipes.mekanism.crushing(Item.of('create:crushed_raw_zinc', 2), Item.of('#forge:raw_materials/zinc', 1))

    // Ores -> Dust
    event.recipes.thermal.pulverizer(Item.of('#forge:gems/quartz', 2), Item.of('byg:brimstone_nether_quartz_ore', 1))
    event.recipes.thermal.pulverizer(Item.of('#forge:gems/quartz', 2), Item.of('byg:blue_nether_quartz_ore', 1))
    event.recipes.thermal.pulverizer(Item.of('#forge:gems/quartz', 2), Item.of('minecraft:nether_quartz_ore', 1))
    event.recipes.thermal.pulverizer(Item.of('#forge:gems/quartz', 2), Item.of('byg:raw_quartz_block', 1))

    event.recipes.mekanism.crushing(Item.of('#forge:dusts/nickel', 2), Item.of('#forge:ores/nickel', 1))    
    event.recipes.mekanism.crushing(Item.of('#forge:dusts/silver', 2), Item.of('#forge:ores/silver', 1))
    event.recipes.mekanism.crushing(Item.of('#forge:gems/quartz', 2), Item.of('byg:brimstone_nether_quartz_ore', 1))
    event.recipes.mekanism.crushing(Item.of('#forge:gems/quartz', 2), Item.of('byg:blue_nether_quartz_ore', 1))
    event.recipes.mekanism.crushing(Item.of('#forge:gems/quartz', 2), Item.of('minecraft:nether_quartz_ore', 1))
    event.recipes.mekanism.crushing(Item.of('#forge:gems/quartz', 2), Item.of('byg:raw_quartz_block', 1))
    
    // Ingots -> Dust
    event.recipes.mekanism.crushing(Item.of('#forge:dusts/cyanite', 1), Item.of('#forge:ingots/cyanite', 1))
    event.recipes.mekanism.crushing(Item.of('#forge:dusts/graphite', 1), Item.of('#forge:ingots/graphite', 1))
  })
  