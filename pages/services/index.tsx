import React from 'react';
import Head from 'next/head'
import { servicesPage } from '../../lib/dataQueries';
import ServicesHeroSection from '../../components/Services/ServicesHeroSection'
import ServicesContentSection from '../../components/Services/ServicesContentSection';
import ServicesList from '../../components/Services/ServicesList';

export default function Services({data}) {
  return (
    <>
    <Head children={''}>
      <title>{process.env.siteTitle} - {data[0].title}</title>
    </Head>
      <ServicesHeroSection primaryHeading={data[0].section[0].primaryHeading} secondaryHeading={data[0].section[0].secondaryHeading} />
      <ServicesContentSection content={data[0].section} />
      <ServicesList data={data} title={''} description={''} link={''} slug={undefined} _id={''} />
    </>
  );
}

export async function getStaticProps() {
    const data = await servicesPage
    return {
        props: {
            data: data,
    }
}   
}