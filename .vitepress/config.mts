import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/Plugins',
  title: "FragMC Docs",
  description: "Official Documentation for FragMC Core, Addons, and API",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'IcedSpear', link: '/icedspear/' },
      { text: 'WebLink', link: '/weblink/' },
      { text: 'CheckPoints', link: '/checkpoints/' },
      { text: 'Telepipe', link: '/telepipe/' }
    ],

    sidebar: [
      {
        text: 'IcedSpear',
        items: [
          { text: 'Introduction', link: '/icedspear/' },
          { text: 'Features', link: '/icedspear/features' },
          { text: 'Commands & Permissions', link: '/icedspear/commands' },
          { text: 'Configuration', link: '/icedspear/configuration' },
          { text: 'Mechanics', link: '/icedspear/mechanics' },
          { text: 'API Reference', link: '/icedspear/api/' },
          { text: 'Download', link: 'https://modrinth.com/plugin/icedspear' }
        ]
      },
      {
        text: 'WebLink',
        items: [
          { text: 'Overview', link: '/weblink/#weblink-addon' },
          { text: 'Configuration', link: '/weblink/#configuration' },
          { text: 'Webhook API', link: '/weblink/#webhook-api' },
          { text: 'Database', link: '/weblink/#database-schema' },
          { text: 'Download', link: 'https://modrinth.com/plugin/weblink-icedspear' }
        ]
      },
      {
        text: 'CheckPoints',
        items: [
          { text: 'Overview', link: '/checkpoints/#checkpoints-plugin' },
          { text: 'Features', link: '/checkpoints/#features' },
          { text: 'Configuration', link: '/checkpoints/#installation' },
          { text: 'Download', link: 'https://modrinth.com/plugin/fragmc-checkpoints' }
        ]
      },
      {
        text: 'Telepipe',
        items: [
          { text: 'Overview', link: '/telepipe/#telepipe' },
          { text: 'Configuration', link: '/telepipe/#configuration' },
          { text: 'JSON Format', link: '/telepipe/#json-format' },
          { text: 'Download', link: 'https://modrinth.com/plugin/telepipe' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FragMC' }
    ],
    
    search: {
      provider: 'local'
    },
    
    footer: {
      message: 'Released under the GNU GPLv3 License.',
      copyright: 'Copyright © 2025-Present FragMC'
    }
  }
})
