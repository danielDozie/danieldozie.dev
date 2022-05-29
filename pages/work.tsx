import React, { useEffect, useRef, useState } from 'react'
// import { GetStaticProps } from 'next'
import Head from 'next/head'
import ProjectSection from '../components/Work/ProjectSection'
import WorkHeroSection from '../components/Work/WorkHeroSection'
import { allwork, workPageQuery } from '../lib/dataQueries'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import client from '../lib/sanityClient'
import usePageStore from '../store/store'

export default function Work():JSX.Element {
  //setting my app states locally on here and globally on the store //Zustand
  const[isLoading, setIsLoading] = useState(false);
  const [isButtonDisplayed, setIsButtonDisplayed] = useState(true);
  const btnRef = useRef(null)
  const [project, setProject] = useState([])
  const initPaginateValue = usePageStore(state => state.initPaginateValue)
  const endPaginateValue = usePageStore(state => state.endPaginateValue)
  const loadMorePaginateValue = usePageStore(state => state.loadMorePaginateValue)
  const [projectCount, setProjectCount] = useState(endPaginateValue)
  
  //using the inbuilt useEffect hook to fetch the data
  useEffect(() => {
    const workPage = client.fetch(workPageQuery, {initPaginateValue: initPaginateValue, endPaginateValue: endPaginateValue})
    const result = async() => {
    const res = await workPage
    const data = res
      setProject(data)
    }
    result()
  }, [initPaginateValue, endPaginateValue])
  
  const loadMoreHandler = (event: any) => {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      loadMorePaginateValue()
      setProject(project)
      setIsLoading(false)
    },500)

  }
  
  const projects = project.slice(1) //slice the first item as it is the page title elements
  useEffect(() => {
     const AllWork = client.fetch(allwork)
     const data =  async() => {
     const res = await AllWork
     const result = res
     setProjectCount(result)
    }

    if(endPaginateValue > projectCount) {
      setIsButtonDisplayed(false)
      const btn = btnRef.current
      btn.style.display = 'none'
    }
      data()
    }, [projects])
  
  return (
    <>
      <Head>
          <title>{process.env.siteTitle} - {project[0]?.title}</title>
          <meta name={project[0]?.titele} content={project[0]?.description}></meta>
      </Head>
      <WorkHeroSection primaryHeading={project[0]?.section[0]?.primaryHeading} secondaryHeading={project[0]?.section[0]?.secondaryHeading} />
      <ProjectSection projects={projects}/>
      <div className="max-w-7xl mx-auto text-center">
          <button type="button" ref={btnRef} className="justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled" onClick={loadMoreHandler}>
                  {isLoading ? <Loading/> : 'Load More'}
                  {isButtonDisplayed}
          </button>
      </div>
            
    </>
  )
}


export function Loading() {
  return (
    <div className="flex">
      <AiOutlineLoading3Quarters size="17" className="animate-spin mr-2" />
      <p>Loading...</p>
    </div>
  )
}