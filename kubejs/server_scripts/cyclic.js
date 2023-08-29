ServerEvents.recipes(event => {
    event.remove({
        mod: 'cyclic',
        not: [
            { output: 'cyclic:apple_ender' },
            { output: 'cyclic:apple_honey' },
            { output: 'cyclic:apple_bone' },
            { output: 'cyclic:apple_prismarine' },
            { output: 'cyclic:apple_lapis' },
            { output: 'cyclic:apple_chocolate' },
            { output: 'cyclic:charm_creeper' },
            { output: 'cyclic:charm_stone' },
            { output: 'cyclic:charm_antipotion' },
            { output: 'cyclic:charm_boostpotion' },
            { output: 'cyclic:charm_crit' },
            { output: 'cyclic:charm_invisible' },
            { output: 'cyclic:charm_magicdefense' },
            { output: 'cyclic:charm_starvation' },
            { output: 'cyclic:charm_venom' },
            { output: 'cyclic:charm_water' },
            { output: 'cyclic:charm_speed' },
            { output: 'cyclic:charm_luck' },
            { output: 'cyclic:charm_attack_speed' },
            { output: 'cyclic:charm_xp_speed' },
            { output: 'cyclic:charm_xp_blocker' },
            { output: 'cyclic:gem_obsidian' },
            { output: 'cyclic:gem_amber' },
            { output: 'cyclic:flint_block' },
            { output: 'cyclic:magic_net' },
            { output: 'cyclic:flippers' },
            { output: 'cyclic:charm_void' },
            { output: 'cyclic:charm_antidote' },
            { output: 'cyclic:charm_fire' },
            { output: 'cyclic:charm_wither' },
            { output: 'cyclic:charm_ultimate' },
            { output: 'cyclic:heart_empty' },
            { output: 'cyclic:torch_launcher' },
            { output: 'cyclic:charm_torch' },
            { output: 'cyclic:charm_torch_cave' },
            { output: 'cyclic:eye_teleport' },
            { output: 'cyclic:anvil' },
            { output: 'cyclic:experience_food' },
            { output: 'cyclic:sleeping_mat' },
            { output: 'cyclic:fireball' },
            { output: 'cyclic:crafting_stick' },
            { output: 'cyclic:crafting_bag' },
            { output: 'cyclic:ender_eye_reuse' }
        ]
    })
    event.shapeless(
        Item.of('cyclic:experience_food', 1),
        [ 
          'minecraft:sugar',
          'minecraft:sugar',
          'minecraft:sugar'
        ]
    )
    event.shapeless(
        Item.of('cyclic:gem_amber', 2),
        [
            'minecraft:fire_charge',
            'minecraft:redstone',
            'minecraft:magma_block'
        ]
    )
    event.shapeless(
        Item.of('cyclic:gem_obsidian', 2),
        [
            'minecraft:emerald',
            'cyclic:gem_amber',
            'minecraft:obsidian'
        ]
    )
})
