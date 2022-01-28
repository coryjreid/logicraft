// priority: 99

events.listen('item.tags', event => {

})

events.listen('block.tags', event => {
    event.get('mekanism:cardboard_blacklist').add([
        'waystones:waystone',
        'waystones:mossy_waystone',
        'waystones:sandy_waystone',
    ])
})

events.listen('fluid.tags', event => {

})