 // priority: 99
 events.listen('recipes', event => {
    event.shapeless(Item.of('minecraft:chest'), ['#forge:chests/wooden'])
    event.shapeless(Item.of('minecraft:trapped_chest'), ['#forge:chests/trapped'])

      event.shapeless(Item.of('minecraft:ladder'), ['quark:spruce_ladder'])
      event.shapeless(Item.of('minecraft:ladder'), ['quark:birch_ladder'])
      event.shapeless(Item.of('minecraft:ladder'), ['quark:jungle_ladder'])
      event.shapeless(Item.of('minecraft:ladder'), ['quark:acacia_ladder'])
      event.shapeless(Item.of('minecraft:ladder'), ['quark:dark_oak_ladder'])
      event.shapeless(Item.of('minecraft:ladder'), ['quark:crimson_ladder'])
      event.shapeless(Item.of('minecraft:ladder'), ['quark:warped_ladder'])
 })