import Head from 'next/head'
import React, { useEffect } from 'react';
import { GetInTouchForm } from '../components/GetInTouch/GetInTouchForm';
import { GetInTouchHeroSection } from '../components/GetInTouch/GetInTouchHeroSection'
import { useGetInTouchPage } from '../lib/store';

export default function GetInTouch() {
    const getInTouchPage = useGetInTouchPage(state => state.getInTouchPage)
    const setGetInTouchPage = useGetInTouchPage(state => state.setGetInTouchPage)
    useEffect(() => {
        setGetInTouchPage()
    }, [setGetInTouchPage])
    return (
        <>
            <Head>
                <title>{getInTouchPage.title} - {process.env.siteTitle} </title>
                <meta name={getInTouchPage.description} content={getInTouchPage.description}></meta>
            </Head>
            <GetInTouchHeroSection />
            <div className="flex flex-col justify-center text-left md:text-center mx-8 mt-6">
                <div className="font-mitr font-sm text-black dark:text-gray-200">
                    <p>{getInTouchPage.section[1]?.text}</p>
                    <p className="font-semibold text-gray-500 font-mitr text-xl py-4 dark:text-gray-400 text-center">{getInTouchPage.section[2]?.text}</p>
                </div>
            </div>
            <GetInTouchForm />
        </>
    )
}
