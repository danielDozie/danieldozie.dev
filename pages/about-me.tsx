import { AboutHeroSection } from '../components/About/AboutHeroSection'
import Head from 'next/head'
import BlockContent from '@sanity/block-content-to-react'
import { aboutMeSerializer } from '../lib/serializers'
import { aboutMePage } from '../lib/dataQueries'

export default function About({ data }) {
    const content = data[0].section[1].block
    return (
        <>
            <Head children={''}>
                <title>{process.env.siteTitle} - {data[0].title}</title>
                <meta name={data[0].description} content={data[0].description}></meta>
            </Head>
            <AboutHeroSection primaryHeading={data[0].section[0].primaryHeading} secondaryHeading={data[0].section[0].secondaryHeading} />
            <div className="flex flex-col justify-center text-left md:text-center mt-8">
                <div className="font-mitr font-sm text-black dark:text-gray-200 mx-8 md:p-4">
                    <BlockContent blocks={content} serializers={aboutMeSerializer} />
                </div>
                <div className="flex mt-16 justify-center items-center lg:ml-0">
                    <div className="rounded-md shadow">
                        <a
                            href={data[0].section[2]?.button_url}
                            className="px-5 py-3 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
                        >
                            {data[0].section[2]?.button_text}
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}


export async function getStaticProps() {
    const data = await aboutMePage
    return {
        props: {
            data: data,
        },
    }
}