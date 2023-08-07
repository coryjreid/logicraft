import mods.jeitweaker.Jei;

// Hide spawn eggs
Jei.hideIngredientsByRegex("^(spawn_egg)(.+)*|(.+)(spawn_egg)(.+)|(.+)(spawn_egg)$");

// Hide creative items
Jei.hideIngredientsByRegex("^(creative)(.+)*|(.+)(creative)(.+)|(.+)(creative)$");
Jei.hideIngredients([
    <item:botania:infrangible_platform>,
    <item:botania:lens_storm>,
    <item:botania:mana_tablet>.withTag({mana: 500000, creative: 1}),
    <item:create:handheld_worldshaper>,
    <item:cyclic:battery_infinite>
]);

// Hide TheOneProbe
Jei.hideModIngredients("theoneprobe", path => false);