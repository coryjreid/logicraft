---
layout: default
title: Development
nav_order: 2
has_children: true
---

# Overview

This section is primarily for contributors and modpack maintainers as it describes how
development is accomplished for the modpack.

This is a [Packwiz](https://packwiz.infra.link) modpack. This means the pack is not distributed
via archives containing all the JARs and files. Instead the pack is meant to be hosted at a URL
accessible to the players and seamlessly updated on every launch of the game client.

## Project Structure

The project itself represents the root of the modpack, which also would be the root of a user's
game directory (henceforth referred to as `.minecraft`). This means that the project contains
both files which need to be copied to user game directories as-is, files which need to be parsed by
Packwiz, and some which are solely for development and should be excluded from users' folders.

**Critical Directories**

These directories are copied into the `.minecraft` directory by Packwiz on installation.

 - **config/** contains configuration files for the mods
 - **defaultconfigs/** contains server configuration files for the mods
 - **kubejs/** contains KubeJS scripts which adjust things in the modpack
 - **local/** contains some configuration files read by _some_ mods which are meant to be local
   per user (included to force defaults)
 - **mods/** includes all the Packwiz definitions for the required mods (translated into JARs on install)
 - **resourcepacks/** resource packs which adjust things in the modpack or supply additional features
 - **scripts/** contains CraftTweaker scripts which adjust things in the modpack

 **Others**

 - **.dirs/** contains IDE/editor/other configs
 - **bin/** contains some executables for convenience
 - **launcher.bat** a convenience launch script for running Packwiz on Windows machines

## Project Tooling

The project utilizes multiple tools, but ultimately the _modpack_ only needs Packwiz.

 - **Packwiz** tool which maintains the modpack itself
 - **NodeJS** used by [Commitlint](https://commitlint.js.org/) (which uses [Husky](https://typicode.github.io/husky/)) to enforce commit message standards
 - **Ruby** used to generate the docs pages
 - **Docker** container engine used for the pack maintainer's Minecraft server
 - **Jenkins** build system used for continuous deployment of the pack maintainer's Minecraft server
