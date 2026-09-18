---
title: MapBot
---

# MapBot

Separate `Node 20` `Docker` bot `Map-Submission-Bot/` `2.0.10-alpha`, not IcedSpear addon. Handles map submissions/reports and website updates.

## Features

- **Dedicated** `Dockerfile:1` `node:20-alpine` `docker-compose.yml:1` `ghcr.io/fragmc/map-submission-bot:latest` `linux/amd64,arm64` via `QEMU` `Buildx`
- **Embed** `src/index.js:27` `ensureEmbed()` posts `Submit a map / Report a map` `Use the buttons below... How to create a map` to `EMBED_CHANNEL_ID` `50` messages + `pinned` check to avoid duplicate
- **Submit** `modal` `name/description/author/notes/schematic_link` + follow-up `Allow remixing Yes/No` -> channel `map-open-XXXX` in `OPEN_TICKETS_CATEGORY_ID`
- **Report** `modal` `map_id/author/reason/notes + "I am not a bot..."` `===` check -> `mapr-open-XXXX`
- **Ticket** `Close` moves to `CLOSED_TICKETS_CATEGORY_ID` `map-closed-XXXX` can `Reopen`, `Delete`/`Transcript` only after `Closed` `src/index.js:130` `transcript` `discord-html-transcripts` to `TRANSCRIPTS_CHANNEL_ID`
- **Viewer linked** `Open in Web Viewer` `ButtonStyle.Link` `https://fragmc.github.io/maps/viewer.html?schematic=...` `src/index.js:375` and after `/map-submit` `https://fragmc.github.io/maps/viewer.html?id=<newId>` `src/index.js:255`

## Config `.env` / `docker-compose.yml:11`

`DISCORD_TOKEN, GUILD_ID, DISCORD_CLIENT_ID, EMBED_CHANNEL_ID, OPEN_TICKETS_CATEGORY_ID, CLOSED_TICKETS_CATEGORY_ID, TRANSCRIPTS_CHANNEL_ID, GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO, GITHUB_BRANCH, ICEDSPEAR_JSON_PATH` (no `DROPBOX` - belongs to `Editor`)

## Commands (auto-registered on ready `src/index.js:52`)

- `/map-submit` in `map-open-*` - pulls `schematic_link` `allow_remixing` -> `src/utils/github.js:31` `addMapToIcedSpear` `PUT` `icedspear.json` `fragmc.github.io` via `GITHUB_TOKEN` `{id, name, author, description, schematic_url, allow_remixing, difficulty: null, verified: false, verified_no_cp: false, images: []}` -> closes ticket
- `/map-edit [id] [difficulty] [verified] [verified_no_cp]` at least one required
- `/map-images [add/delete] [id] [image_url] [image]` manages `images: []`

`src/utils/github.js:17` `updateIcedSpearJson` retries `3` times on `409` with fresh `sha`.

## GitHub Packages

`IcedSpear` `2.0.10-alpha` `com.stufy.fragmc:icedspear:2.0.10-alpha` is `provided` for `IcedScore`/`Weblink` `pom.xml:50` `github` `https://maven.pkg.github.com/FragMC/Icedspear` + `modrinth`.

## Build

`npm ci` `node --check src/index.js` `docker build -t fragmc-mapbot` `ghcr.io/fragmc/map-submission-bot:latest` `Map-Submission-Bot/.github/workflows/build.yml:38` `linux/amd64,arm64` `QEMU` `Buildx` `packages: write`.

