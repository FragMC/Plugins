---
title: Frost — Commands & Permissions
---

# Commands & Permissions

## Player Commands

### /shop

- Opens the cosmetics shop GUI.
- Permission: `frost.shop` (default: true)

### /equip

- Opens your equip menu to toggle owned cosmetics.
- Permission: `frost.equip` (default: true)

### /togglelock

- Toggles Hotbar Lock on/off and refreshes locked items when enabling.
- Permission: none (player self‑service)

## Admin Command

### /frost reload

- Reloads `config.yml`, profiles, and cosmetics from disk.
- Permission: `frost.admin`

### `/frost setprofile <player> <profile>`

- Sets a player’s active profile (must exist under `profiles` in `config.yml`).
- Permission: `frost.admin`

### /frost listprofiles

- Lists all available profile IDs and display names.
- Permission: `frost.admin`

### `/frost givecosmetic <player> <cosmetic>`

- Grants a cosmetic directly (bypasses economy) and saves it to the player’s data.
- Permission: `frost.admin`

## Permissions Reference

| Permission                     | Description                                 | Default |
| ------------------------------ | ------------------------------------------- | ------- |
| `frost.admin`                  | Access to admin commands                    | op      |
| `frost.shop`                   | Open the cosmetics shop                     | true    |
| `frost.equip`                  | Open the equip menu                         | true    |
| `frost.profile.<profile-name>` | Gate access to specific profiles (optional) | —       |
