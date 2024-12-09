import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Disclosure } from '@headlessui/react'

export default function Register() {

    const navigate = useNavigate();
    const location = useLocation();
    const occup = location.pathname.split('/').pop();

    const [credentials, setCredentials] = useState({
        firstname: undefined,
        lastname: undefined,
        email: undefined,
        password: undefined,
        phone: undefined,
        occupation: occup,
        gender: undefined,
        age: undefined,
    });


    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(credentials)
    };

    const handleClick = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/auth/register", credentials);
        navigate("/")
    };

    return (
        // <div>
        //     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        //         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        //             <Link to={'/'}><p className='text-center text-green-600 text-5xl font-semibold'>eDoc</p></Link>
        //             {/* <img
        //                 alt="Your Company"
        //                 src={UpesLogo}
        //                 className="mx-auto h-20 w-auto"
        //             /> */}
        //             <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        //                 Create an Account
        //             </h2>
        //         </div>

        //         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        //             <form action="#" method="POST" className="space-y-6">
        //                 <div>
        //                     <label htmlFor="email" className="flex text-sm font-medium leading-6 text-gray-900">
        //                         Email address
        //                     </label>
        //                     <div className="mt-2">
        //                         <input
        //                             id="email"
        //                             name="email"
        //                             type="email"
        //                             required
        //                             autoComplete="email"
        //                             onChange={handleChange}
        //                             className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        //                         />
        //                     </div>
        //                 </div>

        //                 <div>
        //                     <label htmlFor="username" className="flex text-sm font-medium leading-6 text-gray-900">
        //                         Username
        //                     </label>
        //                     <div className="mt-2">
        //                         <input
        //                             id="username"
        //                             name="username"
        //                             type="text"
        //                             required
        //                             autoComplete="username"
        //                             onChange={handleChange}
        //                             className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        //                         />
        //                     </div>
        //                 </div>

        //                 <div>
        //                     <label htmlFor="phone" className="flex text-sm font-medium leading-6 text-gray-900">
        //                         Phone Number
        //                     </label>
        //                     <div className="mt-2">
        //                         <input
        //                             id="phone"
        //                             name="phone"
        //                             type="text"
        //                             required
        //                             autoComplete="0000000000"
        //                             onChange={handleChange}
        //                             className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        //                         />
        //                     </div>
        //                 </div>

        //                 <div>
        //                     <div className="flex items-center justify-between">
        //                         <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
        //                             Password
        //                         </label>
        //                     </div>
        //                     <div className="mt-2">
        //                         <input
        //                             id="password"
        //                             name="password"
        //                             type="password"
        //                             required
        //                             autoComplete="current-password"
        //                             onChange={handleChange}
        //                             className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        //                         />
        //                     </div>
        //                 </div>

        //                 <div>
        //                     <label htmlFor="occupation " className="flex text-sm font-medium leading-6 text-gray-900">
        //                         Occupation
        //                     </label>
        //                     <div className="mt-2">
        //                         {/* <select id="occupation" required onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        //                             <option value="student">Student</option>
        //                             <option value="doctor">Doctor</option>
        //                             <option value="reception">Receptionist</option>
        //                         </select> */}
        //                         <input
        //                             id="occupation"
        //                             name="occupation"
        //                             type="text"
        //                             required
        //                             value={occup}
        //                             autoComplete="occupation"
        //                             className="block capitalize font-semibold w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        //                             readOnly
        //                         />
        //                     </div>
        //                 </div>

        //                 <div>
        //                     <button
        //                         type="submit"
        //                         onClick={handleClick}
        //                         className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        //                     >
        //                         Register
        //                     </button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div >
        <div className='flex'>
            <Disclosure as="nav" className="bg-gray-800">
                <div className="mx-auto max-w-5xl px-4 sm:px-2 lg:px-4">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <p className='text-white text-3xl font-semibold sm:text-2xl lg:text-3xl'>eDoc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Disclosure>
            <div className='flex flex-col justify-center w-screen'>
                <div>
                    <h2 className="mt-10 ml-10 mb-10 text-2xl font-semibold leading-9 tracking-tight text-gray-500">
                        Create an Account
                    </h2>
                </div>
                <div className='flex items-center justify-center'>
                    <form>
                        <div className="mt-5 space-y-12">


                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-2xl/9 font-semibold text-gray-900">Personal Information</h2>
                                {/* <p className="mt-1 text-base/8 text-gray-600">Use a permanent address where you can receive mail.</p> */}

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="firstname" className="block text-sm/6 font-medium text-gray-900">
                                            First name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="firstname"
                                                name="firstname"
                                                type="text"
                                                autoComplete="given-name"
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="lastname" className="block text-sm/6 font-medium text-gray-900">
                                            Last name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="lastname"
                                                name="lastname"
                                                type="text"
                                                autoComplete="family-name"
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-full">
                                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-full">
                                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                            Password
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="password"
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">
                                            Phone No.
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="phone"
                                                name="phone"
                                                type='text'
                                                autoComplete="phone-no"
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="occupation" className="block text-sm/6 font-medium text-gray-900">
                                            Occupation
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="occupation"
                                                name="occupation"
                                                type="text"
                                                value={occup}
                                                autoComplete="occupation"
                                                className="block w-full rounded-md capitalize border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b border-gray-900/10 pb-12">

                                <div className="mt-10 space-y-10">

                                    <fieldset>
                                        <legend className="text-sm/6 font-semibold text-gray-900">Gender</legend>
                                        {/* <p className="mt-1 text-sm/6 text-gray-600">These are delivered via SMS to your mobile phone.</p> */}
                                        <div className="mt-6 space-y-6">
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="male"
                                                    name="gender"
                                                    type="radio"
                                                    value='male'
                                                    onChange={handleChange}
                                                    className="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <label htmlFor="male" className="block text-sm/6 font-medium text-gray-900">
                                                    Male
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="female"
                                                    name="gender"
                                                    type="radio"
                                                    value='female'
                                                    onChange={handleChange}
                                                    className="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <label htmlFor="female" className="block text-sm/6 font-medium text-gray-900">
                                                    Female
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="other"
                                                    name="gender"
                                                    type="radio"
                                                    value='other'
                                                    onChange={handleChange}
                                                    className="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <label htmlFor="other" className="block text-sm/6 font-medium text-gray-900">
                                                    Other
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="age" className="block text-sm/6 font-medium text-gray-900">
                                                Age
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="age"
                                                    name="age"
                                                    type="text"
                                                    autoComplete="age"
                                                    onChange={handleChange}
                                                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 mb-6 flex items-center justify-end gap-x-6">
                            <button type="button" className="text-sm/6 font-semibold text-gray-900">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                onClick={handleClick}
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
