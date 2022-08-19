import { AboutHeroSection } from '../components/About/AboutHeroSection'
import Head from 'next/head'
import {PortableText} from '@portabletext/react'
import { aboutMeSerializer } from '../lib/serializers'
import { aboutMePage } from '../lib/dataQueries'
import { GetStaticProps } from 'next'

export default function About({ data }) {
    const content = data[0].section[1].block
    return (
        <>
            <Head>
                <title>{process.env.siteTitle + " - " + data[0]?.title}</title>
                <meta name={data[0].description} content={data[0].description}></meta>
            </Head>
            <AboutHeroSection primaryHeading={data[0].section[0].primaryHeading} secondaryHeading={data[0].section[0].secondaryHeading} />
            <div className="flex flex-col justify-center mt-8 text-left md:text-center">
                <div className="mx-8 text-gray-600 font-mitr font-sm dark:text-gray-300 md:p-4">
                    <PortableText value={content} components={aboutMeSerializer} />
                </div>
                <div className="flex items-center justify-center mt-16 lg:ml-0">
                    <div className="rounded-md shadow">
                        <a
                            href={data[0].section[2]?.button_url}
                            className="px-5 py-3 font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 "
                        >
                            {data[0].section[2]?.button_text}
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps  = async () => {
    const data = await aboutMePage
    return {
        props: {
            data: data,
        },
    }
}