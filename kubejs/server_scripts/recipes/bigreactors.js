// priority: 99
events.listen('recipes', event => {
    event.remove({id: 'bigreactors:misc/book/erguide'})
})