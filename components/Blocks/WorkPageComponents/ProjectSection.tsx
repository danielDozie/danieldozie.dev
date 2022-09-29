/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { urlFor } from '../../../lib/dataQueries'


type ITEMS = {
  _id: string,
  description: string,
  image: string,
  tags: any,
  title: string,
  link: string,
  content: any,
}

type PROJECTPROPS = {
  projects: ITEMS[],
}

export default function ProjectSection(props: PROJECTPROPS) {
  const data = props.projects
  return (<>
    {data.map((item: ITEMS) => <div key={item._id}>
      <div className="relative mt-20 lg:my-20 lg:mx-12">
        <div className="h-56 sm:h-72 bg-gray-50 dark:bg-gray-700 lg:absolute lg:left-0 lg:h-full lg:w-1/2 lg:rounded-3xl">
          <img
            className="object-contain w-full h-full lg:rounded-xl"
            src={urlFor(item.image).url()}
            alt="screenshot"
          />
        </div>
        <div className="relative px-4 py-8 mx-auto max-w-7xl sm:py-12 sm:px-6 lg:py-16">
          <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
            <div>
              <div className="flex gap-2 text-gray-500 dark:text-gray-300 gap">
                {item.tags.map((tag: any, index: number) =>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800" key={index}>
                    <svg className="-ml-1 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx={4} cy={4} r={3} />
                    </svg>
                    {tag}
                  </span>
                )}
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-500 dark:text-gray-300 sm:text-4xl">
              {item.title}
            </h2>
            <p className="mt-6 text-lg text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
            <div className="mt-8 overflow-hidden">
              <div className="flex flex-wrap -mx-8 -mt-8">
                <div className="flex flex-col gap-8 px-8 pt-8 md:flex-row">
                  <div className="w-full md:w-3/4">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <p className="order-1 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 sm:text-3xl">Live Website </p>
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs font-light text-indigo-400">Built with</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item?.content[0]?.children[0]?.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/5 mb-16 ml-4 border-4 rounded-lg lg:block lg:max-w-2xl lg:mx-auto lg:mb-2" />
    </div>)}
    <br/>
 </> )
}
