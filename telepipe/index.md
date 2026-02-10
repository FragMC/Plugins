# Telepipe

A lightweight and flexible teleportation plugin for Paper servers that loads teleport locations from a JSON file hosted on the web.

**🧪 Live Demo**: Telepipe is actively used and originally made for the public FragMC server — players can test it in real gameplay.

## Features
*   **🌐 Web-based Configuration** - Store your teleport locations in a JSON file anywhere on the web
*   **🔄 Hot Reload** - Update teleports without restarting your server
*   **🌍 Cross-World Support** - Teleport players between different worlds (overworld, nether, end, custom worlds)
*   **🎯 Precise Positioning** - Control exact coordinates, pitch, and yaw for each teleport
*   **📝 Extensible JSON Format** - Add custom metadata in the JSON (images, descriptions, etc.) for use with external tools
*   **⚡ Async Loading** - Non-blocking web requests won't lag your server
*   **🔧 Customisable** - Have commands run on every teleport

## Commands

| Command | Description |
| :--- | :--- |
| `/telepipe goto <name>` | Teleport to a location defined in the JSON |
| `/telepipe reload` | Reload teleport locations from the web |

**Aliases**: `/tp`

## Permissions

| Permission | Description | Default |
| :--- | :--- | :--- |
| `telepipe.goto` | Allows players to use the goto command | op |
| `telepipe.reload` | Allows reloading the teleport list | op |

## Configuration
After first launch, edit `plugins/Telepipe/config.yml` and set your JSON URL:

```yaml
json-url: "https://example.com/teleports.json"
```

### JSON Format

```json
{
  "spawn": {
    "x": 0.5,
    "y": 64,
    "z": 0.5,
    "pitch": 0,
    "yaw": 0,
    "world": "world"
  },
  "nether_hub": {
    "x": 100,
    "y": 70,
    "z": -50,
    "pitch": 0,
    "yaw": 90,
    "world": "world_nether"
  },
  "arena": {
    "x": -25,
    "y": 80,
    "z": 10,
    "pitch": 0,
    "yaw": 180
  }
}
```

**Required fields:**
*   `x`, `y`, `z` - Coordinates
*   `pitch`, `yaw` - Player rotation

**Optional fields:**
*   `world` - Target world name (if omitted, uses player's current world)
*   Any additional fields - Ignored by the plugin, useful for web dashboards

## Use Cases
*   **Dynamic Spawn Points** - Update spawn locations without editing configs
*   **Event Warps** - Quickly add/remove event locations via web interface
*   **Multi-Server Networks** - Share teleport locations across multiple servers
*   **Web Integration** - Build web dashboards to manage teleports with images and descriptions
*   **Player Hubs** - Create central hubs with teleports to different game modes
*   **Teleport-Based Maps** - Link to the web to create a website where people can browse maps, copy a command and go to them in game!

## Why Telepipe?
Traditional teleport plugins require editing config files and restarting servers. Telepipe lets you manage teleports through any web-accessible JSON file, making it perfect for:

*   Servers with frequent location changes
*   Networks using centralized configuration management
*   Admins who want web-based teleport management
*   Integration with custom dashboards and tools

## Requirements
*   Paper 1.21.1 or newer
*   Java 21+

## Support
Found a bug or have a suggestion? Open an issue on GitHub!
