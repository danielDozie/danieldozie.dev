 import Link from 'next/link';
import React from 'react';
import styles from '../../styles/custom.module.css'

type Props = {
        data: Array<Object>,
        title: string,
        description: string,
        link: string,
        slug: string | any,
        _id: string,
 }

export default function ServicesList(props: Props ) {
    const data = props.data
    const services = data.slice(1) //Remove the first element of the array as it returns ALL the page element from the data query string using the '+' in the groq query.
  return (
    <>
        <div className="max-w-7xl mx-auto md:py-8 sm:px-6 h-full">
        <div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:mt-0 lg:grid-cols-4 p-4 md:p-10 ">
              {services.map((service: Props)=> (
                <div
                  className={` flex flex-col py-4 px-4 rounded-lg shadow-2xl  dark:border-gray-600 bottom-2 `+ styles.blobImage} key={service._id}>
                    <div>
                      <Link href={`/services/`+ service.slug.current}>
                        <h1 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-400 to-yellow-800">{service.title}</h1>
                        </Link>
                    </div>
                    <div className="font-mitr text-xs text-left font-normal text-gray-600  dark:text-gray-300">
                        <p>{service.description}</p>
                    </div>
                    <div className="text-sm mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-purple-800 ">
                        <Link href={`/services/`+ service.slug.current} >{service.link}</Link>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  );
}
