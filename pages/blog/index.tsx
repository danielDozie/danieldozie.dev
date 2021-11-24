import React from 'react';
import Head from 'next/head'
import { BlogHeroSection } from '../../components/Blog/BlogHeroSection';
import { BlogPosts } from '../../components/Blog/BlogPosts';

export default function index() {
  return ( 
    <>
      <Head>
          <title>Blog - {process.env.siteTitle} </title>
          <meta name="description" content="Work"></meta>
      </Head>
      <BlogHeroSection />
      <BlogPosts />
    </>
  );
}