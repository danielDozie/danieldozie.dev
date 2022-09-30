import React from 'react'
import { PaginationProvider } from '../contexts/paginationContext'
import LOADER from '../lib/loader'

export default function Work(): JSX.Element {
  const WORK = React.lazy(() => import('../components/Blocks/WorkPageComponents/Index'))
  return (
    <React.Suspense fallback={<LOADER />}>
      <PaginationProvider>
        <WORK />
      </PaginationProvider>
    </React.Suspense>
  )
}