import Image from 'next/image'
import { useHome } from '../../lib/store'
import {urlFor} from '../../lib/dataQueries'
import React, { useEffect } from 'react'

export default function TechLogos() {
    const homeTechStack = useHome(state => state.homeTechStack)
    const setHomeTechStack = useHome(state => state.setHomeTechStack)
    useEffect(() => {
        setHomeTechStack()
    }, [homeTechStack, setHomeTechStack]) 
    
    const Icons = homeTechStack[0]?.section.logo_icon

    return (
        <div className="container h-96  overflow-scroll shadow-2xl p-4 md:mt-8">
            <div>
                <div className="mt-8 grid grid-cols-3 gap-2 md:grid-cols-3 lg:mt-0 lg:grid-cols-3">
                    {Icons?.map(({icon, color, _key}) => (
                        <div className={`col-span-1 flex justify-center py-4 px-4 ${color} rounded-lg bg-opacity-10`} key={_key}>
                            <Image src={urlFor(icon).url()} width={100} height={80} className="" alt={_key} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="m-8 text-gray-600 justify-center text-center">
                <h3 className="text-lg font-semi-bold text-purple-500">{homeTechStack[0].section.logo_text[0]?.children[0].text}</h3>
                <p className="text-purple-400 text-sm">{homeTechStack[0].section.logo_text[1]?.children[0].text}</p>
            </div>
        </div>

    );
}