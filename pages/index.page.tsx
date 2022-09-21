import { homePage} from '../lib/dataQueries'
import { GetStaticProps } from 'next'
import LOADER from '../lib/loader'
import React from 'react'

const Homepage = ({ data }) => {
  const HOME = React.lazy(() => import('../components/HomePageComponents/Index'))
  return (
        <React.Suspense fallback={<LOADER />}>
          <HOME data={data} />
        </React.Suspense>
    )
}
export default Homepage;

export const getStaticProps: GetStaticProps = async () => {
  const data = await homePage
  return {
    props: {
      data
    }
  }
}