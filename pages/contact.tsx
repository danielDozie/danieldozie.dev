import { GetStaticProps } from 'next';
import Head from 'next/head'
import { ContactForm } from '../components/Contact/ContactForm';
import { ContactHeroSection } from '../components/Contact/ContactHeroSection'
import { contactPage } from '../lib/dataQueries';

export default function Contact({data}) {
    return (
        <>
            <Head>
                <title>{process.env.siteTitle} - {data[0].title}</title>
                <meta name={data[0].description} content={data[0].description}></meta>
            </Head>
            <ContactHeroSection primaryHeading={data[0].section[0].primaryHeading} secondaryHeading={data[0].section[0].secondaryHeading}/>
            <div className="flex flex-col justify-center text-left md:text-center mx-8 mt-6">
                <div className="font-mitr font-sm text-black dark:text-gray-200">
                    <p>{data[0].section[1]?.text}</p>
                    <p className="font-semibold text-gray-500 font-mitr text-xl py-4 dark:text-gray-400 text-center">{data[0].section[2]?.text}</p>
                </div>
            </div>
            <ContactForm />
        </>
    )
}

export const getStaticProps: GetStaticProps  = async () => {
    const data = await contactPage
    return {
        props: {
            data: data,
    }
}
}