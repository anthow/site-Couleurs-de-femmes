module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    language:"fr",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,      

{

    resolve: 'gatsby-plugin-html-attributes',
    options: {
      lang: 'fr'
    }
  },

  {
    resolve: `gatsby-plugin-snipcart-advanced`,
    options: {
      version: "3.0.29",
      publicApiKey: "MTZjMGQ2ZjUtZTljOC00ZDBmLTg0MGYtOGE1ODQyZGY1MDk1NjM3NjU3MDI2ODgxNDkyNTg0", // use public api key here or in environment variable
      defaultLang: "fr",
      currency: "eur",
      openCartOnAdd: false,
      useSideCart: false,
      // be careful with this mode cart. The cart in this mode has a bug of scroll in firefox
      locales: {
        fr: {
          actions: {
            checkout: "Valider le panier",
          },
        },
      },
      templatesUrl:
        "path on your template file. Set file in the static folder, ex: '/snipcart/index.html'",
      // not work on dev. Gatsby not serve html file in dev https://github.com/gatsbyjs/gatsby/issues/13072
      innerHTML: `
          <billing section="bottom">
              <!-- Customization goes here -->
          </billing>`,
    },
  },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cormorant\:300,400,400i,700`, // you can also specify font weights and styles
          `Nanum Gothic`
        ],
        display: 'swap'
      },
    },

    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'MTZjMGQ2ZjUtZTljOC00ZDBmLTg0MGYtOGE1ODQyZGY1MDk1NjM3NjU3MDI2ODgxNDkyNTg0',
        autopop: false,
        defaultLang: "fr-FR",
        currency: "eur",
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: `f33f61cb469ff3ca17faf360f637fa`,
  
        // The project environment to read from. Defaults to the primary environment:
        environment: `main`,
  
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,
  
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
  
        // Custom API base URL (most don't need this)
        // apiUrl: 'https://site-api.datocms.com',
  
        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        localeFallbacks: {
          it: ['en'],
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
  