import React, { Key } from 'react'
import {urlFor} from '../../lib/dataQueries'
interface Props {
  [x: string]: Key
  _id: string,
  description: string,
  image: string,
  tags: any,
  title: string,
  projects: any,
  link: string,
}

export default function ProjectSection(props: Props) {
  const data = props.projects
  return (<>
    {data.map((item: Props) => (
    <><div className="relative mt-16 lg:my-20 lg:mx-12" key={item._id}>
        <div className="h-56 sm:h-72 bg-gray-50 dark:bg-gray-700 lg:absolute lg:left-0 lg:h-full lg:w-1/2 lg:rounded-3xl">
          <img
            className="h-full w-full object-contain lg:rounded-xl"
            src={urlFor(item.image).url()}
            alt="screenshot"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
          <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
            <div>
              <div className="flex text-gray-500 dark:text-gray-300 gap gap-2">
                {item.tags.map((tag: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal) => (
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800" key={Math.ceil(Math.random() * Date.now()).toString()}>
                    <svg className="-ml-1 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx={4} cy={4} r={3} />
                    </svg>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-500 dark:text-gray-300 sm:text-4xl">
              {item.title}
            </h2>
            <p className="mt-6 text-lg text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
            <div className="mt-8 overflow-hidden">
              <dl className="-mx-8 -mt-8 flex flex-wrap">
                <div className="flex flex-col px-8 pt-8">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <dd className="order-1 text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 sm:text-3xl">Visit Website </dd>
                  </a>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/5 ml-4 mb-16 lg:block lg:max-w-2xl lg:mx-auto lg:mb-2 border-4 rounded-lg"/>
      </>
    ))}
    <br/>
 </> )
}
