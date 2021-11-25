import React, { useState } from 'react';
import { Formik, FormikHelpers, Form, Field } from 'formik'


const formBgImage = {
    backgroundImage: 'url(/assets/images/lines.svg)',
    backgroundPosition: 'inherit',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

function validateEmail(value: string): React.FC {
    let error: any;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

function validatefullName(value: string): React.FC {
    let error: any;
    if (!value) {
        error = 'Required';
    }
    return error;
}

function subject(value: string): React.FC {
    let error: any;
    if (!value) {
        error = 'Required';
    }
    return error;
}

function message(value: string): React.FC {
    let error: any;
    if (!value) {
        error = 'Required';
    }
    return error;
}

export const GetInTouchForm: React.FC = () => {
    const [success, setSuccess] = useState('')
    const [sendValue, setSendValue] = useState('Send Message');
    interface Values {
        fullName: string;
        email: string;
        subject: string;
        message: string
    }
    return (
        <>
            <div className="block w-10/12 ml-8 md:ml-0 md:w-full md:flex justify-center mb-5">
                <div className="p-8 shadow-xl " style={formBgImage}>
                    <Formik
                        initialValues={{
                            fullName: '',
                            email: '',
                            subject: '',
                            message: '',
                        }}
                        onSubmit={async (
                            values: Values,
                            { resetForm }: FormikHelpers<Values>
                        ) => {
                            await fetch("/api/messagesHandler", {
                                method: "POST",
                                body: JSON.stringify(values)
                            });
                            setSuccess('Message sent successfully 👌')
                            setSendValue('Send Message')
                            resetForm()
                            setTimeout(() => {
                                setSuccess('')
                            },5000)
                        
                        }}
                    >
                        {({ errors, touched, validateForm }) => (   
                            <Form className="font-mitr font-sm justify-center items-center">
                                <div className="flex flex-col my-4">
                                    <div className="flex flex-col md:flex-row md:space-x-4 md:mb-8">
                                        <div>
                                            <Field className="w-full py-2 pl-2 rounded-sm shadow-lg border my-4 md:my-0" id="fullName" name="fullName" placeholder="Fullname" validate={validatefullName} />
                                            {errors.fullName && touched.fullName && <div className="text-xs text-red-500 py-2 pl-2">{errors.fullName}</div>}
                                        </div>
                                        <div>
                                            <Field className="w-full py-2 pl-2 rounded-sm shadow-lg border mb-4 md:mb-0" id="email" name="email" placeholder="Email Address" type="Email Address" validate={validateEmail} />
                                            {errors.email && touched.email && <div className="text-xs text-red-500 py-2 pl-2">{errors.email}</div>}
                                        </div>
                                    </div>
                                    <Field className="py-2 pl-2 rounded-sm shadow-lg border mb-8" id="subject" name="subject" placeholder="Subject Line" validate={subject} />
                                    <Field component="textarea" className="py-2 pl-2  rounded-sm shadow-lg border h-36 mb-8" id="message" name="message" placeholder="This is the message box" validate={message} />
                                    {errors.message && touched.message && <div className="text-xs text-red-500 py-2 pl-2">{errors.message}</div>}
                                    <div className="flex justify-center items-center mb-8">
                                        <input type="submit" value={sendValue} onClick={ () => {validateForm; setSendValue('Sending...')} } className="px-5 py-2 border border-transparent text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700" />
                                    </div>
                                    <p className="flex text-xs justify-center items-center text-green-500">{success}</p>
                                </div>
                            </Form>)}
                    </Formik>
                </div>
            </div>
        </>
    )
}
