import * as React from "react"
import { Box, Container, Stack, Text, Heading, Image, Flex, Spacer, AspectRatio, Link } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

import { ExternalLinkIcon } from "@chakra-ui/icons"

const Hero = () => (
	<Container centerContent py='5'>
		<Heading>Welcome!</Heading>
		<Text>You can find my Youtube channel along with all footage{' '}
			<Link href={process.env.YOUTUBE_CHANNEL} isExternal>here <ExternalLinkIcon mx='2px' /></Link>
		</Text>
	</Container>
)

Hero.propTypes = {
}

Hero.defaultProps = {
}

export default Hero