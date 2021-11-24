import {AboutHeroSection} from '../components/About/AboutHeroSection'
import Head from 'next/head'
import { useAboutMePage } from '../lib/store'
import { useEffect } from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { aboutMeSerializer } from '../lib/serializers'

export default function About() {
    const aboutMePage = useAboutMePage(state => state.aboutMePage)
    const setAboutMePage = useAboutMePage(state => state.setAboutMePage)
    useEffect(() => {
        setAboutMePage()
    },[setAboutMePage])

    const content = aboutMePage?.section[1]?.block
    
    return (
        <>
        <Head>
            <title>{aboutMePage?.title} - {process.env.siteTitle} </title>
            <meta name="description" content="Work"></meta>
        </Head>

        <AboutHeroSection />
        
        <div className="flex flex-col justify-center text-left md:text-center mt-8">
            <div className="font-mitr font-sm text-black dark:text-gray-200 mx-8 md:p-4">
                <BlockContent blocks={content} serializers={aboutMeSerializer} />
            </div>
            <div className="w-4/5 md:w-full mt-8 sm:flex justify-center">
                            <div className="rounded-md shadow">
                                <a
                                    href={aboutMePage?.section[2]?.button_url}
                                    className="flex items-center justify-center px-5 py-3 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
                                >
                                    {aboutMePage?.section[2]?.button_text}
                                </a>
                            </div>
                            
                        </div>
        </div>
        </>
    )
}
