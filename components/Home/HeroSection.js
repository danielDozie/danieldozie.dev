import React from 'react'
import Image from 'next/image'
import {BGParticles} from '../BGParticles'

export const HeroSection = () => {
    return (
        <>
            <div className="flex z-20 items-center mt-40">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative py-4 ">
                
                    <div className="flex">
                        <Image className="" src={'/assets/images/homeImage.svg'} width={600} height={400} alt={'home-image'} />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-mitr text-3xl my-6 text-center dark:text-white">
                            Hey Chief, I&#x27;m Daniel 🤘
                        </p>
                        <h2 className="max-w-3xl font-archivo text-5xl md:text-6xl font-bold mx-auto text-center py-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                            I  Build digital products, brands, and experiences.
                        </h2>
                    </div>

                </div>
            </div>
        </>
    )
}
