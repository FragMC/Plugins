---
title: Setup All Plugins Together
---

# Setup All Plugins Together

This guide shows how to install and configure the **current FragMC stack** together on one **Paper 26.2** `26.2.build.123-stable` `Java 25` server. Use this if you want the full FragMC experience (maps, parties, leaderboards, shop, checkpoints, redeem, and the new editor/blocks).

> **Deprecated:** `Telepipe` is deprecated and **not** included below. See its page for details - use `IcedSpear` map warping instead.

## Overview

You will install **7 jars** (all `2.0.10-alpha` `com.stufy.fragmc`):

*   **Core:** `IcedSpear` `2.0.10-alpha`
*   **Addons (same repo `FragMC/Icedspear`):** `Editor` `editor-addon`, `Blocks` `blocks-addon` (requires `Editor`), `IcedScore` `IcedScores`, `Weblink` `weblink-addon`
*   **Standalone:** `Frost` `2.0.10-alpha`, `CheckPoints` `2.0.10-alpha`, `Redempt` `2.0.10-alpha`
*   **Separate bot (not a plugin):** `Map-Submission-Bot` `2.0.10-alpha` `Node 20` `Docker` `ghcr.io/fragmc/map-submission-bot:latest`

## Prerequisites

*   `Paper 26.2` `26.2.build.123-stable` `Java 25` `Temurin-25.0.4.1+` `Maven 3.9+`
*   `FastAsyncWorldEdit 2.11.1` + `WorldEdit` (for `IcedSpear` maps)
*   `Vault` + `EssentialsX 2.20.1` (for `Frost` economy + `Redempt` money)
*   Optional (but recommended for `FULL` stack): `Geyser 2.2.0+` + `Floodgate 2.2.0+` for Bedrock crossplay `9aa0a6`, `FreeMinecraftModels 2.7.1+` for `Blocks`/`Frost` skins, `Multiverse-Core` for `Editor` worlds, `SQLite` is bundled (no MySQL needed)

## 1. Download / Build

All are on `GitHub Packages` `https://maven.pkg.github.com/FragMC/*` `com.stufy.fragmc` `2.0.10-alpha` (not `Maven Central`) plus `Modrinth`:

```bash
# Or build locally with JDK 25:
mvn -B -f IcedSpear/pom.xml clean install -DskipTests
mvn -B -f Addons/Editor/pom.xml clean install -DskipTests
mvn -B -f Addons/Blocks/pom.xml clean package -DskipTests
mvn -B -f Addons/IcedScore/pom.xml clean package -DskipTests
mvn -B -f Addons/Weblink/pom.xml clean package -DskipTests
mvn -B -f Frost/pom.xml clean package -DskipTests
mvn -B -f CheckPoints/pom.xml clean package -DskipTests
mvn -B -f Redempt/pom.xml clean package -DskipTests
```

*   `IcedSpear` `IcedSpear/target/icedspear-2.0.10-alpha.jar`
*   `Editor` `Addons/Editor/target/editor-addon-2.0.10-alpha.jar`
*   `Blocks` `Addons/Blocks/target/blocks-addon-2.0.10-alpha.jar` (needs `Editor` - `depend: [EditorAddon]` `IcedSpear/Addons/Blocks/src/main/resources/plugin.yml:7`)
*   `IcedScore` `Addons/IcedScore/target/IcedScores-2.0.10-alpha.jar` (needs `IcedSpear` + `ImageFrame`)
*   `Weblink` `Addons/Weblink/target/weblink-addon-2.0.10-alpha.jar`
*   `Frost` `Frost/target/frost-2.0.10-alpha.jar`
*   `CheckPoints` `CheckPoints/target/checkpoints-2.0.10-alpha.jar`
*   `Redempt` `Redempt/target/redempt-2.0.10-alpha.jar` (note `artifactId` `redempt` lowercase, file `Redempt-2.0.10-alpha.jar` due to `project.name`)

Or download from `Releases` `v2.0.10-alpha` `Frost` `IcedSpear` `CheckPoints` `Redempt` and `GitHub Packages` `ghcr.io/fragmc/map-submission-bot:latest` for the bot.

## 2. Install Order (important for dependencies)

Put `jars` in `plugins/` in this order, then start:

