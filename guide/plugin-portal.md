---
title: Publishing to Plugin Portals
---

# Publishing to Plugin Portals

How to publish FragMC plugins (`Frost`, `IcedSpear`, `Redempt` etc. `2.0.10-alpha` `26.2`) to `Maven Central` and `Gradle Plugin Portal` from your `Maven` `pom.xml` setup. Current FragMC plugins are only on `GitHub Packages` `https://maven.pkg.github.com/FragMC/*` `com.stufy.fragmc` `2.0.10-alpha` - this guide makes them public.

> **Current:** All `7` jars are `GitHub Packages` `distributionManagement github` `https://maven.pkg.github.com/FragMC/Frost` etc., not `Maven Central`. To be `public` on `https://plugins.gradle.org` or `https://central.sonatype.com`, follow below.

## Option A. Maven Central (for `mvn` users)

For plain `Maven` publishing to `Central` via `Sonatype OSSRH` `https://s01.oss.sonatype.org`.

### 1. `pom.xml` add `distributionManagement` Central

```xml
<distributionManagement>
  <snapshotRepository>
    <id>ossrh</id>
    <url>https://s01.oss.sonatype.org/content/repositories/snapshots</url>
  </snapshotRepository>
  <repository>
    <id>ossrh</id>
    <url>https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/</url>
  </repository>
</distributionManagement>

<!-- Add required Central metadata -->
<licenses>
  <license>
    <name>GNU GPLv3</name>
    <url>https://www.gnu.org/licenses/gpl-3.0.txt</url>
  </license>
</licenses>
<developers>
  <developer>
    <id>stufy</id>
    <name>Stufy</name>
    <email>you@example.com</email>
  </developer>
</developers>
<scm>
  <url>https://github.com/FragMC/Frost</url>
  <connection>scm:git:git://github.com/FragMC/Frost.git</connection>
  <developerConnection>scm:git:ssh://github.com:FragMC/Frost.git</developerConnection>
</scm>
```

### 2. `settings.xml` `~/.m2/settings.xml` `OSSRH` creds

```xml
<servers>
  <server>
    <id>ossrh</id>
    <username>YOUR_SONATYPE_USERNAME</username>
    <password>YOUR_SONATYPE_PASSWORD</password>
  </server>
  <server>
    <id>github</id>
    <username>YOUR_GITHUB_USERNAME</username>
    <password>YOUR_GITHUB_TOKEN</password>
  </server>
</servers>
```

`YOUR_SONATYPE_USERNAME/PASSWORD` from `https://s01.oss.sonatype.org` `Sign Up` `JIRA` `Central` `OSSRH-XXXXX` ticket for `com.stufy.fragmc`.

### 3. Deploy

```bash
mvn clean deploy -P release
# with Nexus Staging Maven Plugin or Central Publishing Maven Plugin
mvn clean deploy
# then Release via https://s01.oss.sonatype.org `Staging Repositories` `Close` -> `Release`, or use `central-publishing-maven-plugin` auto
```

After `Release`, it syncs to `https://repo1.maven.org/maven2/com/stufy/fragmc/frost/2.0.10-alpha/` in `~10min` and `https://central.sonatype.com` search.

## Option B. Gradle Plugin Portal (for `gradle` users)

For `Gradle` `plugins.gradle.org` `com.gradle.plugin-publish` `1.2.1`.

### 1. `build.gradle.kts` add Plugin Publish

```kotlin
plugins {
    `java-gradle-plugin`
    `maven-publish`
    id("com.gradle.plugin-publish") version "1.2.1"
}

gradlePlugin {
    website.set("https://github.com/FragMC/Frost")
    vcsUrl.set("https://github.com/FragMC/Frost.git")
    plugins {
        create("frost") {
            id = "com.stufy.fragmc.frost"
            displayName = "Frost"
            description = "Profile-based hotbars and cosmetics for Paper 26.2"
            tags.set(listOf("minecraft", "paper", "frost"))
            implementationClass = "com.stufy.fragmc.frost.Frost"
        }
    }
}
```

### 2. `gradle.properties` `GRADLE_PORTAL_KEY/SECRET`

```properties
gradle.publish.key=your_key_from_https://plugins.gradle.org/docs/publish-plugin
gradle.publish.secret=your_secret
```

Get from `https://plugins.gradle.org/docs/publish-plugin` `Generate API Key`.

### 3. Publish

```bash
./gradlew publishPlugins
# or with Maven using `gradle` wrapper via `mvn`? No, Gradle only
```

For **Maven projects** like FragMC (`Frost/Frost/pom.xml:1` `maven-compiler 3.13.0` `Java 25`), you have two choices:

*   **Keep Maven, publish to Maven Central** -> use **Option A** `OSSRH` `https://s01.oss.sonatype.org` as above, then `Gradle` users can still `mavenCentral()` `implementation("com.stufy.fragmc:frost:2.0.10-alpha")` without `Plugin Portal`.
*   **Publish to Gradle Portal from Maven** -> add a minimal `build.gradle.kts` `java-gradle-plugin` wrapper that calls `maven-publish` `from(components["java"])` and `com.gradle.plugin-publish`, or keep separate `gradle` module that `dependsOn` `Frost` `jar`.

## Using as Dependency (After Publishing)

Once on `Maven Central`, no `settings.xml` `github` needed:

**Maven `pom.xml`:**
```xml
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
repositories { mavenCentral() }
dependencies { compileOnly("com.stufy.fragmc:frost:2.0.10-alpha") }
```

*Before* Central (now, `GitHub Packages` only), see `Frost` `frost/development.md:23` `GitHub Packages` `https://maven.pkg.github.com/FragMC/Frost` `settings.xml` `github` `username/token` `read:packages`.

## Which to Use for FragMC?

*   **Stay on `GitHub Packages`** `2.0.10-alpha` as now - private, needs `GITHUB_TOKEN` `read:packages` `Frost` `IcedSpear` `CheckPoints` all `com.stufy.fragmc` `26.2` already `distributionManagement github` - simplest, no `Sonatype` `JIRA` or `Gradle Portal` approval.
*   **Go public** -> `Maven Central` `Option A` is more universal than `Gradle Portal` for `Paper` `Maven` users. `Gradle Portal` is only for `Gradle` `plugins {}` `id` syntax; `Paper` users mostly use `Maven` `pom.xml` `provided`, so `Maven Central` is preferred.

If you want **both**, keep `GitHub Packages` as `snapshot` `2.0.11-SNAPSHOT` `https://maven.pkg.github.com/FragMC/*` and `Maven Central` for `2.0.10-alpha` `RELEASE`.
