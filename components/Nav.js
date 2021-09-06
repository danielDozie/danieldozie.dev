import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Toggle } from '../components/Toggle'
import { Dialog } from '@headlessui/react';
import { Icon } from '@iconify/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const menuItems = [
    { name: 'About Me', href: '/about', current: true },
    { name: 'Resume', href: '/resume', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Contact', href: '/contact', current: false },
]

export const Nav = () => {

    return (
        <>
            <header className="h-24 flex items-center w-full bg-transparent z-40 fixed backdrop-filter backdrop-blur-lg">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href={'/'} passHref>
                        <div className="uppercase  font-black text-3xl flex items-center font-archivo">
                            <Image className="border-2" src={'/assets/images/headIcon.svg'} height={40} width={42} alt={'logo'} />
                            <div className="flex flex-col">
                                <span className="text-md ml-4 mt-1 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                                    C.D.E
                                </span>
                                <span className="font-mitr capitalize font-light text-xs bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">chidozie Daniel Eluchie</span>
                            </div>
                        </div>
                    </Link>
                    <div className="flex items-center">
                        <nav className=" text-gray-800 dark:text-white uppercase text-normal lg:flex items-center hidden">
                            {menuItems.map((item) => (
                                <div className="py-2 px-6 flex hover:text-gray-400" key={item.name}>
                                    <Link href={item.href} className={classNames(item.current ? 'text-gray-400' : '')} aria-current={item.current ? 'page' : undefined}>{item.name}</Link>
                                </div>
                            ))}
                        </nav>
                        <Toggle />
                        <MobileIcon />
                    </div>
                </div>
            </header>
        </>
    )
}



export const MobileIcon = () => {
    const [open, setOpen] = useState(false);
    const closeMenu = () => {
        setOpen(false)
    }
    const openMenu = () => {
        setOpen(true);
    }

    return (
        <>
            <Icon className="text-4xl text-gray-800 dark:text-gray-400 -mr-2" icon="carbon:overflow-menu-vertical" onClick={openMenu} />
            <Dialog as="div" open={open} onClose={closeMenu} className=" inset-0 h-screen w-full overflow-y-auto bg-transparent z-40 fixed backdrop-filter backdrop-blur-lg">
                <Dialog.Overlay />
                <Dialog.Title>
                    <div>
                        <div className="flex flex-row justify-between p-5 mt-2">
                            <div className="text-2xl font-mitir font-semibold text-gray-800 dark:text-gray-200">
                                <h1>Menu</h1>
                            </div>

                            <div>
                                <Icon className="text-4xl text-gray-800 dark:text-gray-200" icon="eva:close-fill" onClick={closeMenu} />
                            </div>
                        </div>
                        <div>
                            <div className="uppercase font-black text-3xl flex items-center font-archivo justify-center -mt-4">
                                <Image className="border-2" src={'/assets/images/headIcon.svg'} height={40} width={42} alt={'logo'} />
                                <div className="flex flex-col">
                                    <span className="text-md ml-4 mt-1 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                                        C.D.E
                                    </span>
                                    <span className="font-mitr capitalize font-light text-xs bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">chidozie Daniel Eluchie</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Title>
                <Dialog.Description>
                    <nav className="font-mitr text-gray-800 dark:text-gray-200 uppercase font-normal text-xl mt-8">
                        {menuItems.map(mobile => (
                            <div>
                            <div className="py-2 flex hover:text-gray-400 justify-center text-center align-center" key={mobile.name}>
                                <Link>
                                {mobile.name}
                                </Link>
                            </div>
                            </div>
                        ))}
                    </nav>
                </Dialog.Description> 
            </Dialog>
        </>)
}

