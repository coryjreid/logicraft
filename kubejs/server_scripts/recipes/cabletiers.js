// priority: 99
events.listen('recipes', event => {
    event.remove({id: 'cabletiers:creative_requester'});
    event.remove({id: 'cabletiers:creative_exporter'});
    event.remove({id: 'cabletiers:creative_disk_manipulator'});
    event.remove({id: 'cabletiers:creative_importer'});
    event.remove({id: 'cabletiers:creative_destructor'});
    event.remove({id: 'cabletiers:creative_constructor'});
})