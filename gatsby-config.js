require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'http://example.com',
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'google-analytics-id',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Example | Example Site',
        short_name: 'Example',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        // Learn about environment variables: https://gatsby.app/env-vars
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-transformer-remark',
  ]
}
