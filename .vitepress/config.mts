import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/Plugins',
  title: "FragMC Docs",
  description: "Official Documentation for FragMC Core, Addons, and API",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Setup All', link: '/guide/setup-all' },
      { text: 'Plugins', items: [
        { text: 'IcedSpear', link: '/icedspear/' },
        { text: 'Frost', link: '/frost/' },
        { text: 'CheckPoints', link: '/checkpoints/' },
        { text: 'Redempt', link: '/redempt/' },
        { text: 'WebLink', link: '/weblink/' },
      ]},
      { text: 'Addons', items: [
        { text: 'Blocks', link: '/blocks/' },
        { text: 'Editor', link: '/editor/' },
        { text: 'IcedScore', link: '/icedspear/features' },
        { text: 'MapBot', link: '/mapbot/' },
      ]},
      { text: 'Telepipe (Deprecated)', link: '/telepipe/' },
    ],

    sidebar: [
      {
        text: 'Setup All',
        items: [
          { text: 'All Plugins Together', link: '/guide/setup-all' },
          { text: 'Quick Start (26.2)', link: '/guide/setup-all#_1-download-build' },
          { text: 'Plugin Portal', link: '/guide/plugin-portal' }
        ]
      },
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
        text: 'Telepipe (Deprecated)',
        items: [
          { text: 'Overview (Deprecated)', link: '/telepipe/' },
          { text: 'Configuration', link: '/telepipe/#configuration' },
          { text: 'JSON Format', link: '/telepipe/#json-format' },
          { text: 'Download', link: 'https://modrinth.com/plugin/telepipe' }
        ]
      },
      {
        text: 'Frost',
        items: [
          { text: 'Overview', link: '/frost/' },
          { text: 'Commands & Permissions', link: '/frost/commands' },
          { text: 'Configuration', link: '/frost/configuration' },
          { text: 'Development', link: '/frost/development' }
        ]
      },
      {
        text: 'Redempt',
        items: [
          { text: 'Overview', link: '/redempt/' },
          { text: 'Download', link: 'https://modrinth.com/plugin/redempt' }
        ]
      },
      {
        text: 'Blocks',
        items: [
          { text: 'Overview', link: '/blocks/' },
          { text: 'FMM', link: '/blocks/#fmm-auto-install' }
        ]
      },
      {
        text: 'Editor',
        items: [
          { text: 'Overview', link: '/editor/' },
          { text: 'Commands', link: '/editor/#commands' }
        ]
      },
      {
        text: 'MapBot',
        items: [
          { text: 'Overview', link: '/mapbot/' },
          { text: 'Viewer', link: '/mapbot/#viewer-linked' }
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
