/* eslint-disable @next/next/link-passhref */
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import BlockContent from '@sanity/block-content-to-react'
import {homeBlogSerializer} from '../../lib/serializers'
import { urlFor } from "../../lib/dataQueries";
import moment from "moment";

interface HomeBlogSectionProps {
  block: any;
  custom_blogs: any;
}

export const HomeBlogSection = (props: HomeBlogSectionProps) => {
  
  const content = props.block
  const Blogs = props.custom_blogs
  
  return (
    <>
      <div className="max-w-7xl mx-auto md:py-8 sm:px-6 h-full">
        <div className="flex flex-col justify-start mb-4 md:mb-8 mx-8 md:mx-0">
          <BlockContent blocks={content} serializers={homeBlogSerializer} />
        </div>
        <div>
        {/* <h1 className={`font-archivo text-3xl font-extrabold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-purple-800 text-center`}>Featured</h1> */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-0 lg:grid-cols-2  p-4 md:p-10 ">
            
              {Blogs.map(({ author,excerpts, image, slug, title, _createdAt, _id }) => (
                <div
                  className={`flex flex-col md:flex-row md:justify-between py-4 px-4 rounded-lg shadow-2xl  dark:border-gray-600 bottom-2`} key={_id}>
                  <div className="flex h-full bg-center w-full mr-8 mb-4 ">
                    <Link href={`/blog/${slug.current}`}>
                    <Image
                      src={urlFor(image).url()}
                      width={500}
                      height={"300px"}
                      className="rounded-lg"
                      alt={'image'}
                    />
                    </Link>
                  </div>
                  <div className="w-full flex flex-col ">
                    <h1 className="font-mitr font-semibold text-sm md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                      <a href={`/blog/`+ slug.current}>
                      {title.substr(0, 45)}{" []..."}
                      </a>
                    </h1>
                    <p className="font-mitr font-light text-sm mb-5 text-gray-700 dark:text-gray-200">
                      {" "}
                      {excerpts.substr(0, 120)}{""}
                      <a href={`/blog/`+ slug.current}><span className="text-xs bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 ">... Read More</span></a>
                    </p>
                    <hr />
                    <div className="flex text-xs font-thin mt-2 justify-between">
                      <p className="text-gray-700 dark:text-gray-300">
                        Published:{" "}
                        <span className="text-pink-500">{moment(_createdAt).format('MMM. YYYY')}</span>
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        Author: <span className="text-pink-500">{author.fullname}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link href={`/blog`}>
              <h1 className={`font-archivo font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-purple-800 mt-6 text-center lg:text-left lg:pl-10`}>
                View all blog posts...
                </h1>
              </Link>
          </div>
        </div>
        <div className="justify-center text-center md:pt-16">
        </div>
    </>
  );
};
