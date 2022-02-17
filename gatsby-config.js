require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
  });

module.exports = {
siteMetadata: {
	title: `Open Game Footage`,
	description: `Open Game Footage. Made with Gatsby and Chakra UI.`,
	author: `@sokka06`,
	siteUrl: `https://OpenGameFootage.github.io`,
},
plugins: [
	{
		resolve: '@chakra-ui/gatsby-plugin',
		options: {
			/**
			 * @property {boolean} [resetCSS=true]
			 * if false, this plugin will not use `<CSSReset />
			 */
			resetCSS: true,
			/**
			 * @property {boolean} [isUsingColorMode=true]
			 * if false, this plugin will not use <ColorModeProvider />
			 */
			isUsingColorMode: true,
		},
	},
	`gatsby-plugin-react-helmet`,
	`gatsby-plugin-image`,
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
			// This will impact how browsers show your PWA/website
			// https://css-tricks.com/meta-theme-color-and-trickery/
			// theme_color: `#663399`,
			display: `minimal-ui`,
			icon: `src/images/icon.png`, // This path is relative to the root of the site.
		},
	},
	// this (optional) plugin enables Progressive Web App + Offline functionality
	// To learn more, visit: https://gatsby.dev/offline
	// `gatsby-plugin-offline`,
],
}