---
title: Blocks
---

# Blocks Addon

[![Hangar](https://img.shields.io/badge/Hangar-FragMC%2FBlocks-2a2a2a?logo=papermc)](https://hangar.papermc.io/FragMC/Blocks)

Smart zone blocks for IcedSpear `2.0.10-alpha` `Paper 26.2` `Java 25`. Requires `EditorAddon` `depend: [IcedSpear, EditorAddon]` `IcedSpear/Addons/Blocks/src/main/resources/plugin.yml:7`.

## Overview

Replaces command block `black_concrete/barrier -> cp go` and `elytra` logic with placeable zone blocks. `FMM 2.7.1+` required for models (auto-installed).

## Blocks

- `Elytra Add Zone` `GLASS` `fmm_models/elytra_zone.bbmodel:1` `material: GLASS`
- `Remove Elytra Zone` `RED_STAINED_GLASS` `remove_elytra_zone.bbmodel`
- `Checkpoint Return Zone` `EMERALD_BLOCK` `checkpoint_return_zone.bbmodel`
- `Start Block` `GOLD_BLOCK` `start_block.bbmodel:1` `BARRIER` `16,0.1,16` no hitbox
- `Checkpoint Block` `EMERALD_BLOCK` `checkpoint_block.bbmodel:1` `BARRIER` no hitbox

All have **no hitbox** (`AIR` on server, `sendBlockChange` `GLASS/GOLD/EMERALD` only in `CREATIVE` `BlocksAddon.java:100` `updatePlayerBlockView`, `AIR` in `ADVENTURE/SURVIVAL/SPECTATOR` client-side) and floating invisible `ArmorStand` `2.5` blocks above with `gold/emerald` spinning/bobbing `BlocksAddon.java:50` `BukkitRunnable` `0.05` `setHeadPose`.

## FMM Auto-Install

On enable `installFmmModels()` `BlocksAddon.java:49` copies `src/main/resources/fmm/models/*.bbmodel` dummy `Box UV 16` to `plugins/FreeMinecraftModels/models/fragmc_zones/` if not exists, plus dummy `.png`, logs `run /fmm reload`. Replace dummies with real `Blockbench` exports.

## UI

`Sneak+RightClick` block -> `Inventory 27` `Gray glass` `CLOCK` `Radius: X` `RED_CONCRETE -1` `LIME +1` `1-32` for Java, `Floodgate` `SimpleForm` for Bedrock `BlocksAddon.java:95` `isBedrock`.

## API

`BlocksAddon.createZoneItem(type, radius)` `BlocksAddon.java:149` `zone_type` `zone_radius` `PersistentDataType`.

## Build

`mvn -B -f Addons/Blocks/pom.xml clean package` `com.stufy.fragmc:blocks-addon:2.0.10-alpha` `distinct package` `distributionManagement github` `https://maven.pkg.github.com/FragMC/Icedspear`.

## Maven - Plugin Portal (GitHub Packages)

`Blocks` `2.0.10-alpha` on `https://maven.pkg.github.com/FragMC/Icedspear` `com.stufy.fragmc:blocks-addon:2.0.10-alpha` - same repo as `IcedSpear` `Editor`:

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
    <artifactId>blocks-addon</artifactId>
    <version>2.0.10-alpha</version>
    <scope>provided</scope>
  </dependency>
</dependencies>
```

