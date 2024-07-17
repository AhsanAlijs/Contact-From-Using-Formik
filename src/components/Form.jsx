import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
    firstName: Yup.string().min(2, "Too Short!").max(73, "Too Long!").required('FirstnameisRequired'),
    lastName: Yup.string().min(2, "Too Short!").max(73, "Too Long!").required('LastnameisRequired'),
    email: Yup.string().email('Invalid email').required('EmailisRequired'),
    message: Yup.string().min(2, "Too Short!").max(1000, "maximum_1000 Charecteras!").required('MessageisRequired'),
    queryType: Yup.string().required('QueryisRequired'),
    consent: Yup.bool().oneOf([true], 'Consent is required').required('ConsentisRequired')
});

const Forms = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        queryType: '',
        message: '',
        consent: false,
    };

    return (
        <div className="min-h-screen flex items-center flex-col justify-center bg-gray-50">
            <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={ContactSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ errors, touched, handleChange, values, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                        <article className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">First Name *</label>
                                <Field
                                    type="text"
                                    name="firstName"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                />
                                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                                <Field
                                    type="text"
                                    name="lastName"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                />
                                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                            </div>
                        </article>

                        <article className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">Email Address *</label>
                            <Field
                                type="email"
                                name="email"
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </article>

                        <article className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">Query Type *</label>
                            <div className="flex space-x-4 mt-1">
                                <label className="flex items-center">
                                    <Field
                                        type="radio"
                                        name="queryType"
                                        value="General Enquiry"
                                        className="form-radio h-4 w-4 text-green-600"
                                    />
                                    <span className="ml-2 text-gray-700">General Enquiry</span>
                                </label>
                                <label className="flex items-center">
                                    <Field
                                        type="radio"
                                        name="queryType"
                                        value="Support Request"
                                        className="form-radio h-4 w-4 text-green-600"
                                    />
                                    <span className="ml-2 text-gray-700">Support Request</span>
                                </label>
                            </div>
                            <ErrorMessage name="queryType" component="div" className="text-red-500 text-sm" />
                        </article>

                        <article className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">Message *</label>
                            <Field
                                as="textarea"
                                name="message"
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                        </article>

                        <article className="mt-4 flex items-center">
                            <Field
                                type="checkbox"
                                name="consent"
                                className="form-checkbox h-4 w-4 text-green-600"
                            />
                            <label className="ml-2 text-sm text-gray-700">I consent to being contacted by the team *</label>
                            <ErrorMessage name="consent" component="div" className="text-red-500 text-sm" />
                        </article>

                        <button
                            type="submit"
                            className="mt-6 w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
                        // disabled={!values.consent}
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Forms;
