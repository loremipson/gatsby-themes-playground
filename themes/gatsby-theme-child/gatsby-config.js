module.exports = {
  __experimentalThemes: ['gatsby-theme-core'],
  plugins: [
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}