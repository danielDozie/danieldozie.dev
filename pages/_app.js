import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { ApolloProvider } from '@apollo/client'
import client from '../lib/apolloClient'
import { ThemeProvider } from 'tailwind-darkmode-toggle';
import ReactAudioPlayer from 'react-audio-player'
import {Nav} from '../components/Nav'
import {Footer} from '../components/Footer'




function MyApp({ Component, pageProps }) {

  return (<>
    <ThemeProvider>
      <ApolloProvider client={client}>      
      <main className="dark:bg-gray-800 font-mitr bg-white relative overflow-hidden">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </main>
      </ApolloProvider>
    </ThemeProvider>

  </>)
}

export default MyApp
