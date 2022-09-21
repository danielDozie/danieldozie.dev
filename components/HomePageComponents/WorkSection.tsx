/* eslint-disable react/display-name */
import Image from 'next/image'
import {PortableText} from '@portabletext/react'
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
        <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
            <div className="relative">
            <div className="flex justify-center p-4 mt-10 md:p-8">
                <h1 className="text-3xl font-semibold text-center text-gray-600 uppercase font-archivo dark:text-white">{props.title}</h1>
            </div>
                <div className="flex flex-col-reverse lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="ml-auto text-center lg:col-start-2 lg:max-w-2xl md:text-left">
                        <PortableText value={content} components={homeSerializers} />                        
                    </div>
                    <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                        <div className="relative space-y-4">
                            <div className="flex items-end justify-center space-x-4">
                                {props.left_image && (
                                    <Image className="w-full rounded-lg shadow-lg md:w-56" width={500} height={500} src={urlFor(props.left_image).url()} alt="left-image" />
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