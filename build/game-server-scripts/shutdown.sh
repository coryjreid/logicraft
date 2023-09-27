#!/bin/bash

say() {
    echo "$1"
    docker exec $MINECRAFT_DOCKER_CONTAINER_NAME rcon-cli say "$1"
}

if [[ $(docker ps --filter "name=^$MINECRAFT_DOCKER_CONTAINER_NAME\$" --filter "status=running" --quiet) ]]; then
        duration=60
        say "Server will shutdown in $duration seconds for an update"
        say "Please reach a safe point before shutdown and &c&lrestart your game&r to pickup the updates"
        for (( i=$duration; i>=1; i-- ))
        do
            seconds="seconds" && [[ $i == 1 ]] && seconds="second"
            if [ "$i" -gt 10 ] && [ $(expr $i % 10) -eq 0 ] || [ "$i" -le 10 ]; then
                say "Shutting down in $i $seconds"
            fi
            sleep 1s
        done
        say "Shutting down now"
        sleep 1s
        cd $MINECRAFT_COMPOSE_DIRECTORY && docker compose down
fi
