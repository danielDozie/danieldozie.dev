import TechLogos from './TechLogos'
const BlockContent = require('@sanity/block-content-to-react')
import {techSectionSerializer} from '../../lib/serializers'

type Props = {
    title: string
    subtitle: string
    content: any
    first_button_text: string
    first_button_url: string
    second_button_text: string
    second_button_url: string
    logo_icon_large_text: string
    logo_icon_small_text: string
    logo_icon: any
}

export const TechSection = (props: Props) => {
    const content = props.content
    return (
        <>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-10">
            <div className="flex flex-col justify-center mb-8 p-8">
                <h1 className="font-archivo text-4xl  font-semibold uppercase text-gray-600 dark:text-white text-center">{props.title}</h1>
                <p className=" text-center text-gray-500 text-xl pt-4 dark:text-gray-300">{props.subtitle}</p>
            </div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center flex flex-col-reverse">
                    <div>
                        <BlockContent blocks={content} serializers={techSectionSerializer} />
                        <div className="mt-8 sm:flex">
                            <div className="rounded-md shadow">
                                <a
                                    href={props.first_button_url}
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    {props.first_button_text}
                                </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a
                                    href={props.second_button_url}
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                                >
                                    {props.second_button_text}
                                </a>
                            </div>
                        </div>
                    </div>
                    <TechLogos logo_icon_large_text={props.logo_icon_large_text} logo_icon_small_text={props.logo_icon_small_text} logo_icon={props.logo_icon} />
                </div>
            </div>
        </>
    )
}

