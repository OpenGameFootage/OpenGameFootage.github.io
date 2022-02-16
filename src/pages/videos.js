import * as React from "react"
import { Container, Text, Link, Heading } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/provider"
import theme from "../@chakra-ui/gatsby-plugin/theme"

import { ExternalLinkIcon } from "@chakra-ui/icons"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"

export default function Videos(props) {
	const filePath = props.location.pathname.slice(1);
	const url = `${process.env.WASABI_BUCKET}${filePath}`
	const filename = (fileName) => new URL(fileName).pathname.split("/").pop();

	return(
		<ChakraProvider theme={theme}>
		<Seo title="Videos" />
		<Layout>
			<Container centerContent py='5'>
				<Heading size='lg' as='h4'>Redirecting to download{' '}
				<Link href={url} isExternal>{filename(url)} <ExternalLinkIcon mx='2px' /></Link>
				</Heading>
			</Container>
		</Layout>
	</ChakraProvider>
	)
}