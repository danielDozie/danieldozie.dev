import React from 'react'
import {blog as BlogPosts} from '../../lib/dataQueries'
import { GetStaticPaths, GetStaticProps } from 'next'
import LOADER from '../../lib/loader'

export default function Index({ blog }) {
    const SLUG = React.lazy(() => import('../../components/BlogPageComponents/Slug'))
    return (
        <React.Suspense fallback={<LOADER />}>
            <SLUG blog={blog} />
        </React.Suspense>
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


