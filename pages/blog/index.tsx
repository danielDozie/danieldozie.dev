import React from 'react';
import Head from 'next/head'
import { BlogHeroSection } from '../../components/Blog/BlogHeroSection';
import { BlogPosts } from '../../components/Blog/BlogPosts';
import { blog } from '../../lib/dataQueries';

export default function index({data}) {
  return ( 
    <>
      <Head>
          <title>Blog - {process.env.siteTitle} </title>
          <meta name="description" content="Work"></meta>
      </Head>
      <BlogHeroSection />
      <BlogPosts data={data} />
    </>
  );
}

export async function getStaticProps() {
  const data = await blog
  return {
    props: {
      data: data,
  },
}
}