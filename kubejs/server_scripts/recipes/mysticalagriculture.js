onEvent("recipes", (event) => {
    event.remove({ output: "bigreactors:yellorium_ingot" });
    event.remove({ output: "bigreactors:yellorium_block" });
    event.remove({ id: "mysticalagriculture:essence/common/uranium_ingot" });

    event.replaceOutput({}, 'bigreactors:yellorium_ingot', 'mekanism:ingot_uranium')

    event.shaped(item.of('mekanism:ingot_uranium', 2), [
        'UU ',
        'UU ',
        '   '
    ], {
        U: 'mysticalagriculture:uranium_essence'
    })
});