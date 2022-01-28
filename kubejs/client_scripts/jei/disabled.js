// priority: 0

events.listen('jei.hide.items', function (event) {
    event.hide('cyclic:uncrafter')
    event.hide('quantumstorage:chestdiamond')
    event.hide('quantumstorage:chestgold')
    event.hide('quantumstorage:chestiron')
    event.hide('cyclic:harvester')
})




