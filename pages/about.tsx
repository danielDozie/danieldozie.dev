import {AboutHeroSection} from '../components/About/AboutHeroSection'
import Head from 'next/head'


export default function About(props) {
    
    return (
        <>
        <Head>
            <title>About me - {process.env.siteTitle} </title>
            <meta name="description" content="Work"></meta>
        </Head>

        <AboutHeroSection />
        
        <div className="flex flex-col justify-center text-left md:text-center mt-8">
            <div className="font-mitr font-sm text-black dark:text-gray-200 mx-8 md:p-4">
                <p>You should totally check out my projects. They are pretty cool and all done using different techs.<br /> 
                Remember I am a wordpress enthusiast, amidst other technologies which I have totally conquered<br /> like Opencart, Magento, Joomla, Drupal, Silverstripe... <br />
                oh my, I really know how to take a high jump. <br />The love for the web eco-system and now <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">JAMstack</span>?</p>
            </div>
            <div className="w-4/5 md:w-full mt-8 sm:flex justify-center ml-8">
                            <div className="rounded-md shadow">
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-5 py-3 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
                                >
                                    Check out my Projects
                                </a>
                            </div>
                            
                        </div>
        </div>
        </>
    )
}
