import React from 'react';
type Heading = {
    secondaryHeading: string;
    primaryHeading: string;
}
const WorkHeroSection = (props:Heading) => {
    return (
        <>
            <div className="flex z-20 items-center mt-40">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center relative py-4 ">
                    <div className="flex flex-col">
                        <p className="font-mitr text-3xl my-6 text-center dark:text-white">
                            {props.primaryHeading}
                        </p>
                        <h2 className="max-w-3xl font-archivo text-4xl md:text-6xl font-bold mx-auto text-center py-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                            {props.secondaryHeading}
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkHeroSection