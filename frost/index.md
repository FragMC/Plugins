---
title: Frost
---

# Frost

Profile-based hotbars, a cosmetics shop and equip menu, particle effects, and Bedrock UI support for Paper 1.21.x. Player data persists to SQLite and integrates with Vault for economy.

## Features

- Profile hotbars with Hotbar Lock enforcement
- Cosmetics shop with Vault pricing
- Equip menu to toggle owned cosmetics
- Particle effects (always-on, trail, surround, burst) with event triggers
- Bedrock UI via Floodgate + Cumulus forms
- SQLite-backed player data (profiles, locks, owned/equipped cosmetics)

## Requirements

- Paper 1.21.1+
- Java 21
- Vault (economy provider)
- Optional: Geyser + Floodgate for Bedrock support

## Installation

1. Build or download the plugin jar (see [Development](/frost/development)).
2. Place the jar in `plugins/`.
3. Start the server to generate `plugins/Frost/config.yml` and the SQLite database.
4. Edit `config.yml` to suit your server.
5. Run `/frost reload` to apply changes.

## Quick Commands

- `/shop` – open the cosmetics shop
- `/equip` – open your equip menu
- `/togglelock` – toggle Hotbar Lock on/off
- `/frost <reload|setprofile|listprofiles|givecosmetic>` – admin tools

See the full [Commands & Permissions](/frost/commands) and [Configuration](/frost/configuration).

## Support Matrix

- Paper 1.21.x, Java 21
- Economy via Vault
- Optional Bedrock support via Floodgate

## Developer Notes

A small public API is available to:

- Set a player’s profile
- Query available profiles
- Manage owned cosmetics

See [Development](/frost/development) for build and API entry points.
