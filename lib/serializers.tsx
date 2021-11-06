/* eslint-disable react/display-name */
import React from 'react';
export const homeSerializers = {
    types: {
        block: (props: { node: { style: any; }; children: {}; }) => {
            const style = props.node.style
            switch(style){
              case "normal":
                return (
                  <p className="text-gray-500 dark:text-gray-200">
                      {props.children}
                  </p>
              );
              case "h4":
                return (
                  <h4 className="font-archivo text-3xl font-extrabold mt-2 text-left leading-8 sm:text-3xl sm:leading-9  bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-400 to-yellow-600">
                      {props.children}
                  </h4>
              );
              case "h5":
                return (
                  <h4 className="text-base leading-6 text-indigo-500 font-semibold uppercase my-8 md:my-4">
                      {props.children}
                  </h4>
              );
              case "default":
                  return <p>{props.children}</p>
            }
          },
        },
          list: (props: { type: string; children: {}; }) =>
          props.type === "bullet" ? (
            <ul className="mt-8 md:grid md:grid-cols-2 gap-6">{props.children}</ul>
          ) : (
            <ol>{props.children}</ol>
          ),
        listItem: (props: { type: string; children: {}; }) =>
          (props.type === "bullet" ? '' : (
            <li className="mt-6 lg:mt-0">
              <div className="flex">
                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 dark:bg-transparent">
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                </path>
            </svg>
            </span><span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">{props.children}</span>
              </div>
            </li>
          )),


}

export const techSectionSerializer = {
  types: {
    block: (props: { node: { style: any; }; children: {}; }) => {
      const style = props.node.style
      switch(style){
        case "normal":
          return (
            <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-200">
                {props.children}
            </p>
        );
        case "h2":
          return (
            <h2 className="font-archivo text-3xl font-extrabold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-purple-800 mt-20 md:mt-0">
                {props.children}
            </h2>
        );
        case "default":
            return <p>{props.children}</p>
      }
    },
  },
  }

  export const homeBlogSerializer = {
    types: {
      block: (props: { node: { style: any; }; children: {}; }) => {
        const style = props.node.style
        switch(style){
          case "normal":
            return (
              <p className="text-pink-500 text-sm pt-2 dark:text-gray-300">
                  {props.children}
              </p>
          );
          case "h1":
            return (
              <h1 className="font-archivo text-4xl  font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-400 to-yellow-800 mt-20 md:mt-0">
                  {props.children}
              </h1>
          );
          case "default":
              return <p>{props.children}</p>
        }
      },
    },
    }
