---
layout: home

hero:
  name: "FragMC Plugins"
  text: "Your all-in-one "
  tagline: Enhance your server today.
  actions:
    - theme: brand
      text: Get Started
      link: /core/
    - theme: alt
      text: API Docs
      link: /api/
    - theme: alt
      text: View on Modrinth
      link: https://modrinth.com/organization/fragmc

features:
  - title: 🗺️ Advanced Map Management
    details: Create public, private, and party-exclusive map instances on the fly with automatic world generation and cleanup.
  - title: 👥 Robust Party System
    details: Complete party management with invites, chat, and leader-controlled map warping.
  - title: 🔗 Web Integration
    details: Seamlessly link Minecraft accounts to your website using the WebLink addon with secure webhook support.
  - title: 🏆 Leaderboards & Stats
    details: Track best times and scores per map with global and instance-specific leaderboards.
  - title: 🛠️ Developer Friendly
    details: Extensive API for creating custom game modes, GUIs, and integrations.
  - title: ⚡ High Performance
    details: Optimized for Paper with asynchronous world handling to keep your server lag-free.
  - title: ⛏️ Hotbar management
    details: Easy hotbar and item management with [Frost](/frost/)
  - title: ⚔️ PVP Management
    details: Manage PVP and maps with Glacier
  - title: 🌐 Web-based teleportation
    details: Create teleport locations across worlds with Telepipe
  - title: 💾 Checkpoint management
    details: Manage checkpoints with our CheckPoints plugin
---

<script setup>
import { onMounted } from 'vue'

/**
 * 🔧 EDIT THESE
 */
const phrases = [
  'Parkour management',
  'Map management',
  'Friend management',
  'Party management',
  'Leaderboard management',
  'Hotbar management'
]

const intervalMs = 2600
const itemHeight = 1.2 // em

onMounted(() => {
  const heroText = document.querySelector('.VPHomeHero .text')
  if (!heroText) return

  // Wheel wrapper
  const wrapper = document.createElement('span')
  wrapper.className = 'wheel-wrapper'

  // Wheel itself
  const wheel = document.createElement('span')
  wheel.className = 'wheel'

  // Duplicate list for seamless looping
  const looped = [...phrases, ...phrases]

  looped.forEach(text => {
    const item = document.createElement('span')
    item.className = 'wheel-item'
    item.textContent = text
    wheel.appendChild(item)
  })

  wrapper.appendChild(wheel)
  // Container for wheel + system (keeps them inline)
  const inlineGroup = document.createElement('span')
  inlineGroup.className = 'wheel-inline'

  inlineGroup.appendChild(wrapper)

  // Static suffix (same line, same baseline)
  const suffix = document.createElement('span')
  suffix.className = 'wheel-suffix'
  suffix.textContent = ' System'
  inlineGroup.appendChild(suffix)

  heroText.appendChild(inlineGroup)


  let index = 0

  setInterval(() => {
    index++
    wheel.style.transition = 'transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)'
    wheel.style.transform = `translateY(-${index * itemHeight}em)`

    // When we've scrolled through the first set,
    // jump back instantly (invisible to user)
    if (index === phrases.length) {
      setTimeout(() => {
        wheel.style.transition = 'none'
        wheel.style.transform = 'translateY(0)'
        index = 0
      }, 520)
    }
  }, intervalMs)
})
</script>

<style>
.wheel-wrapper {
  display: inline-block;
  height: 1.2em;
  overflow: hidden;
  vertical-align: bottom;
}

.wheel {
  display: inline-block;
}

.wheel-item {
  display: block;
  height: 1.2em;
  line-height: 1.2em;
  white-space: nowrap;
}

.wheel-suffix {
  white-space: nowrap;
}
</style>
