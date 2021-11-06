import React from 'react';
import { Formik, FormikHelpers, Form, Field } from 'formik'

export const ContactForm: React.FC = () => {
    interface Values {
        firstName: string;
        mobileNumber: string;
        email: string;
        subject: string;
        message: string
    }
    return (
        <>
            <div className="block w-10/12 ml-8 md:ml-0 md:w-full md:flex justify-center mb-5">
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
                        <Form className="font-mitr font-sm justify-center items-center">
                            <div className="flex flex-col my-4">
                            <div className="flex flex-col md:flex-row md:space-x-4 md:mb-8">
                                <Field className="py-2 pl-2 rounded-sm shadow-lg border my-4 md:my-0" id="firstName" name="firstName" placeholder="Firstname" />
                                <Field className="py-2 pl-2 rounded-sm shadow-lg border" id="lastName" name="lastName" placeholder="Lastname" />
                            </div>
                            <div className="flex flex-col md:flex-row md:space-x-4 md:mb-8">
                                <Field className="py-2 pl-2 rounded-sm shadow-lg border my-4 md:my-0" id="mobileNumber" name="mobileNumber" type="tel" placeholder="Mobile Number" />
                                <Field className="py-2 pl-2 rounded-sm shadow-lg border mb-4 md:mb-0" id="email" name="email" placeholder="Email Address" type="Email Address" />
                            </div>
                            <Field className="py-2 pl-2 mb-8 rounded-sm shadow-lg border" id="subject" name="subject" placeholder="Subject Line" />
                            <Field component="textarea" className="py-2 pl-2 mb-8 rounded-sm shadow-lg border" id="message" name="message" placeholder="This is the message box"/>

                            <div className="w-52 justify-center items-center ml-16 md:ml-28 mb-8">
                                <div className="flex items-center justify-center px-5 py-2 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                    <button type="submit" className="uppercase">Hola at ur boy</button>
                                </div>
                            </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
        </>
    )
}
