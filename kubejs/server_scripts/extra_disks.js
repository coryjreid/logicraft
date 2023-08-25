ServerEvents.recipes(event => {
    event.remove({
        output: [
            'extradisks:infinite_storage_block',
            'extradisks:infinite_storage_part',
            Item.of('extradisks:infinite_storage_disk', '{Id:[I;2012309430,-442021146,-1913172116,1002096340]}'),
            'extradisks:infinite_fluid_storage_block',
            'extradisks:infinite_fluid_storage_part',
            Item.of('extradisks:infinite_fluid_storage_disk', '{Id:[I;577164066,847725197,-2014610184,499051558]}')
        ]
    })
})
