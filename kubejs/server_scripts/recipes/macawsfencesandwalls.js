
events.listen("recipes", (event) => {
    event.remove({id: 'mcwfences:oak_horse_fence'})
    event.shaped(Item.of('mcwfences:oak_horse_fence', 3), [
        'LSL',
        'LSL',
        'LSL'
    ], {
        S: '#forge:rods/wooden',
        L: 'minecraft:oak_log'
    })

    event.remove({id: 'mcwfences:spruce_horse_fence'})
    event.shaped(Item.of('mcwfences:spruce_horse_fence', 3), [
        'LSL',
        'LSL',
        'LSL'
    ], {
        S: '#forge:rods/wooden',
        L: 'minecraft:spruce_log'
    })

    event.remove({id: 'mcwfences:birch_horse_fence'})
    event.shaped(Item.of('mcwfences:birch_horse_fence', 3), [
        'LSL',
        'LSL',
        'LSL'
    ], {
        S: '#forge:rods/wooden',
        L: 'minecraft:birch_log'
    })

    event.remove({id: 'mcwfences:jungle_horse_fence'})
    event.shaped(Item.of('mcwfences:jungle_horse_fence', 3), [
        'LSL',
        'LSL',
        'LSL'
    ], {
        S: '#forge:rods/wooden',
        L: 'minecraft:jungle_log'
    })

    event.remove({id: 'mcwfences:acacia_horse_fence'})
    event.shaped(Item.of('mcwfences:acacia_horse_fence', 3), [
        'LSL',
        'LSL',
        'LSL'
    ], {
        S: '#forge:rods/wooden',
        L: 'minecraft:acacia_log'
    })

    event.remove({id: 'mcwfences:dark_oak_horse_fence'})
    event.shaped(Item.of('mcwfences:dark_oak_horse_fence', 3), [
        'LSL',
        'LSL',
        'LSL'
    ], {
        S: '#forge:rods/wooden',
        L: 'minecraft:dark_oak_log'
    })

    event.remove({id: 'mcwfences:crimson_horse_fence'})
    event.shaped(Item.of('mcwfences:crimson_horse_fence', 3), [
        'LSL',
        'LSL',
        'LSL'
    ], {
        S: '#forge:rods/wooden',
        L: 'minecraft:crimson_stem'
    })

    event.remove({id: 'mcwfences:warped_horse_fence'})
    event.shaped(Item.of('mcwfences:warped_horse_fence', 3), [
        'LSL',
        'LSL',
        'LSL'
    ], {
        S: '#forge:rods/wooden',
        L: 'minecraft:warped_stem'
    })
});
