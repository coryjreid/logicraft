// priority: 98

events.listen("recipes", (event) => {
    event.shapeless(item.of("minecraft:clay_ball", 4), ["#forge:storage_blocks/clay"]);
    event.remove({ id: "minecraft:bread" });
    event.shapeless(item.of("minecraft:bread"), ["#forge:crops/wheat", "#forge:crops/wheat", "#forge:crops/wheat"]);
    event.shapeless(item.of("minecraft:flint"), ["#forge:gravel", "#forge:gravel", "#forge:gravel"]);
    event.shapeless(item.of("minecraft:wheat_seeds"), ["#forge:crops/wheat"]);
    event.shaped("minecraft:furnace", ["SSS", "S S", "SSS"], {
        S: "#quark:stone_tool_materials",
    });
});
