ServerEvents.recipes(event => {
    // RECIPES ARE (OUTPUT, INPUT)    

    event.recipes.thermal.press(Item.of('#forge:plates/brass', 1), Item.of('#forge:ingots/brass'))
    event.recipes.thermal.press(Item.of('#forge:plates/zinc', 1), Item.of('#forge:ingots/zinc'))
  })
  