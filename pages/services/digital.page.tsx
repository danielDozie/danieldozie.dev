import Head from 'next/head';
import React from 'react';
import { digitalPage } from '../../lib/dataQueries';
import { GetStaticProps } from 'next';
import LOADER from '../../lib/loader';

export default function Index({ data }) {
    const InnerDetails = React.lazy(() => import('../../components/Blocks/ServicesPageComponents/InnerDetails'));
    const InnerHeroSection = React.lazy(() => import('../../components/Blocks/ServicesPageComponents/InnerHeroSection'));
  return (
    <React.Suspense fallback={<LOADER />}>
        <Head>
            <title>{process.env.siteTitle} - {data[0].title} Service</title>
        </Head>
        <InnerHeroSection data={data} />
        <InnerDetails data={data} />
    </React.Suspense>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await digitalPage
    return {
        props: {
            data
        },
    }
}