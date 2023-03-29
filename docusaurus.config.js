// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const organizationName = "SamenZoeken";
const projectName = "website";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Samen Zoeken',
  tagline: 'Binnenkort beschikbaar',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/`,
  // baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: `${organizationName}`, // Usually your GitHub org/user name.
  projectName: `${projectName}`, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-D41RDVT7X6',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Samen Zoeken',
        logo: {
          alt: 'Logo Samenzoeken',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Uitleg',
          },
          {to: '/blog', label: 'Nieuws', position: 'left'},
          {
            href: `https://github.com/${organizationName}/${projectName}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: "App",
            items: [
              {
                label: 'Hoe werkt het',
                to: '/docs/app/how',
              },
              {
                label: 'Kaarten',
                to: '/docs/app/maps'
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: "Nieuws",
            items: [
              {
                label: 'Samenzoeken Idee',
                to: '/blog/samenzoeken-app-idee',
              },
              {
                label: 'Eerste test resultaten',
                to: '/blog/first-test',
              },
            ],
          },
          {
            title: "Stichting",
            items: [
              {
                label: 'Missie',
                to: '/docs/stichting/missie',
              }, 
              {
                label: 'Doneer',
                to: '/docs/stichting/doneer',
              },
            ],
          },
         /* {
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },*/
          /*{
            items: [
              
              {
                label: 'GitHub',
                href:`https://github.com/${organizationName}/${projectName}`,
              },
            ],
          },*/
          {
            title: "Stichting Samen Zoeken",
            items: [
              {
                label: "ben@samenzoeken.app",
                to: "mailto:ben@samenzoeken.app"
              },
              {
                label: "Pers",
                to: "blog/announcement"
              },
              {
                label: "Privacy Statement",
                to: "privacy"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Samen Zoeken.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
