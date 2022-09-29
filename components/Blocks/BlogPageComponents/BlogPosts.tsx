import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../../lib/dataQueries'


export const BlogPosts = (props: { data: { author: any, excerpts: any, image: any, slug: any, title: any, _createdAt: any, _id: any }[] }) => {
    return (
        <>
      <div className="max-w-5xl mx-auto md:py-8 sm:px-6 lg:py-16 h-full">
        <div className="flex flex-col justify-start mb-4 md:mb-8 mx-8 md:mx-0">
        </div>
        <div>
          <div className="grid grid-cols-1 lg:gap-16 md:gap-8 md:grid-cols-1 lg:mt-0 lg:grid-cols-1  p-4 md:p-10">
              {props.data.map(({ author,excerpts, image, slug, title, _createdAt, _id }) => (
                <div className={`flex flex-col md:flex-row md:justify-between py-4 px-4 rounded-lg shadow-2xl  dark:border-gray-600 bottom-2 lg:my-0 my-7`}
                  key={_id}
                >
                  <div className="flex h-full bg-center lg:w-2/5 w-full mr-8 mb-4 ">
                    <Link href={`/blog/${slug.current}`} passHref>
                    <Image
                      src={urlFor(image).url()}
                      width={500}
                      height={300}
                      className="rounded-lg"
                      alt={'How'}
                    />
                    </Link>
                  </div>
                  <div className="w-full flex flex-col ">
                    <h1 className="font-mitr font-semibold text-sm md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 my-4">
                      <Link href={`/blog/`+ slug.current}>
                      {title}
                      </Link>
                    </h1>
                    <p className="font-mitr font-light text-sm mb-5 text-gray-700 dark:text-gray-200">
                      {" "}
                      {excerpts.substr(0, 300)}{""}
                      <Link href={`/blog/`+ slug.current} passHref><span className="text-xs bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 cursor-pointer">... Read More</span></Link>
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
          </div>
        </div>
        <div className="justify-center text-center py-8 lg:py-0 md:py-0 md:pt-16">
          <Link href={`/blog/`} passHref>
            <button className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Load More...
            </button>
          </Link>
        </div>
    </>
        )
}
