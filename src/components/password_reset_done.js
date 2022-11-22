import React from 'react'


export default function password_reset() {

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
                                <p className="mb-4 decoration-8 text-2xl">Password reset sent</p>




                                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                    {/* <p className="text-center font-semibold mx-4 mb-0">OR</p> */}
                                </div>

                                <p className="mb-4 text-gray-700/50">we’ve emailed you instructions for setting your password, if an account exist with email you entered .you should receive them shortly.

                                    if you don’t receive an email, please make sure you’ve entered the address you registered with ,and check your spam folder</p>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
