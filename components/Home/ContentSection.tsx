/* eslint-disable react/display-name */
import React, {useEffect} from 'react'
import Image from 'next/image'
import { useHome } from '../../lib/store'
const BlockContent = require('@sanity/block-content-to-react')
import {homeSerializers} from '../../lib/serializers'
import {urlFor} from '../../lib/dataQueries'
import axios from 'axios'

export const ContentSection:React.FC = () => {
    const homeWork = useHome(state => state.homeWork)
    const setHomeWork = useHome(state => state.setHomeWork)
    useEffect(() => {
        setHomeWork()
    }, [homeWork, setHomeWork]) 
    const content = homeWork[0]?.section.content
    
    // useEffect(() => {
    //     const Fn = async () => {
    //     const res =await axios.get(`http://localhost:3000/api/home`)
    //     .then(response => response.data);
    //     console.log(`This is coming from the API page:`)
    //     console.log(res)
    //     }
        
    //     Fn();
    // })
    
    return (
        <div className="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
            <div className="relative">
            <div className="flex justify-center mt-10 p-4 md:p-8">
                <h1 className="font-archivo text-3xl font-semibold uppercase text-gray-600 dark:text-white text-center">{homeWork[0]?.section.title}</h1>
            </div>
                <div className="flex flex-col-reverse lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="lg:col-start-2 lg:max-w-2xl ml-auto text-center md:text-left">
                        <BlockContent blocks={content} serializers={homeSerializers} />
                    </div>
                    <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                        <div className="relative space-y-4">
                            <div className="flex items-end justify-center  space-x-4">
                                {homeWork[0]?.section.left_image && (
                                    <Image className="rounded-lg shadow-lg w-full md:w-56" width={500} height={500} src={urlFor(homeWork[0]?.section.left_image).url()} alt="1" />
                                )
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function res(res: any) {
    throw new Error('Function not implemented.')
}

