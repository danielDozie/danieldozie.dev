import React from 'react'
import {blog as BlogPosts, urlFor} from '../../lib/dataQueries'
import {PortableText} from '@portabletext/react'
import { blogSerializer} from '../../lib/serializers'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

export default function Index({blog}){
    const backgroundImage = {
        background: `url(${urlFor(blog.image).width(1200).height(600).url()})` +`,`+ `linear-gradient(31deg, rgba(31, 41, 55, 0.822), rgba(0, 0, 0, 0.781))`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
        backgroundRepeat: 'no-repeat',
    }
    const content = blog.content
    return (
        <>
        <Head>
            <title>{`${blog.title}`} - {process.env.siteTitle}</title>
        </Head>
            <div className="z-20 flex items-center mt-24 lg:h-96" style={backgroundImage}>
                <div className="container relative flex flex-col items-center justify-center px-6 py-4 mx-auto md:flex-row ">
                    <div className="flex flex-col">
                        <p className="my-6 text-3xl text-center text-transparent font-mitr bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        {`Blog`}
                        </p>
                        <h2 className="max-w-3xl py-2 mx-auto mb-8 text-3xl font-bold text-center text-transparent font-archivo md:text-4xl bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-400 to-yellow-600">
                        {blog.title}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="relative flex px-8 py-8 text-sm text-center text-gray-400 lg:px-60 font-mitr">
                    <p>Published by: {blog.author.fullname}</p>
                    {/* <p> Date: {blog._createdAt}</p> */}
                </div>
                <PortableText value={content} components={blogSerializer} />
            </div>
        </>
    )
}



export const getStaticPaths: GetStaticPaths = async () => {
    const blogs = await BlogPosts
    const paths = blogs.map((blog: { slug: { current: string } }) => ({
        params: { slug: blog.slug.current } 
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const blogs = await BlogPosts
    const data = blogs.find((blog: { slug: { current: string } }) => blog.slug.current === params.slug)
    return {
        props: {
            blog: data
        }
    }
}


