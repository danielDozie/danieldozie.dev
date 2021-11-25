/* eslint-disable @next/next/no-img-element */
import {useState, useEffect} from 'react'
import {logoAndMenu, urlFor} from '../../lib/dataQueries'
import { Dialog } from "@headlessui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const MobileIcon = () => {
  const [logo, setLogo] = useState({
    icon: '',
    name: '',
    abbreviation: '',
  })
  const [menu, setMenu] = useState([])
  useEffect(() => {
    const data = async() => {
     const result = await logoAndMenu
     const logo = result.Logo[0]
     const menu = result.Menu
      setLogo(logo)
      setMenu(menu)
    }
    data()
  },[setMenu, setLogo])

    const [open, setOpen] = useState(false);
    const closeMenu = () => {
      setOpen(false);
    };
    const openMenu = () => {
      setOpen(true);
    };
  
    return (
      <>
        <Icon
          className="text-4xl text-gray-800 dark:text-gray-400 -mr-2 md:hidden "
          icon="carbon:overflow-menu-vertical"
          onClick={openMenu}
        />
        <Dialog
          as="div"
          open={open}
          onClose={closeMenu}
          className=" inset-0 h-screen w-full overflow-y-auto bg-transparent z-40 fixed backdrop-filter backdrop-blur-lg"
        >
          <Dialog.Overlay />
          <Dialog.Title>
            <div>
              <div className="flex flex-row justify-between p-5 mt-2">
                <div className="text-2xl font-mitir font-semibold text-gray-800 dark:text-gray-200">
                  <h1>Menu</h1>
                </div>
  
                <div>
                  <Icon
                    className="text-4xl text-gray-800 dark:text-gray-200"
                    icon="eva:close-fill"
                    onClick={closeMenu}
                  />
                </div>
              </div>
              <div className="uppercase font-black text-3xl flex items-center font-archivo justify-center -mt-4">
                    <img src={urlFor(logo.icon).url()} width={`42px`} height={`40px`} alt={logo.name} />
                <div className="flex flex-col">
                  <span className="text-md ml-4 mt-1 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                    {logo.abbreviation}
                  </span>
                  <span className="font-mitr capitalize font-light text-xs bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 ml-4">
                    {logo.name}
                  </span>
                </div>
              </div>
            </div>
          </Dialog.Title>
          <Dialog.Description>
            <div className="font-mitr text-gray-800 dark:text-gray-200 uppercase font-normal text-xl mt-8">
                  
              {menu.map((mobileMenu) => (
                <div
                  onClick={closeMenu}
                  className="py-2 flex hover:text-gray-400 justify-center text-center align-center"
                  key={mobileMenu?._id}
                >
                    
                  <Link href={mobileMenu?.link.current}>{mobileMenu.name}</Link>
                </div>
              ))}
            </div>
          </Dialog.Description>
        </Dialog>
      </>
    );
  };
  