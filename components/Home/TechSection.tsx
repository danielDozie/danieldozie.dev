import React, { useEffect } from 'react'
import { useHome } from '../../lib/store'
import TechLogos from './TechLogos'
const BlockContent = require('@sanity/block-content-to-react')
import {techSectionSerializer} from '../../lib/serializers'

export const TechSection:React.FC = () => {
    const homeTechStack = useHome(state => state.homeTechStack)
    const setHomeTechStack = useHome(state => state.setHomeTechStack)
    useEffect(() => {
        setHomeTechStack()
    }, [homeTechStack, setHomeTechStack])
    const content = homeTechStack[0]?.section.content

    return (
        <>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-10">
            <div className="flex flex-col justify-center mb-8 p-8">
                <h1 className="font-archivo text-4xl  font-semibold uppercase text-gray-600 dark:text-white text-center">{homeTechStack[0]?.section.title}</h1>
                <p className=" text-center text-gray-500 text-xl pt-4 dark:text-gray-300">{homeTechStack[0]?.section.subtitle}</p>
            </div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center flex flex-col-reverse">
                    <div>
                        <BlockContent blocks={content} serializers={techSectionSerializer} />
                        <div className="mt-8 sm:flex">
                            <div className="rounded-md shadow">
                                <a
                                    href={homeTechStack[0].section.button[0]?.button_url}
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    {homeTechStack[0]?.section.button[0]?.button_text}
                                </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a
                                    href={homeTechStack[0]?.section.button[1]?.button_url}
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                                >
                                    {homeTechStack[0].section.button[1]?.button_text}
                                </a>
                            </div>
                        </div>
                    </div>

                    <TechLogos />
                </div>
            </div>
        </>
    )
}

