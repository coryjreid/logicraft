JEIEvents.hideFluids(event => {
    //console.log('Hello! The JEI hide fluids event has fired!')
    let fluids = [
        'cyclic:xpjuice',
        'cyclic:slime',
        'cyclic:biomass',
        'cyclic:honey',
        'cyclic:magma',
        'cyclic:wax'
    ]
    fluids.forEach(fluid => event.hide(fluid))
})
JEIEvents.hideItems(event => {
    event.hide(/^cyclic:(?:(?!(apple_ender|apple_honey|apple_bone|apple_prismarine|apple_lapis|apple_chocolate|charm_creeper|charm_stone|charm_antipotion|charm_boostpotion|charm_crit|charm_invisible|charm_magicdefense|charm_starvation|charm_venom|charm_water|charm_speed|charm_luck|charm_attack_speed|charm_xp_speed|charm_xp_blocker|gem_obsidian|gem_amber|flint_block|magic_net|flippers|charm_void|charm_antidote|charm_fire|charm_wither|charm_ultimate|heart_empty|torch_launcher|charm_torch|charm_torch_cave|eye_teleport|anvil|experience_food|sleeping_mat|fireball|crafting_stick|crafting_bag)$)).+$/)
    event.hide(Item.of('minecraft:potion', '{Potion:"cyclic:*"}'))
    event.hide(Item.of('minecraft:splash_potion', '{Potion:"cyclic:*"}'))
    event.hide(Item.of('minecraft:lingering_potion', '{Potion:"cyclic:*"}'))
    event.hide(Item.of('minecraft:tipped_arrow', '{Potion:"cyclic:*"}'))
})
JEIEvents.removeCategories(event => {
    //console.log(event.getCategoryIds())
    event.remove("cyclic:crusher")
    event.remove("cyclic:packager")
    event.remove("cyclic:solidifier")
})
