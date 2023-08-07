// Whether or not to cache all items in tags, item priorities, and exclusions the first time they are loaded.
// May be required to hide items from JEI or REI correctly on multiplayer.
// Rejoining a server with different tags (or with more/less mods) will not change the cache if it already exists.
// You must delete the cache file to re-generate the cache if you add/remove mods.
// The cache file can be found in the /kubejs/config/ folder.
global["CACHE_TAGS"] = false

const VERSION = String(Platform.getMcVersion()).split(".")
global["VERSION"] = VERSION
global["V6P"] = VERSION[1] > 19 || VERSION[1] == 19 && VERSION[2] >= 2

console.log("Using UnifyTags v1.17")

if (global["CACHE_TAGS"]) {
    // Attempt to load the cache if it exists
    let cache = null
    try {
        cache = JsonIO.read("kubejs/config/unify_cache.json")
    } catch (err) { }

    if (cache && "tagItems" in cache) {
        global["cache"] = cache
        
        global["itemsToTags"] = cache["itemsToTags"]
        global["tagItems"] = cache["tagItems"]
        global["tagPriorityItems"] = cache["tagPriorityItems"]
        
        exclusions = new Set()
        for (let exc of cache["unifyexclude"]) exclusions.add(exc)
        global["unifyexclude"] = exclusions
    }
}
