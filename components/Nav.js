import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Toggle} from '../components/Toggle'
export const Nav = () => {
    return (
    <>
    <header className="h-24 flex items-center w-full bg-transparent z-40 fixed backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="uppercase  font-black text-3xl flex items-center font-archivo">
                <Image className="border-2" src={'/assets/images/headIcon.svg'} height={40} width={42} alt={'logo'}/>
                <div className="flex flex-col">
                <span className="text-md ml-4 mt-1 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                    C.D.E
                </span>
                <span className="font-mitr capitalize font-light text-xs bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">chidozie Daniel Eluchie</span>
                </div>
            </div>
            <div className="flex items-center">
                <nav className=" text-gray-800 dark:text-white uppercase text-normal lg:flex items-center hidden">
                    <div className="py-2 px-6 flex hover:text-gray-400">
                        <Link href={'#'} >Work</Link>
                    </div>

                    <div className="py-2 px-6 flex hover:text-gray-400">
                        <Link href={'#'} >Resume</Link>
                    </div>
                    <div className="py-2 px-6 flex hover:text-gray-400">
                        <Link href={'#'} >Services</Link>
                    </div>
                    <div className="py-2 px-6 flex hover:text-gray-400">
                        <Link href={'#'} >Projects</Link>
                    </div>
                    <div className="py-2 px-6 flex hover:text-gray-400">
                        <Link href={'#'} >Blog</Link>
                    </div>
                    <div className="py-2 px-6 flex hover:text-gray-400">
                        <Link href={'#'} >Contact</Link>
                    </div>
                </nav>
                <Toggle />
                <button className="lg:hidden flex flex-col ml-4">
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                </button>
            </div>
        </div>
    </header>

        </>
    )
}
