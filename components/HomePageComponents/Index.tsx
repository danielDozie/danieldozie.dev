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
          <HeroSection primaryHeading={data[0].HeroSection.primaryHeading} secondaryHeading={data[0].HeroSection.secondaryHeading} image={data[0].HeroSection.image} />

          <WorkSection title={data[0].WorkSection.title} left_image={data[0].WorkSection.left_image} content={data[0].WorkSection.content} />

          <TechSection title={data[0].TechSection.title} subtitle={data[0].TechSection.subtitle} content={data[0].TechSection.content} first_button_text={data[0].TechSection.button[0].button_text} first_button_url={data[0].TechSection.button[0].button_url} second_button_text={data[0].TechSection.button[1].button_text} second_button_url={data[0].TechSection.button[1].button_url} logo_icon_large_text={data[0].TechSection.logo_text[0].children[0].text} logo_icon_small_text={data[0].TechSection.logo_text[1].children[0].text} logo_icon={data[0].TechSection.logo_icon} />

          <HomeBlogSection custom_blogs={data[0].BlogSection.custom_blogs} block={data[0].BlogSection.block} />
      </>
  )
}
