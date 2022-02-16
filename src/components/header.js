import * as React from "react"
import PropTypes from "prop-types"
import { Heading, Box, Spacer, Button, Flex, HStack, Link, Center, Container, Divider, Collapse  } from "@chakra-ui/react"
import { useDisclosure } from '@chakra-ui/react'

import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import {IconButton, useColorMode } from '@chakra-ui/react'

const navigation = [
	{ name: 'Home', href: '' },
  ]

function NavLink({ text, href, ...props })  {
	return (

				<Box p='2'>
			<Link href={href} fontWeight='bold' colorScheme='teal'>{text}</Link>
			</Box>
		
	)
}

function Header(props) {
	const { colorMode, toggleColorMode } = useColorMode()
	const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

	return (
		<Flex as="header" w="100%" p='5' justify='center'>  {/* shadow='lg' roundedBottom='md' bgGradient='linear-gradient(38deg, #9B2C2C -33%, #1A202C 33%, #171923 77%, #63171B 133%)' */}
			<Heading colorScheme='teal' >OPEN GAME FOOTAGE</Heading>
			</Flex>
	)
  }

  Header.defaultProps = {
  }
  
  Header.propTypes = {
  }

export default Header
