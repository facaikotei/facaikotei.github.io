// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const organizationName = "facaikotei";
const projectName = "facaikotei.github.io";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "発財皇帝",
  tagline: "收集好東西",
  url: `https://${organizationName}.github.io`,
  baseUrl: `/`,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "https://styles.redditmedia.com/t5_2qhk5/styles/communityIcon_v58lvj23zo551.jpg",
  // GitHub Pages adds a trailing slash by default that I don't want
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-TW",
    locales: ["zh-TW"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "発財皇帝",
        logo: {
          src: "https://styles.redditmedia.com/t5_2qhk5/styles/communityIcon_v58lvj23zo551.jpg",
        },
        items: [
          {
            href: `https://drive.google.com/drive/folders/1uc4Y4HKf4RmRBiaxT5O6zkZdkfcAzgtA?usp=sharing`,
            label: "正版安裝包＆盜版註冊機",
          },
          {
            href: `https://www.youtube.com/playlist?list=PLoXvzVXdrYkOEVLu-lYpiVq6TauPln7OP`,
            label: "微算機",
          },
          {
            href: `https://downloads.intel.com/akdlm/software/acdsinst/15.0/145/ib_tar/Quartus-web-15.0.0.145-windows.tar`,
            label: "Quartus-web-15.0.0.145-windows.tar",
          },
          {
            href: `https://github.com/${organizationName}`,
            label: "GitHub",
          },
          {
            href: "https://zh.m.wikipedia.org/wiki/User:A0977024689",
            label: "維基百科用戶頁",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            label: "GitHub",
            href: `https://github.com/${organizationName}`,
          },
          {
            label: "維基百科用戶頁",
            href: "https://zh.m.wikipedia.org/wiki/User:A0977024689",
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} facaikotei. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
