import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { ThemeProvider } from 'tailwind-darkmode-toggle';
import { Nav } from '../components/CommonPageComponents/Nav'
import { Footer } from '../components/CommonPageComponents/Footer'


function MyApp({ Component, pageProps }) {
  return (<>
    <ThemeProvider>
        <main className="dark:bg-gray-800 font-mitr bg-white relative overflow-hidden">
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </main>
    </ThemeProvider>
  
  </>)
}
export default MyApp
