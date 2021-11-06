/* eslint-disable @next/next/no-img-element */
import {useEffect } from "react";
import Link from "next/link";
import {MobileIcon} from "./MobileIcon";
import {Toggle} from './Toggle'
import {urlFor } from '../../lib/dataQueries'
import {useHeader} from '../../lib/store'


export const Nav: React.FC<any> = () => {
  const siteLogo = useHeader(state => state.siteLogo)
  const setSiteLogo = useHeader(state => state.setSiteLogo)
  const menuItems = useHeader(state => state.menuItems)
  const setMenuItems = useHeader(state => state.setMenuItems)

  useEffect(() => {
    setSiteLogo()
    setMenuItems()
  }, [setMenuItems, setSiteLogo])
  
  return (
    <>
      <header className="h-24 flex items-center w-full bg-transparent z-40 fixed backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href={"/"} passHref>
            <div className="uppercase  font-black text-3xl flex items-center font-archivo">
                  <img src={urlFor(siteLogo?.icon).url()} width={`42px`} height={`40px`} alt={siteLogo?.name} />
              <div className="flex flex-col">
                <span className="text-md ml-4 mt-1 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  {siteLogo?.abbreviation}
                </span>
                <span className="font-mitr capitalize font-light text-xs bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  {siteLogo?.name}
                </span>
              </div>
            </div>
          </Link>
          <div className="flex items-center">
            <nav className=" text-gray-800 dark:text-white uppercase text-normal lg:flex items-center hidden">
              {menuItems.map((item) => (
                <div
                  className="py-2 px-6 flex hover:text-gray-400"
                  key={item?._id}
                >
                  <Link
                    href={item?.link.current}
                  >
                    {item?.name}
                  </Link>
                </div>
              ))}
            </nav>
            <Toggle />
            <MobileIcon />
          </div>
        </div>
      </header>
    </>
  );
};

