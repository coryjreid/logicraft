# Changelog

## [1.3.0](https://github.com/coryjreid/logicraft/compare/v1.2.0...v1.3.0) (2023-09-03)


### Features

* adjust some corail tombstone settings ([be050e7](https://github.com/coryjreid/logicraft/commit/be050e7652799ec72829253850c8422e1cb0ef1c))
* upgrade mods carry on, cupboard, every compat, kubejs, macaw's stuff ([ea2405f](https://github.com/coryjreid/logicraft/commit/ea2405f23732430fae96df68d767a50e8fef0dbe))

## [1.2.0](https://github.com/coryjreid/logicraft/compare/v1.1.0...v1.2.0) (2023-08-30)


### Features

* disable fire tick gamerule on every start of the server ([dffc3b2](https://github.com/coryjreid/logicraft/commit/dffc3b2461abb2d108905a6bfce5a3f4720c51db))

## [1.1.0](https://github.com/coryjreid/logicraft/compare/v1.0.0...v1.1.0) (2023-08-30)


### Features

* upgrade ftb chunks ([2b127d5](https://github.com/coryjreid/logicraft/commit/2b127d5a01656e75f93b054e321bc123ab18d5f2))
* upgrade integrated terminals ([4f7ca8e](https://github.com/coryjreid/logicraft/commit/4f7ca8eba3158b029bd6c4e383679875ecd327d5))

## 1.0.0 (2023-08-29)

**NOTE: This is a re-release which resets the version number and lists some old commits which used the correct style.** 

### Features

* Add Release Please Support ([5df972a](https://github.com/coryjreid/logicraft/commit/5df972a4e2844e85d5551b42035d75eda6cd1005))
* include ad-astra mod ([bb545be](https://github.com/coryjreid/logicraft/commit/bb545be38efa6dcd91829adf30e4c9b6f934d487))


### Bug Fixes

* Actually fix the broken junk from before (and ignore some more files) ([0a5a2da](https://github.com/coryjreid/logicraft/commit/0a5a2da0fc4b26a93755d26f2b786e0731945ad4))
* Add missing comma in updateModpack.py which was preventing mod additions from working correctly ([0106bca](https://github.com/coryjreid/logicraft/commit/0106bca379abb369978495106267e7250618c1ff))
* Correct URL for InventoryHUD+ since packwiz is dumb as shit and uses URIs to handle paths/URLs ([d7be856](https://github.com/coryjreid/logicraft/commit/d7be8563378c60365b69eeb2eebba511f1af18b0))
* Correctly build path for running packwiz ([3de3d9e](https://github.com/coryjreid/logicraft/commit/3de3d9e7775fd6af9f2de60e8ff329de5fc61e75))
* Have updateModpack.py script also update the modpack version in the pack.toml file ([40af28a](https://github.com/coryjreid/logicraft/commit/40af28ae721329cefd6a62e00e563936b64249fb))
* Mark Entity Culling mod as client only ([e285751](https://github.com/coryjreid/logicraft/commit/e285751af247dd3155ac21ab26a56820939e185a))
* Properly handle non-CurseForge mod in script ([c67cbf3](https://github.com/coryjreid/logicraft/commit/c67cbf33e23aa1f658791e8e4babd6efee4d9380))
* Remove accidentally-added Cable Tiers items from the game ([de0efaa](https://github.com/coryjreid/logicraft/commit/de0efaafa81dd1af3889d7be9ebf4e0db744f2b4))
* Remove illegal characters from filename, again, because packwiz is stupid and uses URIs instead of URLs ([1302b79](https://github.com/coryjreid/logicraft/commit/1302b79b2c2e13344ee0adce04a2ab3c77c562dd))
* Stringify int values for subprocess and make sure to refresh packwiz index ([ed9d625](https://github.com/coryjreid/logicraft/commit/ed9d625ce557618f5f6a686354f06390b1ceaa61))
* Turn off Chisels and Bits "bit injection" for JEI to cleanup JEI ([b71c30f](https://github.com/coryjreid/logicraft/commit/b71c30f3e6ecc4c2d911ac2cdbb999071ede12a6))
