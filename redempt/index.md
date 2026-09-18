---
title: Redempt
---

# Redempt

Promo code redemption with EssentialsX, now `2.0.10-alpha` for **Paper 26.2** `26.2.build.123-stable` `Java 25` and Bedrock crossplay.

## Overview

Redempt handles `redeem` codes from the FragMC shop `fragmc.github.io/shop.html` `Redeem` button. Players link via `WebLink` and must be online, then `redeem XXXX-XXXX-XXXX-XXXX` is sent via `WebLink` `WEBLINK_API_URL` `execute-command` to the server.

## Features

- `XXXX-XXXX-XXXX-XXXX` `16 chars` `4x4` codes via `SecureRandom` `Redempt/src/main/java/com/stufy/fragmc/redempt/utils/PromoCodeGenerator.java:8`, legacy `12 chars` `3x4` still supported via `normalizeCode()` `Redempt/src/main/java/com/stufy/fragmc/redempt/manager/PromoCodeManager.java:45`
- `EssentialsX` `2.20.1` Vault economy `giveMoney` with `MaxMoneyException` handling
- `SQLite` `promocodes.db` `promo_codes` + `redemptions` tables
- `Geyser` `2.2.0+` + `Floodgate` `softdepend` `Redempt/src/main/resources/plugin.yml:6` for Bedrock `redeem` via same flow

## Requirements

- Paper 26.2 `26.2.build.123-stable`+
- Java 25
- EssentialsX `Vault`
- Optional: Geyser + Floodgate for Bedrock `redeem`

## Installation

1. Build `Redempt-2.0.10-alpha.jar` `mvn -B -f Redempt/pom.xml clean package`
2. Place in `plugins/` with `EssentialsX`
3. Restart, edit `plugins/Redempt/config.yml`, run `reload` if needed

## Commands

- `/promo <create|delete|info|list|renew>` `redempt.admin` - admin
- `/redeem <code>` `redempt.use` - player, supports `XXXX-XXXX-XXXX` and `XXXX-XXXX-XXXX-XXXX`, case-insensitive, dashes optional

## Shop Integration

`fragmc.github.io/shop.html:1237` `Redeem` modal `XXXX-XXXX-XXXX-XXXX` `formatRedeemCode()` `shop.html:1259` checks `linked` + `online` then `sendWebLinkCommand('redeem ' + pretty)` `shop.html:1293` -> `WebLink` `POST /webhook/execute-command` -> `Redempt` `RedeemCommand.java:30`.

## Configuration

`plugins/Redempt/config.yml` `currency-symbol: "$"` etc., SQLite path `plugins/Redempt/promocodes.db`.

## Build

`mvn -B -f Redempt/pom.xml clean package` `Java 25` `maven-compiler 3.13.0` `release 25` `maven-shade 3.6.2`.

## Support Matrix

- Paper 26.2, Java 25, `api-version: '26.2'` `Redempt/src/main/resources/plugin.yml:6`
- Bedrock via `Geyser` `Bedrock` `redeem` same as Java
