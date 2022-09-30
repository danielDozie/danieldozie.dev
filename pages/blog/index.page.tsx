import React from 'react';
import { blog } from '../../lib/dataQueries';
import LOADER from '../../lib/loader';

export default function index({ data }) {
  const BLOG = React.lazy(() => import('../../components/Blocks/BlogPageComponents/Index'))
  return ( 
    <React.Suspense fallback={<LOADER />}>
      <BLOG data={data} />
    </React.Suspense>
  );
}

export async function getStaticProps() {
  const data = await blog
  return {
    props: {
      data
  },
}
}