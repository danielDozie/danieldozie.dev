import React from 'react'
import Image from 'next/image'
import {urlFor} from '../../../lib/dataQueries'

type HEROSECTION = {
    primaryHeading: string,
    secondaryHeading: string,
    image: string,
}

type DATA = {
    data: HEROSECTION
}

export const HeroSection = ({data}:DATA) => {
    const { image, primaryHeading, secondaryHeading }: HEROSECTION = data;
    return (
        <>
            <div className="flex z-20 items-center mt-40">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative py-4 ">
                    <div className="flex">
                        {urlFor(image).url() && (
                            <Image role="image" className="" src={urlFor(image).url()} width={600} height={400} alt={'home-image'}/>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <p className="font-mitr text-3xl my-6 text-center dark:text-white">
                            {secondaryHeading}
                        </p>
                        <h2 className="max-w-3xl font-archivo text-5xl md:text-6xl font-bold mx-auto text-center py-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                            {primaryHeading}
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}
