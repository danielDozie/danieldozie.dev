import React from 'react'
import { HeroSection } from '../components/Home/HeroSection'
import {ContentSection} from '../components/Home/ContentSection'
import { TechSection } from '../components/Home/TechSection'
import {HomeBlogSection} from '../components/Home/HomeBlogSection'
import Head from 'next/head'

export const Homepage = () => {
  return (
        <>
        <Head>
          <title>{process.env.siteTitle}</title>
        </Head>
        <HeroSection />
        <ContentSection />
        <TechSection />
        <HomeBlogSection id={0} name={''} color={''} title={''} description={''} />
        </>
  )
}

export default Homepage;