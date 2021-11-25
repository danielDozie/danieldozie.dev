/* eslint-disable react/display-name */
import Image from 'next/image'
const BlockContent = require('@sanity/block-content-to-react')
import {homeSerializers} from '../../lib/serializers'
import {urlFor} from '../../lib/dataQueries'

type Props = {
    title: string
    left_image: string | null
    content: any
}
export const WorkSection = (props: Props) => {
    const content = props.content
    return (
        <div className="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
            <div className="relative">
            <div className="flex justify-center mt-10 p-4 md:p-8">
                <h1 className="font-archivo text-3xl font-semibold uppercase text-gray-600 dark:text-white text-center">{props.title}</h1>
            </div>
                <div className="flex flex-col-reverse lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="lg:col-start-2 lg:max-w-2xl ml-auto text-center md:text-left">
                        <BlockContent blocks={content} serializers={homeSerializers} />                        
                    </div>
                    <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                        <div className="relative space-y-4">
                            <div className="flex items-end justify-center  space-x-4">
                                {props.left_image && (
                                    <Image className="rounded-lg shadow-lg w-full md:w-56" width={500} height={500} src={urlFor(props.left_image).url()} alt="left-image" />
                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}