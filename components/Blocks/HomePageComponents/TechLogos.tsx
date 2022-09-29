import Image from 'next/image'
import {urlFor} from '../../../lib/dataQueries'

type TECHLOGO = {
    logo_text: any[]
    logo_icon: []
}

type DATA = {
    data: TECHLOGO
}

export default function TechLogos({data}:DATA):React.ReactElement {
    const { logo_icon, logo_text }:TECHLOGO = data;

    return (
        <div className="container h-96  overflow-scroll shadow-2xl p-4 md:mt-8">
            <div>
                <div className="mt-8 grid grid-cols-3 gap-2 md:grid-cols-3 lg:mt-0 lg:grid-cols-3">
                    {logo_icon?.map(({icon, icon_name, color, _key}) => (
                        <div className={`col-span-1 flex justify-center py-4 px-4 ${color} rounded-lg bg-opacity-10`} key={_key}>
                            <span className="icons grayscale hover:grayscale-0">
                                <div className="flex flex-col w-[50%] mx-auto justify-center items-center">
                                    <Image src={urlFor(icon).url()} width={80} height={80} alt={_key} />
                                    <p className="mt-2 text-center text-[10px] w-full font-regular text-gray-700 dark:text-gray-400">
                                        {icon_name}
                                    </p></div>
                            </span>
                            
                        </div>
                    ))}
                </div>
            </div>
            <div className="m-8 text-gray-600 justify-center text-center">
                <h3 className="text-lg font-semi-bold text-purple-500">{logo_text[0].children[0].text}</h3>
                <p className="text-purple-400 text-sm">{logo_text[1].children[0].text}</p>
            </div>
        </div>
    );
}
