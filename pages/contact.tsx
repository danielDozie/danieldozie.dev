import Head from 'next/head'
import React, { Fragment } from 'react';
import { Formik, FormikHelpers, Form, Field } from 'formik'
import { ContactHeroSection } from '../components/Contact/ContactHeroSection'

export default function contact() {
    interface Values {
        firstName: string;
        mobileNumber: string;
        email: string;
        subject: string;
        message: string
    }

    return (
        <Fragment>
            <Head>
                <title>Contact - {process.env.siteTitle} </title>
                <meta name="description" content="Work"></meta>
            </Head>

            <ContactHeroSection />

            <div className="flex flex-col justify-center text-left md:text-center mx-8 mt-6">
                <div className="font-mitr font-sm text-black dark:text-gray-200">
                    <p>Drop me a note in the box below, and i will surely respond as fast as I can.</p>
                    <p className="fond-semibold text-gray-500 font-mitr text-xl py-4 dark:text-gray-400 text-center">I Promise</p>
                </div>

                <div className="flex justify-center mb-5 mx-auto">
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            mobileNumber: '',
                            email: '',
                            subject: '',
                            message: '',
                        }}
                        onSubmit={(
                            values: Values,
                            { setSubmitting }: FormikHelpers<Values>
                        ) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 500);
                        }}
                    >
                        <Form className=" justify-center items-center">
                            <div className="flex flex-col my-4">
                            <div className="flex flex-col md:flex-row md:space-x-4 md:my-8">
                                <Field className="py-2 pl-2 rounded-sm shadow-lg border my-4 md:my-0" id="firstName" name="firstName" placeholder="Firstname" />
                                <Field className="py-2 pl-2 rounded-sm shadow-lg border" id="lastName" name="lastName" placeholder="Lastname" />
                            </div>
                            <div className="flex flex-col md:flex-row md:space-x-4 md:my-8">
                                <Field className="py-2 pl-2 rounded-sm shadow-lg border my-4 md:my-0" id="mobileNumber" name="mobileNumber" type="tel" placeholder="Mobile Number" />
                                <Field className="py-2 pl-2 rounded-sm shadow-lg border mb-4 md:mb-0" id="email" name="email" placeholder="Email Address" type="Email Address" />
                            </div>
                            <Field className="py-2 pl-2 mb-8 rounded-sm shadow-lg border" id="subject" name="subject" placeholder="Subject Line" />
                            <Field className="py-2 pl-2 mb-8 h-32 rounded-sm shadow-lg border" id="message" name="message" placeholder="This is the message box" type="text-area" />

                            <div className="w-52 justify-center items-center">
                                <div className="flex items-center justify-center px-5 py-2 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                    <button type="submit">Send message</button>
                                </div>
                            </div>
                            
                            </div>
                        </Form>
                    </Formik>
                </div>

            </div>
        </Fragment>
    )
}
