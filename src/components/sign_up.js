

import React, { useState } from 'react'
import axios from "axios";
import Appconfig from '../constant/config';
import { useNavigate, Link } from 'react-router-dom';
// import { useToasts } from "react-toast-notifications";
export default function Signup() {

    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate())


    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("")
    const [pass, setPass] = useState("");
    const [phone, setPhone] = useState("");
    const [user_role, setUserRole] = useState("");
    const [dob, setDob] = useState(defaultDate);
    const [checked, setChecked] = useState(false);
    const [gender, setGender] = useState("");
    const [registerdata, setRegisterData] = useState([]);

    const navigate = useNavigate();
    // const { addToast } = useToasts();

    const data = {
        first_name: fname,
        last_name: lname,
        username: username,
        email: email,
        password: pass,
        role_name: user_role,
        contact: phone
    };


    const onSubmit = () => {

        // event.preventDefault();
        axios.post(`${Appconfig.baseurl}/accounts/sign-up`, data).then((response) => {
            console.log("sign up successfully", response);
            if (response.data.status === "Error") {
                console.log("something went wrong")
            } else {


                // history.push("/login");
                navigate('/sign-in');
                // addToast(response.data.message, {
                //     appearance: "success",
                //     autoDismiss: true,
                // });
            }
        }).catch((error) => {
            console.log("error")
        })

        // localStorage.setItem('userData', JSON.stringify(data))

        // console.log(data)
        // console.log(fname)
        // console.log(lname)
        // console.log(email)
        // console.log(pass)
        // console.log(phone)
        // console.log(user_role)
        // console.log(gender)
        // console.log(dob.toLocaleDateString('en-CA'))
    }

    return (
        <>
            <section className="h-screen ">


                <div className="container mx-auto  h-full  border-2 border-sky-500">


                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800 " >


                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 border-solid ">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                class="w-full"
                                alt="Sample image"
                            />
                        </div>


                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20 ">
                            {/* <form> */}
                            {/* First_name and Last_name input */}
                            <div className="mb-6">
                                <div className='grid gap-4 grid-cols-2'>
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="First Name"
                                        value={fname}
                                        onChange={(e) => setFname(e.target.value)}
                                    />

                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Last Name"
                                        value={lname}
                                        onChange={(e) => setLname(e.target.value)}
                                    />
                                </div>
                            </div>


                            {/* phone input */}
                            <div className="mb-6">
                                <input
                                    type="tel"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>

                            {/* username input */}
                            <div className="mb-6">
                                <input
                                    type="tel"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="username"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>

                            {/* Email input */}
                            <div className="mb-6">
                                <input
                                    type="email"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>


                            {/* Password input */}
                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                />
                            </div>


                            {/* User_role input */}
                            <div className='mb-6'>
                                {/* <label
                                        htmlFor="exampleFormControlInput2"
                                        className="form-label inline-block mb-2 text-gray-700 text-xl"
                                    >
                                        User Role
                                    </label> */}
                                <select
                                    name="role_name"
                                    id="role_id"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    value={user_role}
                                    onChange={(e) => setUserRole(e.target.value)}
                                >
                                    <option className='text-blue-600' value={""}>Select user role</option>
                                    <option value="Admin">Admin</option>
                                    <option value="User">User</option>
                                    <option value="Owner">Owner</option>

                                </select>
                            </div>

                            {/* Birthday input */}

                            {/*}  <div className='mb-6 '>
                                    <label
                                        htmlFor="exampleFormControlInput2"
                                        className="form-label inline-block mb-2 text-gray-700 text-xl"
                                    >
                                        Birthday!
                                    </label> 
                                    <input
                                        type="date"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        value={dob.toLocaleDateString('en-CA')}
                                        onChange={(e) => setDob(new Date(e.target.value))}
                                    />
                                </div>*/}

                            {/* Gender input */}
                            {/*<div className="mb-6">
                                     <label
                                        htmlFor="exampleFormControlInput2"
                                        className="form-label inline-block mb-2 text-gray-700 text-xl"
                                    >
                                        Gender
                                    </label> 
                                    <div className='grid gap-2 grid-cols-6'>

                                        <input
                                            type="radio"
                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            name="Gender"

                                            id='inlineRadioMale'
                                            value={gender}
                                            onChange={(e) => setChecked(!checked ? setGender("male") : "")}
                                        />
                                        <label
                                            htmlFor="inlineRadioMale"
                                            className="form-label inline-block mb-2 text-gray-700 text-xl"

                                        >
                                            Male
                                        </label>
                                        <input
                                            type="radio"
                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            name='Gender'

                                            id='inlineRadioFemale'
                                            value={gender}
                                            onChange={(e) => setChecked(!checked ? setGender("female") : "")}
                                        />
                                        <label
                                            htmlFor="inlineRadioFemale"
                                            className="form-label inline-block mb-2 text-gray-700 text-xl"

                                        >
                                            Female
                                        </label>
                                    </div>
                            </div>*/}

                            <div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        id="exampleCheck3"
                                        defaultChecked=""
                                    />
                                    <label
                                        className="form-check-label inline-block text-gray-800"
                                        htmlFor="exampleCheck2"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <Link
                                    to="/password_reset"
                                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            {/* Submit button */}
                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                onClick={onSubmit}

                            >
                                Submit
                            </button>


                            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                <p className="text-center font-semibold mx-4 mb-0">OR</p>
                            </div>
                            <a
                                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                                style={{ backgroundColor: "#3b5998" }}
                                href="#!"
                                role="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                {/* Facebook */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-3.5 h-3.5 mr-2"
                                >
                                    {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                    <path
                                        fill="currentColor"
                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                    />
                                </svg>
                                Continue with Facebook
                            </a>
                            <a
                                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                                style={{ backgroundColor: "#55acee" }}
                                href="#!"
                                role="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                {/* Twitter */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-3.5 h-3.5 mr-2"
                                >
                                    {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                    <path
                                        fill="currentColor"
                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                    />
                                </svg>
                                Continue with Twitter
                            </a>
                            {/* </form> */}
                        </div>



                    </div>
                </div>


            </section>

        </>
    )
}

