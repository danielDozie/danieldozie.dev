import Head from 'next/head';
import React from 'react';
import InnerHeroSection from '../../components/Services/InnerHeroSection';
import InnerDetails from '../../components/Services/InnerDetails';
import { digitalPage } from '../../lib/dataQueries';

export default function Index({data}) {
  return (
    <>
    <Head children={''}>
        <title>{process.env.siteTitle} - {data[0].title} Service</title>
    </Head>
        <InnerHeroSection title={data[0].title} description={data[0].description} />
        <InnerDetails data={data[0].section} _key={''} title={''} content={undefined} />
    </>
  );
}

export async function getStaticProps(){
    const result = await digitalPage
    return {
        props: {
            data: result,
        },
    }
}
