import React from 'react'
import { useState as uS } from 'react'
import { useNavigate as uN } from 'react-router-dom';
import axios from "axios";
import Appconfig from '../constant/config';
export default function password_reset() {
    const [email, setEmail] = uS("")
    const navigate = uN();

    const data = {
        user_email: email
    }
    const onSubmit = () => {

        axios.post(`${Appconfig.baseurl}/accounts/password-reset`, data).then((response) => {
            console.log("email has", response);
            if (response.data.status === "Error") {
                console.log("something went wrong")
            } else {


                // history.push("/login");
                navigate('/password_reset/done');
                // addToast(response.data.message, {
                //     appearance: "success",
                //     autoDismiss: true,
                // });
            }
        }).catch((error) => {
            console.log("error")
        })
        navigate("/password_reset/done")
        console.log(email)
    }
    return (
        <>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt="Phone image"
                            />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form>
                                {/*Reset Password label */}
                                <p className="mb-4 decoration-8 text-2xl">Reset Password*</p>


                                {/* Email input */}
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                    {/* <p className="text-center font-semibold mx-4 mb-0">OR</p> */}
                                </div>

                                <p className="mb-4 text-gray-700/50">Forgotten your password ?Enter your email address below, and we’ll email instructions for setting a new one</p>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    onClick={onSubmit}

                                >
                                    Send Email
                                </button>


                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
