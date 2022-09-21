/* eslint-disable @next/next/no-img-element */
import {useEffect, useState } from "react";
import Link from "next/link";
import {MobileIcon} from "./MobileMenu";
import {Toggle} from './Toggle'
import {logoAndMenu, urlFor } from '../../lib/dataQueries'

export const Nav  = () => {
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
  
  return (
    <>
      <header className="h-24 flex items-center w-full bg-transparent z-40 fixed backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href={"/"} passHref>
            <div className="uppercase font-black text-3xl flex items-center font-archivo cursor-pointer">
                  <img src={urlFor(logo.icon).url()} width={`42px`} height={`40px`} alt={logo.name} />
              <div className="flex flex-col">
                <span className="text-center text-md ml-4 mt-1 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  {logo.abbreviation}
                </span>
                <span className="text-center font-mitr capitalize font-light text-xs bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 ml-4">
                  {logo.name}
                </span>
              </div>
            </div>
          </Link>
          <div className="flex items-center">
            <div className=" text-gray-800 dark:text-white uppercase text-normal lg:flex items-center hidden">
              {menu.map((item) => (
                <div
                  className="py-2 px-6 flex hover:text-gray-400"
                  key={item?._id}
                >
                  <Link
                    href={`/`+item?.link.current}
                  >
                    {item?.name}
                  </Link>
                </div>
              ))}
              <div
                  className="rounded-md py-2 px-6 flex text-white bg-indigo-600 hover:bg-indigo-700">
                  <a
                  href="https://docs.google.com/document/d/1K39pFqgdNl9GqoKUnqoyY6vf1z82D5kLJflwy5xBuD0/edit?usp=sharing" target="_blank" rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </div>
            </div>
            <Toggle />
            <MobileIcon />
          </div>
        </div>
      </header>
    </>
  );
};
