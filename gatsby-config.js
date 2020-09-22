/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: '@kentico/gatsby-source-kontent',
      options: {
        projectId: '64db5c2c-873d-002c-d203-dd85e4f87b50',
        languageCodenames: [
          'default', // Languages in your project (Project settings -> Localization),
        ],
      },
    },
  ],
}
