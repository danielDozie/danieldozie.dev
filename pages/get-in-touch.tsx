import Head from 'next/head'
import { GetInTouchForm } from '../components/GetInTouch/GetInTouchForm';
import { GetInTouchHeroSection } from '../components/GetInTouch/GetInTouchHeroSection'
import { getInTouchPage } from '../lib/dataQueries';

export default function GetInTouch({data}) {
    return (
        <>
            <Head>
                <title>{data[0].title} - {process.env.siteTitle} </title>
                <meta name={data[0].description} content={data[0].description}></meta>
            </Head>
            <GetInTouchHeroSection primaryHeading={data[0].section[0].primaryHeading} secondaryHeading={data[0].section[0].secondaryHeading}/>
            <div className="flex flex-col justify-center text-left md:text-center mx-8 mt-6">
                <div className="font-mitr font-sm text-black dark:text-gray-200">
                    <p>{data[0].section[1]?.text}</p>
                    <p className="font-semibold text-gray-500 font-mitr text-xl py-4 dark:text-gray-400 text-center">{data[0].section[2]?.text}</p>
                </div>
            </div>
            <GetInTouchForm />
        </>
    )
}

export async function getStaticProps(){
    const data = await getInTouchPage
    return {
        props: {
            data: data,
    }
}
}