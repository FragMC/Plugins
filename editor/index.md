---
title: Editor
---

# Editor Addon

Extremely lightweight server map editor `2.0.10-alpha` `Paper 26.2` `Java 25` for IcedSpear. No `OP`, per-world `FAWE` perms.

## Overview

- **First use forces Dropbox link** `EditorAddon.java:69` `dropboxTokens` `dropbox/<uuid>.json` `1KB` per player `AES/GCM` encrypted if `dropbox-enc-key` in `config.yml` set
- **Multiverse** `Multiverse-Core` `softdepend` `Editor/src/main/resources/plugin.yml:8` `createEditWorld()` `WorldCreator` `FLAT` `FlatLands` or `Bukkit` fallback `EditorAddon.java:199`
- **No OP** `grantEditPerms()` `EditorAddon.java:223` `fawe.selection.*` `fawe.clipboard.*` `fawe.history.*` `worldedit.navigation.*` `12h` `Attachment`

## Commands

- `/map create <name>` - creates `edit-<player>-<name>` isolated world, teleports, grants perms
- `/map save` - `FAWE` `//copy` `Clipboard` `gzip` `POST https://content.dropboxapi.com/2/files/upload` to **player's Dropbox** `FragMC/maps/` `dl.dropboxusercontent.com` link, tells `Submit on Discord`
- `/map linkdropbox <token>` - stores `refresh_token` `AES` if key set
- `/editor preview` (`/preview`, `editormode`) - saves to Dropbox then toggles `CREATIVE` <-> `ADVENTURE` to preview play view: `BlocksAddon` hides zone blocks via `sendBlockChange AIR` in `ADVENTURE` `BlocksAddon.java:100`, armour stands stay visible
- `/editor edit` - force `CREATIVE` visible

## Storage

`temp/<uuid>.schem.gz` `~1-5MB` deleted immediately, server keeps `0` long-term. Play cache `IcedSpear` `cache/maps/<id>.schem` `12h` (`>50MB` `4h`) `SchematicManager.java:329` `resolveSchematicFile` handles `https` `dl=0`->`dl=1`.

## Build

`mvn -B -f Addons/Editor/pom.xml clean install` `com.stufy.fragmc:editor-addon:2.0.10-alpha` `distinct package` `shade` `gson` `relocated` `com.stufy.fragmc.editor.libs.gson`.

## Maven - Plugin Portal

`Editor` `2.0.10-alpha` on `https://maven.pkg.github.com/FragMC/Icedspear` `com.stufy.fragmc:editor-addon:2.0.10-alpha`:

```xml
<repositories>
  <repository>
    <id>github</id>
    <url>https://maven.pkg.github.com/FragMC/Icedspear</url>
  </repository>
</repositories>
<dependencies>
  <dependency>
    <groupId>com.stufy.fragmc</groupId>
    <artifactId>editor-addon</artifactId>
    <version>2.0.10-alpha</version>
    <scope>provided</scope>
  </dependency>
</dependencies>
```

