import React from 'react'
import Image from 'next/image'
export const TechSection = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-10">
            <div className="flex flex-col justify-center mb-8 p-8">
                <h1 className="font-archivo text-4xl  font-semibold uppercase text-gray-600 dark:text-white text-center">My Favorite Tech Stacks</h1>
                <p className=" text-center text-gray-500 text-xl pt-4 dark:text-gray-300">I am a <span className="font-bold">JAMSTACK</span> developer.</p>
            </div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center flex flex-col-reverse">
                    <div>
                        <h2 className="font-archivo text-3xl font-extrabold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-purple-800 mt-20 md:mt-0">
                            There&apos;s just alot of technologies out there. But I always opt for the best seamless solutions to make my client&apos;s life easier...
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-200">
                            Honestly, I am constantly evolving my offering to include the touch points of tomorrow, deploying new technologies to help brands engage strategically with customers. 
                        </p>
                        <div className="mt-8 sm:flex">
                            <div className="rounded-md shadow">
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Let&apos;s talk
                                </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                                >
                                    Checkout my projects
                                </a>
                            </div>
                        </div>
                    </div>

                    <TechLogos />
                </div>
            </div>
        </>
    )
}


export default function TechLogos() {
    const Icons = [
        {
            name: 'react',
            color: 'bg-purple-500',
            description: 'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
        },
        {
            name: 'next',
            color: 'bg-purple-300',
        },
        {
            name: 'vercel',
            color: 'bg-purple-500',
        },
        {
            name: 'node',
            color: 'bg-pink-500',
        },
        {
            name: 'mongodb',
            color: 'bg-pink-300',
        },
        {
            name: 'heroku',
            color: 'bg-pink-500',
        },
        {
            name: 'apollo',
            color: 'bg-green-500',
        },
        {
            name: 'graphql',
            color: 'bg-green-300',
        },
        {
            name: 'hasura',
            color: 'bg-green-500',
        },
        {
            name: 'wp',
            color: 'bg-blue-500',
        },
        {
            name: 'magento',
            color: 'bg-blue-300',
        },
        {
            name: 'opencart',
            color: 'bg-blue-500',
        },
        {
            name: 'github',
            color: 'bg-yellow-500',
        },
        {
            name: 'circleci',
            color: 'bg-yellow-300',
        },
        {
            name: 'more',
            color: 'bg-yellow-500',
        }];
    return (
        <div className="container h-96  overflow-scroll shadow-2xl p-4 md:mt-8">

            <div>
                <div className="mt-8 grid grid-cols-3 gap-2 md:grid-cols-3 lg:mt-0 lg:grid-cols-3">
                    {Icons.map(({name, color, index}) => (
                        <div className={`col-span-1 flex justify-center py-4 px-4 ${color} rounded-lg bg-opacity-10`} key={index}>
                            <Image src={'/assets/images/particles/' + `${name}` + '.svg'} width={100} height={80} className="" alt={name} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="m-8 text-gray-600 justify-center text-center">
                <h3 className="text-lg font-semi-bold text-purple-500">There is always this saying about having an idea of everything.... well, almost everything.</h3>
                <p className="text-purple-400 text-sm">The plan is to seamlessly translate your ideas into real world applications.</p>
            </div>
        </div>

    );
}
