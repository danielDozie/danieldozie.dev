import { GetStaticProps } from 'next';
import React from 'react';
import { contactPage } from '../lib/dataQueries';
import LOADER from '../lib/loader';

export default function Contact({ data }) {
    const CONTACT = React.lazy(() => import('../components/Blocks/ContactPageComponents/Index'))
    return (
        <React.Suspense fallback={<LOADER />}>
            <CONTACT data={data} />
        </React.Suspense>
    )
}

export const getStaticProps: GetStaticProps  = async () => {
    const data = await contactPage
    return {
        props: {
            data,
    }
}
}