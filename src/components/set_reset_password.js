import React from 'react'
import axios from "axios";
import Appconfig from '../constant/config';
import { useNavigate as uN } from 'react-router-dom';
import * as Yup from "yup";
import { useFormik as uF } from "formik";
import { useParams as uB } from 'react-router-dom';
import { useEffect as uFf } from 'react';
export default function set_reset_password() {
    let { code, email } = uB();
    console.log(code, email, "ggggggghhh")
    const navigate = uN();
    uFf(() => {
        getExpireLink()
    }, [])
    const getExpireLink = async (values) => {
        let data1 = await axios.get(`${Appconfig.baseurl}/accounts/set-password-generated-link/${code}/${email}`)
        console.log(data1.data.status, "ffffffdghgf")
        if (data1.data.status === "Error") {
            navigate('/404-page-not-found')
        }
    }
    const validate = values => {
        const errors = {};
        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 6 || values.password.length > 10) {
            errors.password = 'Must be greater than 6 characters or less than 15';
        }

        if (!values.confirm_password) {
            errors.confirm_password = 'Required';
        } else if (values.password !== values.confirm_password) {
            errors.confirm_password = 'Must be match with password  ';
        }



        return errors;
    };
    const formik = uF({
        initialValues: {
            password: '',
            confirm_password: '',
        },
        validate,

        onSubmit: async (values) => {
            console.log(values)
            let data1 = await axios.post(`${Appconfig.baseurl}/accounts/set-reset-password/${code}/${email}`, values)
            if (data1.data.status === "Error") {
                console.log("something went wrong")
            } else {
                navigate('/sign-in');

            }
        },
    });


    return (
        <>
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt="Sample image"
                            />
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            {/* <form
                                name="set_reset_password"

                            > */}
                            {/* <div className="flex flex-row items-center justify-center lg:justify-start"> */}
                            {/* new password input */}
                            {/* Password input */}
                            <div className="mb-6">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                            </div>
                            {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                            {/* confirm password input */}
                            <div className="mb-6">
                                <input
                                    type="password"
                                    id="confirm_password"
                                    name="confirm_password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Confirm Password"
                                    onChange={formik.handleChange}
                                    value={formik.values.confirm_password}
                                />
                                {formik.errors.confirm_password ? <div>{formik.errors.confirm_password}</div> : null}
                            </div>
                            <div className="text-center lg:text-left">
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        formik.handleSubmit();
                                        return false;
                                    }}
                                >
                                    Reset Password
                                </button>
                            </div>
                            {/* </div> */}
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