1.  `FastAsyncWorldEdit-Bukkit` `2.11.1` + `Vault` + `EssentialsX` `2.20.1`
2.  `IcedSpear-2.0.10-alpha.jar`
3.  `EditorAddon-2.0.10-alpha.jar` (requires `IcedSpear`)
4.  `BlocksAddon-2.0.10-alpha.jar` (requires `EditorAddon` - will auto-install `FreeMinecraftModels/models/fragmc_zones/*.bbmodel` dummies `BlocksAddon.java:49` then `/fmm reload`)
5.  `IcedScores-2.0.10-alpha.jar` (`ImageFrame` `2026.1.4` required) + `weblink-addon-2.0.10-alpha.jar`
6.  `Frost-2.0.10-alpha.jar` + `CheckPoints-2.0.10-alpha.jar` + `Redempt-2.0.10-alpha.jar`
7.  `Geyser-Spigot` `Floodgate` `2.2.0+` + `FreeMinecraftModels` `2.7.1+` if you want `Bedrock` + `FMM` skins

Start once to generate `plugins/*/config.yml` and `plugins/EditorAddon/dropbox/` etc.

## 3. Configure

*   **IcedSpear** `plugins/IcedSpear/config.yml` `map-data-url: "https://raw.githubusercontent.com/FragMC/fragmc.github.io/main/icedspear.json"` `world-settings` `Geyser` `softdepend`
*   **Frost** `plugins/Frost/config.yml` `warrior` now `0 TRIDENT` `1 MACE` `2 WIND_CHARGE` `fmm_model` `1001-1003` `slots 3-8` via `/inventory` `54` `GRAY_STAINED_GLASS_PANE` `Frost/Frost/src/main/resources/config.yml:18`
*   **Redempt** `plugins/Redempt/config.yml` `currency-symbol: "$"` `promocodes.db` `SQLite`
*   **Editor** `plugins/EditorAddon/config.yml` add `dropbox-enc-key: "your-32-byte-base64"` to enable `AES/GCM` encrypt for `dropbox/<uuid>.json` `EditorAddon.java:30`
*   **WebLink** `plugins/Weblink/config.yml` `webhook-port: 25531` `webhook-secret` (move from `fragmc.github.io/shop.html:1310` hardcoded `HMAC_SECRET` to `env` `WEBLINK_HMAC_SECRET`)
*   **MapBot** `Map-Submission-Bot/.env` `DISCORD_TOKEN, GUILD_ID, DISCORD_CLIENT_ID, EMBED_CHANNEL_ID, OPEN_TICKETS_CATEGORY_ID, CLOSED_TICKETS_CATEGORY_ID, TRANSCRIPTS_CHANNEL_ID, GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO, GITHUB_BRANCH, ICEDSPEAR_JSON_PATH` `Map-Submission-Bot/.env.example:1` `docker-compose.yml:11`

## 4. First Run Checklist

1.  `Paper 26.2` `Java 25` starts, all `2.0.10-alpha` `enable` with `softdepend` `Geyser/Floodgate` `FMM` `Multiverse-Core` if present `EditorAddon.java:30`
2.  In-game `Java` as `OP` or `frost.admin` `icedspear.admin` `redempt.admin`: `/map create test` -> first time forces `/map linkdropbox <token>` `EditorAddon.java:69`
3.  `/editor preview` toggles `CREATIVE` (visible `GLASS/GOLD/EMERALD` no hitbox) <-> `ADVENTURE` (hidden `AIR` + floating `gold/emerald` `2.5` blocks above spinning `BlocksAddon.java:50`)
4.  On Discord `MapBot` `EMBED_CHANNEL_ID` should have `Submit a map | Report a map` embed `Use the buttons below... How to create a map` `Map-Submission-Bot/src/index.js:27`
5.  `Web Viewer` `https://fragmc.github.io/maps/viewer.html?id=<id>` or `?schematic=<dl.dropbox>` should load `icedspear.json` both `legacy` `tutorial` and `maps: [{id, schematic_url, allow_remixing, difficulty: null, verified: false}]` `IcedSpear/src/main/java/com/stufy/fragmc/icedspear/managers/SchematicManager.java:100` handles both, `viewer.html:115` merges.

## 5. Not Included

*   **Telepipe** `telepipe/index.md:1` is **deprecated** - `Web-based teleportation` `json-url: "https://example.com/teleports.json"` `FRAMC-Docs/telepipe/index.md:35` still works on `Paper 26.2` `api-version: '26.2'` but use `IcedSpear` `MapManager` `public/private` warp instead. Marked deprecated in `nav` and page banner below.

