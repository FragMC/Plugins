---
title: Frost — Development
---

# Development

Notes for building and working on Frost locally. Now `2.0.10-alpha` `Paper 26.2` `Java 25`.

## Prerequisites

- Java 25 (JDK `Temurin-25.0.4.1+`)
- Maven 3.9+
- Paper 26.2 `26.2.build.123-stable` test server

## Build

```bash
mvn -B -f Frost/pom.xml clean package
```

Artifacts are written to `Frost/target/` (e.g., `frost-2.0.10-alpha.jar`). The shade plugin relocates Gson into `com.stufy.fragmc.frost.libs.gson` to avoid conflicts. Requires `maven-shade-plugin 3.6.2` for Java 25 (class version 69).

## Maven - Use as Dependency (GitHub Packages - Plugin Portal)

Frost is published to GitHub Packages `https://maven.pkg.github.com/FragMC/Frost` `com.stufy.fragmc:frost:2.0.10-alpha` `26.2` (not Maven Central). To use as a dependency in your plugin:

**1. Add the repository** `settings.xml` `~/.m2/settings.xml`:
```xml
<servers>
  <server>
    <id>github</id>
    <username>YOUR_GITHUB_USERNAME</username>
    <password>YOUR_GITHUB_TOKEN (ghp_... or github_pat_... with read:packages)</password>
  </server>
</servers>
```

`pom.xml`:
```xml
<repositories>
  <repository>
    <id>github</id>
    <url>https://maven.pkg.github.com/FragMC/Frost</url>
  </repository>
  <repository>
    <id>papermc</id>
    <url>https://repo.papermc.io/repository/maven-public/</url>
  </repository>
</repositories>

<dependencies>
  <dependency>
    <groupId>com.stufy.fragmc</groupId>
    <artifactId>frost</artifactId>
    <version>2.0.10-alpha</version>
    <scope>provided</scope>
  </dependency>
</dependencies>
```

**Gradle `build.gradle.kts`:**
```kotlin
repositories {
    maven { url = uri("https://maven.pkg.github.com/FragMC/Frost") }
    maven("https://repo.papermc.io/repository/maven-public/")
}
dependencies {
    compileOnly("com.stufy.fragmc:frost:2.0.10-alpha")
}
```

Credentials: `GITHUB_TOKEN` needs `read:packages` for `FragMC/Frost`. See `.github/workflows/build.yml:22` `setup-java@v5` `server-id: github` `GITHUB_TOKEN`.

**Plugin Portal:** For public `https://plugins.gradle.org` or `https://papermc.io` `Hangar` you would publish via `com.gradle.plugin-publish` - Frost is currently only on `GitHub Packages` `Frost/Frost/pom.xml:15` `distributionManagement github` `https://maven.pkg.github.com/FragMC/Frost`, not `Maven Central`. To add to `Maven Central`/`Gradle Plugin Portal`, run `mvn deploy` with `ossrh` `central` `https://s01.oss.sonatype.org` and `gradle publishPlugins`.

## Install to Server

1. Copy the built jar into your server’s `plugins/` directory.
2. Start the server to generate `plugins/Frost/config.yml` and `plugins/Frost/database.db`.
3. Edit `config.yml`, then run `/frost reload` to apply changes.

## Project Structure

- Core plugin entry: `com.stufy.fragmc.frost.Frost`
- Public API: `com.stufy.fragmc.frost.api.FrostAPI` (exposed via `Frost#getAPI()`)
- Managers: configuration, profiles, cosmetics, particles, GUI, database, player data
- Resources: `plugin.yml`, `config.yml`

## Testing Tips

- Use a fresh test world and a clean `plugins/Frost/` folder for baseline behavior.
- Exercise particle triggers: jump, sprint, sneak, glide, swim, damage, kill, block break/place.
- Verify Hotbar Lock: enable with `/togglelock`, ensure locked slots resist edits/drops.
- Check Bedrock UIs with Floodgate if available; otherwise Java inventory UIs are used.

## Coding Notes

- Target API: Paper 1.21.1; compile level: Java 21.
- Avoid logging secrets or writing sensitive data to disk.
- Keep `provided` scope for server APIs; shade only what you must relocate.

