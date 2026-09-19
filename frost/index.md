---
title: Frost
---

# Frost

Profile-based hotbars, a cosmetics shop and equip menu, particle effects, and Bedrock UI support for Paper 26.2. Player data persists to SQLite and integrates with Vault for economy. Now `2.0.10-alpha` with fixed Spear/Mace/Wind Charge hotbar and double-chest inventory customizer.

## Features

- Profile hotbars with Hotbar Lock enforcement
- Cosmetics shop with Vault pricing
- Equip menu to toggle owned cosmetics
- Particle effects (always-on, trail, surround, burst) with event triggers
- Bedrock UI via Floodgate + Cumulus forms
- SQLite-backed player data (profiles, locks, owned/equipped cosmetics)

## Requirements

- Paper 26.2 `26.2.build.123-stable`+
- Java 25
- Vault (economy provider)
- Optional: Geyser 2.2.0+ + Floodgate 2.2.0+ for Bedrock crossplay (Cumulus forms)
- Optional: FreeMinecraftModels 2.7.1+ for proper item skins

## Installation

1. Build or download the plugin jar (see [Development](/frost/development)).
2. Place the jar in `plugins/`.
3. Start the server to generate `plugins/Frost/config.yml` and the SQLite database.
4. Edit `config.yml` to suit your server.
5. Run `/frost reload` to apply changes.

## Quick Commands

- `/shop` - open the cosmetics shop (Bedrock via Floodgate forms)
- `/equip` - open your equip menu (Bedrock forms)
- `/inventory` (`/inv` `hotbar`) - double-chest (54) customizer for hotbar slots 4-9, Gray glass filler for blocked slots
- `/togglelock` - toggle Hotbar Lock on/off
- `/frost <reload|setprofile|listprofiles|givecosmetic|inventory>` - admin tools

[![Hangar](https://img.shields.io/badge/Hangar-FragMC%2FFrost-2a2a2a?logo=papermc)](https://hangar.papermc.io/FragMC/Frost)

See the full [Commands & Permissions](/frost/commands) and [Configuration](/frost/configuration).

## Support Matrix

- Paper 26.2 `26.2.build.123-stable`, Java 25
- Economy via Vault
- Bedrock crossplay via Geyser 2.2.0+ + Floodgate 2.2.0+ (Cumulus forms for shop/equip/inventory)
- Item skins via FreeMinecraftModels 2.7.1+ (display entity with armor-stand fallback for Bedrock)
- Fixed hotbar: slots 1-3 locked Spear (TRIDENT) / Mace (MACE) / Wind Charge (WIND_CHARGE) with `custom-model-data 1001-1003` or `fmm_model frost_spear/mace/wind_charge`

## Developer Notes

A small public API is available to:

- Set a player’s profile
- Query available profiles
- Manage owned cosmetics

See [Development](/frost/development) for build and API entry points.
