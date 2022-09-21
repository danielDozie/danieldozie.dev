import  Head from 'next/head'
import React from 'react'
import { BlogHeroSection } from './BlogHeroSection'
import { BlogPosts } from './BlogPosts'

export default function BLOG({data}) {
  return (
      <>
          <Head>
              <title>Blog - {process.env.siteTitle}</title>
              <meta name="description" content="Work"></meta>
          </Head>
          <BlogHeroSection />
          <BlogPosts data={data} />
      </>
  )
}
