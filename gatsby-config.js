module.exports = {
  siteMetadata: {
    title: 'Tech Brew'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/typography`,
      },
    },
  ],
}
