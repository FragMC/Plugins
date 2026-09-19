---
title: Setup All Plugins Together
---

# Setup All Plugins Together

Install the full **FragMC stack** on one **Paper 26.2** server in under 10 minutes. This page covers the current `2.0.10-alpha` `Java 25` stack in the order that matters.

::: warning Deprecated
`Telepipe` is **deprecated** and not part of this guide. Use `IcedSpear` map warping. See `Telepipe` page if you still need it.
:::

## At a Glance

| Group | Plugins | Version | Notes |
|-------|---------|---------|-------|
| **Core** | IcedSpear | `2.0.10-alpha` | Map/Party/Friends/Leaderboards |
| **Addons** | Editor, Blocks, IcedScore, Weblink | `2.0.10-alpha` | Same `FragMC/Icedspear` repo |
| **Standalone** | Frost, CheckPoints, Redempt | `2.0.10-alpha` | Shop, checkpoints, redeem |
| **Bot** | Map-Submission-Bot | `2.0.10-alpha` | `Node 20` `Docker` `ghcr.io/fragmc/map-submission-bot:latest` |

**What you get:** Maps, parties, leaderboards, shop with hotbar skins, checkpoints, redeem codes, in-game editor, and Discord ticket flow.

## Prerequisites

::: info Requirements
**Required:** Paper `26.2.build.123-stable`, Java `25` (Temurin), Maven `3.9+`

**For maps:** FastAsyncWorldEdit `2.11.1` + WorldEdit

**For economy:** Vault + EssentialsX `2.20.1`

**Optional but recommended:** Geyser `2.2.0+` + Floodgate `2.2.0+` (Bedrock), FreeMinecraftModels `2.7.1+` (skins), Multiverse-Core (editor worlds). SQLite is bundled.
:::

## 1. Get the Jars

All plugins are published to **GitHub Packages** and **Modrinth** as `2.0.10-alpha`. Pick one:

::: tip Download (Recommended)
Grab the ready-made jars from **Releases** `v2.0.10-alpha` on GitHub (`Frost`, `IcedSpear`, `CheckPoints`, `Redempt`) and `ghcr.io/fragmc/map-submission-bot:latest` for the bot. No build needed.
:::

<details>
<summary>Or build locally with JDK 25</summary>

You need `Java 25` and `Maven 3.9+`. Run in order (some addons depend on the core):

*   Core and editor: `IcedSpear` → `Editor` (install first so others can find it)
*   Then: `Blocks`, `IcedScore`, `Weblink`, `Frost`, `CheckPoints`, `Redempt`

Artifacts land in `target/` e.g. `IcedSpear/target/icedspear-2.0.10-alpha.jar`, `Addons/Editor/target/editor-addon-2.0.10-alpha.jar`, etc.

</details>

## 2. Install Order

Drop the jars into `plugins/` in this order, then start the server once to generate configs:

| Order | Jar | Why this order |
|-------|-----|----------------|
| 1 | `FastAsyncWorldEdit-Bukkit` `2.11.1`, `Vault`, `EssentialsX` `2.20.1` | Dependencies |
| 2 | `IcedSpear-2.0.10-alpha.jar` | Core |
| 3 | `EditorAddon-2.0.10-alpha.jar` | Requires core |
| 4 | `BlocksAddon-2.0.10-alpha.jar` | Requires Editor, auto-installs zone models |
| 5 | `IcedScores-2.0.10-alpha.jar` + `weblink-addon-2.0.10-alpha.jar` | Needs `IcedSpear` + `ImageFrame` |
| 6 | `Frost`, `CheckPoints`, `Redempt` `2.0.10-alpha` | Standalone |
| 7 | `Geyser-Spigot` + `Floodgate` + `FreeMinecraftModels` | Optional: Bedrock + skins |

After first start you’ll see `plugins/Frost/config.yml`, `plugins/IcedSpear/config.yml`, `plugins/EditorAddon/dropbox/` etc.

## 3. Configure

::: info Key Files
All paths are relative to your server `plugins/` folder. Edit with any text editor, then `/frost reload` or restart.
:::

| Plugin | File | What to Set |
|--------|------|-------------|
| **IcedSpear** | `IcedSpear/config.yml` | `map-data-url` points to your `icedspear.json` |
| **Frost** | `Frost/config.yml` | `warrior` hotbar is now `Spear/Mace/Wind Charge` in slots 1-3, slots 4-9 via `/inventory` |
| **Redempt** | `Redempt/config.yml` | `currency-symbol`, SQLite `promocodes.db` |
| **Editor** | `EditorAddon/config.yml` | Add `dropbox-enc-key` to encrypt Dropbox tokens |
| **WebLink** | `Weblink/config.yml` | `webhook-port` and `webhook-secret` (use an env var) |
| **MapBot** | `Map-Submission-Bot/.env` | All Discord/GitHub IDs (see `.env.example`) |

## 4. First Run Checklist

1.  Start `Paper 26.2` with `Java 25` - all plugins should enable green. If you have `Geyser`/`Floodgate`/`FMM`/`Multiverse-Core`, they’ll be detected automatically.
2.  In-game as `OP`: try `/map create test` - first time it will ask you to `/map linkdropbox` your Dropbox. Link once, then create again.
3.  Try `/editor preview` - it should switch you between `Creative` (you see zone blocks as glass) and `Adventure` (blocks disappear, only floating gold/emerald markers remain).
4.  On Discord, check your `MapBot` channel - you should see the `Submit a map | Report a map` embed. Try a test submission.
5.  Open `https://fragmc.github.io/maps/viewer.html?id=tutorial` - it should show the `Tutorial` map, and `?schematic=<your dl.dropbox link>` should load your schematic.

## 5. Not Included

*   **Telepipe** `telepipe/index.md:1` is **deprecated** - `Web-based teleportation` `json-url: "https://example.com/teleports.json"` `FRAMC-Docs/telepipe/index.md:35` still works on `Paper 26.2` `api-version: '26.2'` but use `IcedSpear` `MapManager` `public/private` warp instead. Marked deprecated in `nav` and page banner below.

