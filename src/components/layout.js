/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import {Flex, Container, Spacer, Box } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Background from "./background";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
	return (
	<>
		{/* <Background/> */}
		<Header />
		<Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto">
			<Box height='5em' />
			<Container as="main" maxW='container.lg'>
				{children}
			</Container>
			{/* <Footer/> */}
		</Flex>
		</>
	)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout