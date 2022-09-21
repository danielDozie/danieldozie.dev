import React from 'react'
import LOADER from '../lib/loader'

export default function Work(): JSX.Element {
  const WORK = React.lazy(() => import('../components/WorkPageComponents/Index'))
  return (
    <React.Suspense fallback={<LOADER />}>
      <WORK />
    </React.Suspense>
  )
}