import React from 'react';
type Heading = {
    title: string;
    description: string;
}
const DigitalHeroSection = (props:Heading) => {
    return (
        <>
            <div className="flex z-20 items-center mt-40">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center relative py-4">
                    <div className="flex flex-col">
                        <h2 className="max-w-3xl font-archivo text-4xl md:text-6xl font-bold mx-auto text-center py-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                            {props.title}
                        </h2>
                        <p className="lg:px-60 py-4 font-mitr text-center font-normal text-gray-600  dark:text-gray-300 mt-4">
                            {props.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DigitalHeroSection