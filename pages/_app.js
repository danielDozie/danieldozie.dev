import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { ApolloProvider } from '@apollo/client'
import client from '../lib/apolloClient'
import { ThemeProvider } from 'tailwind-darkmode-toggle';
import ReactAudioPlayer from 'react-audio-player'


function MyApp({ Component, pageProps }) {
  return (<>
    <ThemeProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
        <ReactAudioPlayer
          src="/assets/audio/Snowball.mp3"
          autoPlay={true}
        />
      </ApolloProvider>
    </ThemeProvider>

  </>)
}

export default MyApp
