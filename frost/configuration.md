---
title: Frost — Configuration
---

# Configuration

Frost is configured via `plugins/Frost/config.yml`. Below are the key sections with examples from the default file.

## settings

```yaml
settings:
  instant-item-replace: true # if true, locked hotbar slots are refreshed frequently
  default-profile: "warrior" # profile used for new players
```

- `instant-item-replace` controls how quickly the Hotbar Lock refresh routine runs.
- `default-profile` is assigned when a new player first joins (and when loading defaults).

## profiles

Profiles define hotbar layouts. Each profile maps slot indices (0–8) to items. Use MiniMessage for names/lore.

```yaml
profiles:
  warrior:
    display-name: "<red><bold>Warrior Profile</bold></red>"
    description: "Melee combat focused loadout - Spear/Mace/Wind always in slots 1-3"
    hotbar-items:
      0:
        material: TRIDENT
        custom-name: "<aqua><bold>Spear</bold> <gray>(Locked Slot 1)"
        lore:
          - "<aqua>Your spear for your journey"
          - "<gray>Always in slot 1 - cannot be moved"
        enchantments:
          sharpness: 5
          unbreaking: 3
        flags:
          - HIDE_ENCHANTS
          - HIDE_ATTRIBUTES
        custom-model-data: 1001
        fmm_model: "frost_spear" # FreeMinecraftModels 2.7.1+ - place frost_spear.bbmodel in plugins/FreeMinecraftModels/models/
      1:
        material: MACE
        custom-name: "<gold><bold>Mace</bold> <gray>(Locked Slot 2)"
        lore:
          - "<gray>Your mace - always in slot 2"
        enchantments:
          unbreaking: 3
        custom-model-data: 1002
        fmm_model: "frost_mace"
      2:
        material: WIND_CHARGE
        custom-name: "<white><bold>Wind Charge</bold> <gray>(Locked Slot 3)"
        lore:
          - "<white>Your wind charge - always in slot 3"
        custom-model-data: 1003
        fmm_model: "frost_wind_charge"
      # Slots 3-8 are customizable via /inventory (double chest 54 with Gray glass filler)
      3:
        material: COOKED_BEEF
        custom-name: "<yellow>Rations"
      4:
        material: ENDER_PEARL
        custom-name: "<light_purple>Ender Pearl"
```

Notes:

- Slots 0-2 are **always locked** `Spear (TRIDENT 0)` `Mace (MACE 1)` `Wind Charge (WIND_CHARGE 2)` with `custom-model-data 1001-1003` or `fmm_model` for `FreeMinecraftModels 2.7.1+` (`display entity` with `armor-stand` fallback for Bedrock `Geyser` `Bedrock`).
- Slots 3–8 are **customizable** via `/inventory` (`/inv` `hotbar`) double-chest `54` with `GRAY_STAINED_GLASS_PANE` filler for blocked slots - drag items to set.
- Items support `material`, `custom-name`, `lore`, `enchantments`, `flags`, `custom-model-data`, `fmm_model: "my_model"` (FMM `2.7.1` - put `*.bbmodel` in `plugins/FreeMinecraftModels/models/` then `/fmm reload`).
- Players change profiles only via `/frost setprofile` or other plugins through the API. Custom hotbar `3-8` persists in `SQLite` `custom_hotbar` as `Base64` `BukkitObjectOutputStream`.

## cosmetics

Top‑level categories hold purchasable/equippable items. Built‑in categories include:

- `weapon-skins` – per‑slot weapon overrides (e.g., change the item’s model/lore).
- `armor-cosmetics` – whole sets or individual pieces.
- `particle-effects` – visual effects with triggers and types.

### Enchantment Key Format

Use the Minecraft namespaced key form for enchantments. The parser accepts:

- Hyphens: `fire-aspect`, `wind-burst`
- Underscores: `fire_aspect`, `wind_burst`
- Spaces: `fire aspect`, `wind burst`

All three map to the same enchantment internally.

### Admin-Only Cosmetics

You can mark any cosmetic as admin-only so it is hidden from the shop for non-admins and cannot be purchased by them. Admins automatically have access to all cosmetics and can equip them without purchase.

```yaml
cosmetics:
  weapon-skins:
    items:
      dev-spear:
        admin-only: true
        name: "<gold><bold>Developer Spear</bold>"
        price: 0.0
        icon: STICK
        applies-to:
          profile: "warrior"
          slot: 0
        modifications:
          custom-model-data: 9001
          lore:
            - "<gold>Internal use only"
```

Example: weapon skins with `FreeMinecraftModels`

```yaml
cosmetics:
  weapon-skins:
    category-name: "<red>Weapon Skins"
    category-icon: DIAMOND_SWORD
    category-description: "Change the appearance of your weapons"
    items:
      golden-spear:
        name: "<gold><bold>Golden Spear</bold>"
        description:
          - "<gold>A luxurious golden finish"
        price: 1000.0
        icon: GOLD_INGOT
        applies-to:
          profile: "warrior"
          slot: 0
        modifications:
          custom-model-data: 2001
          fmm_model: "frost_golden_spear" # FMM 2.7.1 - proper item skin via display entity
          lore:
            - "<gold>Shiny and golden!"
```

Example: particle effect

```yaml
cosmetics:
  particle-effects:
    category-name: "<light_purple>Particle Effects"
    category-icon: DRAGON_BREATH
    category-description: "Visual particle effects triggered by events"
    items:
      flame-trail:
        name: "<red><bold>Flame Trail</bold>"
        price: 2500.0
        icon: FIRE_CHARGE
        particle: FLAME
        effect-type: TRAIL # TRAIL | SURROUND | BURST
        trigger: ALWAYS # ALWAYS | JUMP | SPRINT | SNEAK | GLIDE | SWIM | RIPTIDE | MACE_SMASH | DAMAGE_DEALT | DAMAGE_TAKEN | KILL | BLOCK_BREAK | BLOCK_PLACE
        count: 3
        offset-x: 0.2
        offset-y: 0.1
        offset-z: 0.2
        speed: 0.01
```

Notes:

- Particle availability depends on your server version; unsupported effects are skipped.
- Equipped cosmetics persist and can be toggled in the `/equip` menu.

## shop

```yaml
shop:
  title: "<gradient:aqua:blue>Cosmetics Shop</gradient>"
  rows: 6 # 1–6
```

Controls the Java inventory GUI layout. Bedrock players see Floodgate forms.

## permissions

Defined in `plugin.yml`:

- `frost.admin` – admin commands.
- `frost.shop` – open the shop.
- `frost.equip` – open the equip menu.
- `frost.profile.<profile-name>` – optional profile gating.

## Reloading

Edit `config.yml`, then run `/frost reload` to re‑load settings, profiles, and cosmetics.
