import TechLogos from './TechLogos'
import {PortableText} from '@portabletext/react'
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
            <div className="px-4 py-12 mx-auto mt-10 max-w-7xl sm:px-6 lg:py-16 lg:px-8">
            <div className="flex flex-col justify-center p-8 mb-8">
                <h1 className="text-4xl font-semibold text-center text-gray-600 uppercase font-archivo dark:text-white">{props.title}</h1>
                <p className="pt-4 text-xl text-center text-gray-500  dark:text-gray-300">{props.subtitle}</p>
            </div>
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div>
                        <PortableText value={content} components={techSectionSerializer} />
                        <div className="mt-8 sm:flex">
                            <div className="rounded-md shadow">
                                <a
                                    href={props.first_button_url}
                                    className="flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
                                >
                                    {props.first_button_text}
                                </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a
                                    href={props.second_button_url}
                                    className="flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200"
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

