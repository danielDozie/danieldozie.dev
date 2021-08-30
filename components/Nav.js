import React from 'react'
import Image from 'next/image'
import {Toggle} from '../components/Toggle'
export const Nav = () => {
    return (
    <>
    <header className="h-24 flex items-center w-full bg-transparent z-40 fixed backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="uppercase text-gray-800 dark:text-white font-black text-3xl flex items-center font-archivo ">
                <Image className="border-2" src={'/assets/images/headIcon.svg'} height={40} width={42} alt={'logo'}/>
                <span className="text-md ml-1 mt-1 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                    Badt-0-men
                </span>
            </div>
            <div className="flex items-center">
                <nav className=" text-gray-800 dark:text-white uppercase text-normal lg:flex items-center hidden">
                    <a href="#" className="py-2 px-6 flex hover:text-gray-400">
                        Works
                    </a>
                    <a href="#" className="py-2 px-6 flex hover:text-gray-400">
                        Resume
                    </a>
                    <a href="#" className="py-2 px-6 flex hover:text-gray-400">
                        Services
                    </a>
                    <a href="#" className="py-2 px-6 flex hover:text-gray-400">
                        Blog
                    </a>
                    <a href="#" className="py-2 px-6 flex hover:text-gray-400">
                        Contact
                    </a>
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
