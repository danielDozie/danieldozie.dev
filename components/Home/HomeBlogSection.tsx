/* eslint-disable @next/next/link-passhref */
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import {PortableText} from '@portabletext/react'
import {homeBlogSerializer} from '../../lib/serializers'
import { urlFor } from "../../lib/dataQueries";
import moment from "moment";

interface HomeBlogSectionProps {
  block: []
  custom_blogs: {
    title: string;
    slug: { current: string };
    author: {fullname: string};
    excerpts: string;
    image: string;
    _createdAt: string;
    _id: string;
  }[];
}

export const HomeBlogSection = (props: HomeBlogSectionProps) => {
  
  const content = props.block
  const Blogs = props.custom_blogs
  
  return (
    <>
      <div className="h-full mx-auto max-w-7xl md:py-8 sm:px-6">
        <div className="flex flex-col justify-start mx-8 mb-4 md:mb-8 md:mx-0">
          <PortableText value={content} components={homeBlogSerializer} />
        </div>
        <div>
        {/* <h1 className={`font-archivo text-3xl font-extrabold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-purple-800 text-center`}>Featured</h1> */}
          <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:mt-0 lg:grid-cols-2 md:p-10 ">
              {Blogs.map(({ author,excerpts, image, slug, title, _createdAt, _id }) => (
                <div
                  className={`flex flex-col md:flex-row md:justify-between py-4 px-4 rounded-lg shadow-2xl  dark:border-gray-600 bottom-2`} key={_id}>
                  <div className="flex w-full h-full mb-4 mr-8 bg-center ">
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
                  <div className="flex flex-col w-full ">
                    <h1 className="text-sm font-semibold text-transparent font-mitr md:text-lg bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                      <a href={`/blog/`+ slug.current}>
                      {title.substr(0, 45)}{" []..."}
                      </a>
                    </h1>
                    <p className="mb-5 text-sm font-light text-gray-700 font-mitr dark:text-gray-200">
                      {" "}
                      {excerpts.substr(0, 120)}{""}
                      <a href={`/blog/`+ slug.current}><span className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ">... Read More</span></a>
                    </p>
                    <hr />
                    <div className="flex justify-between mt-2 text-xs font-thin">
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
              <h1 className={`font-archivo font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-purple-800 mt-6 text-center lg:text-left lg:pl-10 cursor-pointer`}>
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
