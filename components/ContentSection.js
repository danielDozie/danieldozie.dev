import React from 'react'
import Image from 'next/image'
export const ContentSection = () => {
    return (
        <div className="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
            <div className="relative">
            <div className="flex justify-center mt-10 p-4 md:p-8">
                <h1 className="font-archivo text-3xl  font-semibold uppercase text-gray-600 dark:text-white text-center">My work process is simple <br/>and my approach is very straight forward</h1>
            </div>
                <div className="flex flex-col-reverse lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="lg:col-start-2 lg:max-w-2xl ml-auto text-center md:text-left">
                        <p className="text-gray-500 dark:text-gray-200">It is not always about knowing how to write some peice of codes </p>
                        <p className="text-base leading-6 text-indigo-500 font-semibold uppercase my-8 md:my-4">
                            Interactivity matters
                        </p>
                        <h4 className="font-archivo text-3xl font-extrabold mt-2 text-left leading-8 sm:text-3xl sm:leading-9  bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-400 to-yellow-600">
                            Interactivity between team members is the key I need to help you unlock some really cool stuffs relating to your business growth.
                        </h4>
                        <p className="mt-4 text-lg leading-6 text-gray-500 text-left dark:text-gray-300">
                            What I try to do is, try to work with you and your team to create a plan that will work for your business, your goals, and your <b>budget</b>. To me, there is no “<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">one-size-fits-all</span>” approach to the web and I am here to help you sift through the noise. <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">◎[▪‿▪]◎</span>
                        </p>
                        <ul className="mt-8 md:grid md:grid-cols-2 gap-6">
                            <li className="mt-6 lg:mt-0">
                                <div className="flex">
                                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        Quality first
                                    </span>
                                </div>
                            </li>
                            <li className="mt-6 lg:mt-0">
                                <div className="flex">
                                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        Open communication
                                    </span>
                                </div>
                            </li>
                            <li className="mt-6 lg:mt-0">
                                <div className="flex">
                                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                         Supports when needed
                                    </span>
                                </div>
                            </li>
                            <li className="mt-6 lg:mt-0">
                                <div className="flex">
                                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        Free tips to help you improve
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                        <div className="relative space-y-4">
                            <div className="flex items-end justify-center  space-x-4">
                                <Image className="rounded-lg shadow-lg w-full md:w-56" width={500} height={500} src="/assets/images/Multitasking.png" alt="1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
