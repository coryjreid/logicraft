events.listen('jei.hide.items', function (event) {
    event.hide('bigreactors:yellorium_nugget')
    event.hide('bigreactors:yellorium_bucket')
})

events.listen('jei.hide.fluids', event => {
    event.hide('bigreactors:yellorium')
    event.hide('bigreactors:yellorium_flowing')
  })