module.exports = {
  siteMetadata: {
    title: `Suhas Jagannath's Website`,
    description: `Personal website and developer portfolio for Suhas Jagannath. Includes resume, social links, and highlights of personal projects across many different tech stacks.`,
    image: `/src/images/website_preview.png`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    `gatsby-plugin-react-helmet`,
  ],
};
