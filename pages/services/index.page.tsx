import React from 'react';
import { servicesPage } from '../../lib/dataQueries';
import { GetStaticProps } from 'next';
import LOADER from '../../lib/loader';

export default function Services({ data }) {
  const SERVICES = React.lazy(() => import('../../components/Blocks/ServicesPageComponents/Index'))
  return (
    <React.Suspense fallback={<LOADER />}>
      <SERVICES data={data} />
    </React.Suspense>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await servicesPage
  return {
    props: {
      data
    }
  }
}