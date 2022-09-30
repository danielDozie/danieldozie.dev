import  Head from 'next/head'
import React from 'react'
import { HeroSection } from './HeroSection'
import { HomeBlogSection } from './HomeBlogSection'
import { TechSection } from './TechSection'
import { WorkSection } from './WorkSection'

export default function HOME({data}) {
  return (
      <>
          <Head>
              <title>{`Welcome - ` + process.env.siteTitle}</title>
          </Head>
          <HeroSection data={data[0].HeroSection}/>
          <WorkSection data={data[0].WorkSection} />
          <TechSection data={data[0].TechSection} />
          <HomeBlogSection data={data[0].BlogSection} />
      </>
  )
}
