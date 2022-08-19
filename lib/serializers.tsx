/* eslint-disable react/display-name */
import React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';


export const homeSerializers: any = {
  block: {
    normal: ({ children }) => <p className="text-gray-500 dark:text-gray-200">
      {children}
    </p>,
    h4: ({ children }) => <h4 className="mt-2 text-3xl font-extrabold leading-8 text-left text-transparent font-archivo sm:text-3xl sm:leading-9 bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-400 to-yellow-600">
      {children}
    </h4>,
    h5: ({ children }) => <h5 className="my-8 text-base font-semibold leading-6 text-indigo-500 uppercase md:my-4">
      {children}
    </h5>
  },
  list: {
    bullet: ({ children }) => <ul className="gap-6 mt-8 md:grid md:grid-cols-2">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mt-6 lg:mt-0">
      <div className="flex">
        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
            </path>
          </svg>
        </span><span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">{children}</span>
      </div>
    </li>
  }
};


export const techSectionSerializer: any = {
  block: {
    normal: ({ children }) => <p className="max-w-3xl mt-3 text-lg text-gray-500 dark:text-gray-200">
      {children}
    </p>,
    h2: ({ children }) => <h2 className="mt-20 text-3xl font-extrabold text-transparent font-archivo sm:text-4xl bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-purple-800 md:mt-0">
      {children}
    </h2>
  }
};

export const homeBlogSerializer: any = {
  block: {
    normal: ({ children }) => <p className="pt-2 text-sm text-pink-500 dark:text-gray-300">
      {children}</p>,
    h1: ({ children }) => <h1 className="mt-20 text-4xl font-semibold text-left text-transparent font-archivo bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-400 to-yellow-800 md:mt-0">
      {children}
    </h1>,
    default: ({ children }) => <h1 className="mt-20 text-4xl font-semibold text-left text-transparent font-archivo bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-400 to-yellow-800 md:mt-0">
      {children}
    </h1>
  },
}

export const aboutMeSerializer: any = {
  custom_block: {
    normal: ({ children }) => <p>{children}</p>,
    strong: ({ children }) => <strong className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{children}</strong>,
  },
};


export const blogSerializer: any = {
  types: {
    code: ({ value }) => <div className="md:w-4/6 px-8 py-2 mx-auto text-sm">
      <SyntaxHighlighter language={value.language} style={atomDark} wrapLongLines={true}>
        {value.code}›
      </SyntaxHighlighter>
    </div>,
  },
  block: {
    normal: ({ children }) => <p className="px-8 py-2 text-sm text-left text-gray-600 lg:px-60 font-mitr dark:text-gray-300">
      {children}
    </p>,
    h1: ({ children }) => <h1 className="px-8 pt-8 text-xl font-semibold text-left text-gray-600 font-archivo lg:px-60 bg-clip-text dark:text-gray-300">
      {children}
    </h1>,
    h2: ({ children }) => <h2 className="px-8 pt-8 mt-2 text-xl font-extrabold text-gray-600 font-archivo lg:px-60 bg-clip-text dark:text-gray-300 to-purple-800 md:mt-0">
      {children}
    </h2>,
    h3: ({ children }) => <h3 className="px-8 mt-2 text-xl font-extrabold text-gray-600 font-archivo lg:px-60 bg-clip-text dark:text-gray-300 md:mt-0">
      {children}
    </h3>,
    h4: ({ children }) => <h4 className="px-8 mt-2 text-xl font-extrabold text-gray-600 font-archivo lg:px-60 bg-clip-text dark:text-gray-300 md:mt-0">
      {children}
    </h4>,
    h5: ({ children }) => <h5 className="px-8 mt-2 text-lg font-extrabold text-gray-600 font-archivo lg:px-60  bg-clip-text dark:text-gray-300 md:mt-0">
      {children}
    </h5>,
    h6: ({ children }) => <h6 className="px-8 mt-2 text-base font-extrabold text-gray-600 font-archivo lg:px-60 bg-clip-text dark:text-gray-300 md:mt-0">
      {children}
    </h6>,
    
  },
  marks: {
    strong: ({ children }) => <strong className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{children}</strong>,
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'} className="text-blue-500 cursor-pointer hover:text-gray-900 dark:hover:text-gray-200">
          {children}
        </a>
      )
    },
  },
  list: {
    bullet: ({ children }) => <ul className="gap-6 mx-8 mt-2 md:mx-60">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mt-2 lg:mt-2">
      <div className="flex">
        <span className="flex items-center justify-center flex-shrink-0 w-4 h-4 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
          <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
            </path>
          </svg>
        </span>
        <span className="ml-2 md:-mt-1 text-sm font-normal text-gray-500 dark:text-gray-200">{children}</span>
      </div>
    </li>
  },
};


export const servicesSerializer: any = {
  block: {
    normal: ({ children }) => <p className="py-2 font-normal text-center text-gray-600 lg:px-60 font-mitr dark:text-gray-300">
      {children}
    </p>,
  }
}

export const servicesDetailsSerializer: any = {
  block: {
    normal: ({ children }) => <p className="text-sm text-gray-500 lg:text-base dark:text-gray-300">
      {children}
    </p>
  }
}