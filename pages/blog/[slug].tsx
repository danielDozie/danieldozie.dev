import React from 'react'
import {blog as blogPosts, urlFor} from '../../lib/dataQueries'
import BlockContent from '@sanity/block-content-to-react'
import { blogSerializer} from '../../lib/serializers'
import { GetStaticPaths, GetStaticProps } from 'next'

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
            <div className="flex z-20 items-center mt-24 lg:h-96" style={backgroundImage}>
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center relative py-4 ">
                    <div className="flex flex-col">
                        <p className="font-mitr text-3xl my-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                        {`Blog`}
                        </p>
                        <h2 className="max-w-3xl font-archivo text-3xl md:text-4xl font-bold mx-auto text-center py-2 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-400 to-yellow-600">
                        {blog.title}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex lg:px-60 px-8 relative py-8 font-mitr text-center text-sm text-gray-400">
                    <p>Article published by: {blog.author.fullname}</p>
                    {/* <p> Date: {blog._createdAt}</p> */}
                </div>

                <div>
                    <BlockContent blocks={content} serializers={blogSerializer} />
                
                </div>    
            </div>
        </>
    )
}



export const getStaticPaths: GetStaticPaths = async () => {
    const blogs = await blogPosts
    const paths = blogs.map((blog: { slug: { current: string } }) => ({
        params: { slug: blog.slug.current } 
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const blogs = await blogPosts
    const data = blogs.find((blog: { slug: { current: string } }) => blog.slug.current === params.slug)
    return {
        props: {
            blog: data,
        }
    }
}


