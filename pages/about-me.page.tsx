import React from 'react'
import { aboutMePage } from '../lib/dataQueries'
import { GetStaticProps } from 'next';
import LOADER from '../lib/loader';

export default function About({ data }) {
    const ABOUT_HERO = React.lazy(() => import('../components/AboutPageComponents/Index'))
    return (
        <React.Suspense fallback={<LOADER />}>
           <ABOUT_HERO data={data} />
        </React.Suspense>
    )
}

export const getStaticProps: GetStaticProps  = async () => {
    const data = await aboutMePage
    return {
        props: {
            data
        }
    }
}