import Head from 'next/head'
import { ContactHeroSection } from '../components/Contact/ContactHeroSection'

export default function contact() {

    return (
        <>
        <Head>
            <title>Contact - {process.env.siteTitle} </title>
            <meta name="description" content="Work"></meta>
        </Head>

        <ContactHeroSection />
        
        <div className="flex flex-col justify-center text-left md:text-center">
            <div className="font-mitr font-sm text-black dark:text-gray-200 p-4">
                <p>Drop me a note in the box below, and i will surely respond as fast as I can.</p>
                <p className="fond-semibold text-gray-500 font-mitr text-xl py-4 dark:text-gray-400">I Promise</p>
            </div>
            
        </div>
        </>
    )
}