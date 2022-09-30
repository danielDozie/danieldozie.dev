import Head from 'next/head';
import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { workPageQuery, allwork } from '../../../lib/dataQueries';
import client from '../../../lib/sanityClient';
import ProjectSection from './ProjectSection';
import WorkHeroSection from './WorkHeroSection';
import { PaginationContext } from '../../../contexts/paginationContext'

interface LOAD_MORE_PAGINATION {
    initPaginateValue: number,
    endPaginateValue: number,
    loadMorePagination: () => void
}

export default function WORK() {

    const { initPaginateValue, endPaginateValue, loadMorePagination }: LOAD_MORE_PAGINATION = React.useContext(PaginationContext)
    
    const [isLoading, setIsLoading] = React.useState(false);
    const [isButtonDisplayed, setIsButtonDisplayed] = React.useState(true);
    const btnRef = React.useRef(null)
    const [project, setProject] = React.useState([])
    const [projectCount, setProjectCount] = React.useState(endPaginateValue)
    React.useEffect(() => {
        const workPage = client.fetch(workPageQuery, { initPaginateValue: initPaginateValue, endPaginateValue: endPaginateValue })
        const result = async () => {
            const res = await workPage
            const data = res
            setProject(data)
        }
        result()
    }, [initPaginateValue, endPaginateValue])
    
    const loadMoreHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            loadMorePagination()
            setProject(project)
            setIsLoading(false)
        }, 500)
    }

    const projects = project.slice(1) //slice out the first item as it is the page title elements
    React.useEffect(() => {
        let isLoaded = true
        if (isLoaded) {
            const AllWork = client.fetch(allwork)
            const data = async () => {
                const res = await AllWork
                const result = res
                setProjectCount(result)
            }

            if (endPaginateValue > projectCount) {
                setIsButtonDisplayed(false)
                const btn = btnRef.current
                btn.style.display = 'none'
            }
            data()
        }
        //cleanup
        return () => {
            isLoaded = false
        }
    }, [endPaginateValue, projectCount, projects])

    return (
        <>
            <Head>
                <title>{process.env.siteTitle + " - " + project[0]?.title}</title>
                <meta name={project[0]?.titele} content={project[0]?.description}></meta>
            </Head>
            <WorkHeroSection primaryHeading={project[0]?.section[0]?.primaryHeading} secondaryHeading={project[0]?.section[0]?.secondaryHeading} />
            <ProjectSection projects={projects} />
            <div className="max-w-7xl mx-auto text-center">
                <button type="button" ref={btnRef} className="justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled" onClick={loadMoreHandler}>
                    {isLoading ? <Loading /> : 'Load More'}
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