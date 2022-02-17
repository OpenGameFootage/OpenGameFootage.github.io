import * as React from "react"
import { Container, Text, Box, Link, Heading, Button, AspectRatio, VStack, Spinner, Fade } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/provider"
import theme from "../@chakra-ui/gatsby-plugin/theme"

import { ExternalLinkIcon } from "@chakra-ui/icons"
import {FiDownload} from '@react-icons/all-files/fi/FiDownload'

import Layout from "../components/layout"
import Seo from "../components/seo"

import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {defaultFirestore} from "../services/firebase/firebase-initialize"

import ReactPlayer from 'react-player'

const VideoBox = (id) => {
	return(
		<Box borderRadius={'lg'} shadow='lg' overflow={'hidden'}>
			<ReactPlayer url={`https://youtu.be/${id}`} light controls/>
		</Box>
	)
}

const NotFound = () => {
	return(
<></>
	)
}

const GetVideoId = (url) => {
	const array = url.split('/') // Split the string into an array with / as separator
	const segment = array[2];  // Id should be second, after /videos/
	return segment;
}

export default function Videos(props) {
	const currentPath = props.location.pathname;
	/*
	const filePath = props.location.pathname.slice(8);
	const url = `${process.env.WASABI_BUCKET}${filePath}`
	const filename = (fileName) => new URL(fileName).pathname.split("/").pop();
 */
	const [data, setData] = React.useState(null)
	const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
		const id = GetVideoId(currentPath)
		console.log(id)
		if (id.trim() != '') {
			const docRef = doc(defaultFirestore, 'videos', id);
			getDoc(docRef).then(doc => {
				setData(doc.data())
				setIsLoading(false)
			})
		} else {
			setIsLoading(false)
		}
  }, [])

	return(
		<ChakraProvider theme={theme}>
		<Seo title="Videos" />
		<Layout>
			<Container centerContent py='5'>
				{isLoading && (
					<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='blue.500'
					size='xl'
				  />
				)}

				{!isLoading && data && (
					<Fade in={data} delay={1}>
					<VStack>
						<Heading size='lg' as='h4'>{data.name}</Heading>
						<Box py='5'>
							{VideoBox(data.youtubeId)}
						</Box>
						<Button as='a' href={`${process.env.WASABI_BUCKET}${data.bucketPath}`} colorScheme='teal' shadow={'lg'} size='lg' rightIcon={<FiDownload />} py='5'>Download</Button>
					</VStack>
					</Fade>
				)
				}

				{!isLoading && !data && (
					<Text>Video not found 🤔</Text>
				)}
			</Container>
		</Layout>
	</ChakraProvider>
	)
}