import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import ProjectSection from '../components/Work/ProjectSection';
import WorkHeroSection from '../components/Work/WorkHeroSection';
import { workPage } from '../lib/dataQueries';

export default function Work({data}) {
  const projects = data.slice(1);
  return (
    <>
            <Head>
                <title>{process.env.siteTitle} - {data[0]?.title}</title>
                <meta name={data[0]?.description} content={data[0]?.description}></meta>
            </Head>
            <WorkHeroSection primaryHeading={data[0].section[0].primaryHeading} secondaryHeading={data[0].section[0].secondaryHeading} />
            <ProjectSection projects={projects} _id={projects._id} title={projects.title} description={projects.description} image={projects.image} tags={projects.tags} />
    </>
  );
}

export const getStaticProps: GetStaticProps  = async () => {
    const data = await workPage
    return {
        props: {
           data: data,
        },
    };
}