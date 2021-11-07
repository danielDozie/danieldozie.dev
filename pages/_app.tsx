import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'tailwind-darkmode-toggle';
import ReactAudioPlayer from 'react-audio-player'
import { Nav } from '../components/Common/Nav'
import { Footer } from '../components/Common/Footer'

const audioFile = '/assets/audio/Snowchild.mp3'




function MyApp({ Component, pageProps }) {

  return (<>
    <ThemeProvider>
        <main className="dark:bg-gray-800 font-mitr bg-white relative overflow-hidden">
          <ReactAudioPlayer
            src={audioFile}
            autoPlay
          />
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </main>
    </ThemeProvider>

  </>)
}

export default MyApp
