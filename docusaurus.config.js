// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const organizationName = "SamenZoeken";
const projectName = "website";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Samen Zoeken App',
  tagline: 'Hulpmiddel voor burgerparticipatie tijdens een zoekaktie',
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
      /*announcementBar: {
        id: 'support_us',
        content:
          'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },*/
      algolia: {
        appId: 'OFLHG5PSSS',
        apiKey: 'f01090b0c5a609545f01ccc5f1f91190',
        indexName: 'samenzoeken',
        contextualSearch: true,
        externalUrlRegex: 'external\\.app|samenzoeken\\.app',
        searchParameters: {},
        searchPagePath: 'search',
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Samen Zoeken',
        logo: {
          alt: 'Logo Samenzoeken',
          src: 'img/logo.png',
        },
        items: [
          /*{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Uitleg',
          },*/
          { to: '/docs/how', label: 'Hoe werkt het', position: 'left' },
          { to: '/blog', label: 'Nieuws', position: 'left' },
          { to: '/docs/stichting', label: 'Stichting', position: 'left' },
          { to: 'mailto:ben@samenzoeken.app', label: 'Contact', position: 'left' },
          //{ to: '/docs/doneer', label: 'Doneer', position: 'right' },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'html',
            position: 'right',
            value: ' <a position="right" class="icon-link navbar__item" href="https://www.facebook.com/people/Stichting-Samen-Zoeken-App/100091958420884/" target="_blank" style="display: flex; padding:0;"><img style="width: 24px; height: 24px;" src="img/logo-facebook.svg" alt="facebook logo"></a>',
          },
          {
            type: 'html',
            position: 'right',
            value: ' <a position="right" class="icon-link navbar__item" href="https://www.linkedin.com/company/94150917" target="_blank" style="display: flex; padding:0;"><img style="width: 24px; height: 24px;" src="img/logo-linkedin.svg" alt="LinkedIn logo"></a>',
          },
          /*{
            href: `https://github.com/${organizationName}/${projectName}`,
            label: 'GitHub',
            position: 'right',
          },*/
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
                to: '/docs/how',
              },
              {
                label: 'Kaarten',
                to: '/docs/maps'
              },
              {
                label: 'FAQ',
                to: '/faq',
              },
            ],
          },
          {
            title: "Nieuws",
            items: [
              {
                label: 'Lancering App',
                to: '/blog/lancering-app',
              },
              {
                label: 'Oprichting Stichting',
                to: '/blog/oprichting-stichting',
              },
              {
                label: 'Samenzoeken Idee',
                to: '/blog/samenzoeken-app-idee',
              },
            ],
          },
          {
            title: "Stichting",
            items: [
              {
                label: 'Missie',
                to: '/docs/stichting',
              },
              {
                label: 'Vrijwilligers',
                to: '/docs/vrijwilligers',
              },
              {
                label: 'Donaties',
                to: '/docs/doneer',
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
            title: "Stichting Samen Zoeken App",
            items: [
              {
                label: "ben@samenzoeken.app",
                to: "mailto:ben@samenzoeken.app"
              },
              {
                html: "KVK 89960629"
              },
              {
                label: "Privacy Statement",
                to: "privacy"
              },
              {
                label: "Algemene Voorwaarden",
                to: "terms"
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
