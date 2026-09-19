# IcedSpear

IcedSpear is the core plugin for FragMC, providing essential lobby and game management features for **Paper 26.2** `26.2.build.123-stable` `Java 25`.

## Overview

IcedSpear handles the core logic for:
- **Map Management**: Dynamic instance creation and lifecycle handling with `FastAsyncWorldEdit` `2.11.1` and `12h` cache.
- **Party System**: Robust party management for group play.
- **Social Features**: Friend lists and social interactions.
- **Competition**: Global and per-map leaderboards.
- **Bedrock Crossplay**: Via `Geyser 2.2.0+` + `Floodgate 2.2.0+` `softdepend`.

Now `2.0.10-alpha` with **Blocks** `Smart zone blocks` and **Editor** `lightweight Dropbox + Multiverse` addons (`IcedSpear/Addons/Blocks` `Editor` `2.0.10-alpha`).

It is available on [![Hangar](https://img.shields.io/badge/Hangar-FragMC%2FIcedSpear-2a2a2a?logo=papermc)](https://hangar.papermc.io/FragMC/IcedSpear) and [Modrinth](https://modrinth.com/plugin/icedspear).

It is designed to be extensible via the [API](./api/), allowing developers to create custom game modes and integrations.

## Documentation

Explore the detailed documentation for IcedSpear:

- [**Features**](./features.md): In-depth look at maps, parties, and friends.
- [**Commands & Permissions**](./commands.md): Full list of commands and permission nodes.
- [**Configuration**](./configuration.md): Guide to `config.yml` and map setup.
- [**Mechanics**](./mechanics.md): Details on map lifecycle, special blocks, and timers.
