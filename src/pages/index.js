import * as React from "react"
import { ChakraProvider } from "@chakra-ui/provider"
import theme from "../@chakra-ui/gatsby-plugin/theme"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
	<ChakraProvider theme={theme}>
		<Seo title="Home" />
		<Layout>
			<Hero id='hello'/>
		</Layout>
	</ChakraProvider>
)

export default IndexPage