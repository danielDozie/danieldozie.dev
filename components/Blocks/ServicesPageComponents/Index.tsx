import Head from 'next/head'
import React from 'react'
import ServicesContentSection from './ServicesContentSection'
import ServicesHeroSection from './ServicesHeroSection'
import ServicesList from './ServicesList'

export default function SERVICES({data}) {
  return (
      <>
          <Head>
              <title>{process.env.siteTitle + " - " + data[0]?.title}</title>
          </Head>
          <ServicesHeroSection primaryHeading={data[0].section[0].primaryHeading} secondaryHeading={data[0].section[0].secondaryHeading} />
          <ServicesContentSection content={data[0].section} />
          <ServicesList data={data} title={''} description={''} link={''} slug={undefined} _id={''} />
    </>
  )
}
