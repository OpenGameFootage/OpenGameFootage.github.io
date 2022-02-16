import * as React from "react"
import {ChakraProvider, Container, Box, Text, Heading } from "@chakra-ui/react"

import theme from "../@chakra-ui/gatsby-plugin/theme"

import Layout from "../components/layout"
import Seo from "../components/seo"

//const browser = typeof window !== "undefined" && window;
//https://github.com/gatsbyjs/gatsby/issues/5329
//https://stackoverflow.com/questions/51702369/gatsby-redirect-to-home-page-instead-of-displaying-404-page
//https://support.gatsbyjs.com/hc/en-us/articles/1500003051241-Working-with-Redirects

const NotFoundPage = () => (
	<ChakraProvider theme={theme}>
		<Seo title="Secret" />
		<Layout>
		<Container centerContent>
			<Box>
				<Heading py='5'>You just found a secret page!</Heading>
				<Text fontSize='xl'>Feel free to brag to all your friends.</Text>
			</Box>
			</Container>
		</Layout>
  </ChakraProvider>
)

export default NotFoundPage
