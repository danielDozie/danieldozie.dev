import Head from 'next/head';
import React from 'react';
import InnerHeroSection from '../../components/Services/InnerHeroSection';
import InnerDetails from '../../components/Services/InnerDetails';
import { eComPage } from '../../lib/dataQueries';
import { GetStaticProps } from 'next';

export default function Index({data}) {
  return (
    <>
    <Head>
        <title>{process.env.siteTitle} - {data[0].title} Service</title>
    </Head>
        <InnerHeroSection title={data[0].title} description={data[0].description} />
        <InnerDetails data={data[0].services_list} _key={''} title={''} content={undefined} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
    const result = await eComPage
    return {
        props: {
            data: result,
        },
    }
}