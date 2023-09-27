#!/bin/bash

remove_server_subfile() {
    local subfolder=$MINECRAFT_COMPOSE_DIRECTORY/server/$1
    echo "Removing '$subfolder'"
    rm -rf $subfolder
}

echo "Cleanup modpack files"
for directory in 'config', 'defaultconfigs', 'kubejs', 'logs', 'local', 'mods', 'scripts', 'world/serverconfig'; do
    remove_server_subfile "$directory"
done
remove_server_subfile "packwiz.json"

echo "Move updated world configuration"
mv $MINECRAFT_COMPOSE_DIRECTORY/server/defaultconfigs $MINECRAFT_COMPOSE_DIRECTORY/server/world/serverconfig
