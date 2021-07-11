import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { default as customTheme } from '../styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
