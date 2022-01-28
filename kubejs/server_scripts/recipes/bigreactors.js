// priority: 99
events.listen('recipes', event => {
    event.remove({id: 'bigreactors:misc/book/erguide'})
    event.shapeless('mekanism:uranium_ore', 'bigreactors:yellorite_ore')
})