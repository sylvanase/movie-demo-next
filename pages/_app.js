import theme from '@chakra-ui/theme'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'

// const theme = {
// 	styles: {
// 		global: {
// 			'html, body': {
// 				fontSize: '12px',
// 				color: 'gray.600',
// 				lineHeight: 'tall',
// 			},
// 		},
// 	},
// }

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<CSSReset />
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
