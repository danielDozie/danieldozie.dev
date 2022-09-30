import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { ThemeProvider } from 'tailwind-darkmode-toggle';
import { Nav } from '../components/Common/Nav'
import { Footer } from '../components/Common/Footer'


function MyApp({ Component, pageProps }):React.ReactNode {
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
