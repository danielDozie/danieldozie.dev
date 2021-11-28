import Head from 'next/head';
import React from 'react';
import { servicesPage } from '../../lib/dataQueries';

export default function Index({data}) {
  return (
    <>
    <Head>
        <title>{process.env.siteTitle} - {`Services |`} {data.title}</title>
    </Head>
    
    <p></p>
    </>
  );
}

export async function getStaticPaths(){
    const response = await servicesPage
    const data = response.slice(1); //Remove the first element of the array as it returns ALL the page element from the data query string using the '+' in the groq query.
    const paths = data.map((service:{slug:{ current: string}}) => ({
        params: {slug: service.slug.current}
    }))
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const response = await servicesPage
    const data = response.slice(1); //Remove the first element of the array as it returns ALL the page element from the data query string using the '+' in the groq query.
    const result = data.find((service: {slug:{current: string}}) => service.slug.current === params.slug)
    return {
        props: {
            data: result,
        }
    }
}