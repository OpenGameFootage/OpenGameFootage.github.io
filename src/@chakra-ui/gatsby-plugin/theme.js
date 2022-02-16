import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools";

const dark = 'linear-gradient(38deg, #9B2C2C -33%, #1A202C 33%, #171923 77%, #63171B 133%)';
const light = "#f0f0f0";

const theme = {
	config: {
		useSystemColorMode: false,
		initialColorMode: "dark"
	  },
	  styles: {
		global: (props) => ({
			html: {
			},
		  body: {
			bg: mode(light, dark)(props),
			bgRepeat: 'no-repeat',
			bgAttachment: 'fixed',
		  }
		})
	  }
	/* colors: {
    	background: "rebeccapurple",
  	}, */
}

export default extendTheme(theme)