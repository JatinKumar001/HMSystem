import React, { useState } from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

export default function Appointment() {

    const [credentials, setCredentials] = useState({
        sap: undefined,
        firstname: undefined,
        lastname: undefined,
        age: undefined,
        gender: undefined,
        email: undefined,
        phone: undefined,
        preference: undefined,
        description: undefined,
        appstatus: "pending",
    });

    const navigate = useNavigate()
    const location = useLocation();
    const previousPath = location.state?.from || "/dashboard/reception";

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(credentials)
    };

    const handleClick = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/appointment", credentials);
        navigate(previousPath)
    };

    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
                <form>
                    <div className="mt-5 space-y-12">

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-2xl mt-4 font-semibold leading-7 text-gray-900">Personal Information</h2>
                            <p className="mt-2 text-base/8 text-gray-600">
                                All information is necessary
                            </p>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="first-name" className="block text-base font-medium leading-6 text-gray-900">
                                        SAP ID
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="sap"
                                            name="sap"
                                            type="text"
                                            autoComplete="given-name"
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-base font-medium leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="firstname"
                                            name="firstname"
                                            type="text"
                                            autoComplete="given-name"
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-base font-medium leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="lastname"
                                            name="lastname"
                                            type="text"
                                            autoComplete="family-name"
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-base font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="phone" className="block text-base font-medium leading-6 text-gray-900">
                                        Phone Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            autoComplete="phone"
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 space-y-10">
                                <fieldset>
                                    <legend className="text-base/6 font-semibold text-gray-900">Gender</legend>
                                    {/* <p className="mt-1 text-sm/6 text-gray-600">These are delivered via SMS to your mobile phone.</p> */}
                                    <div className="mt-6 space-y-6">
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="push-male"
                                                name="gender"
                                                type="radio"
                                                value='male'
                                                onChange={handleChange}
                                                className="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <label htmlFor="push-male" className="block text-sm/6 font-medium text-gray-900">
                                                Male
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="push-female"
                                                name="gender"
                                                type="radio"
                                                value='female'
                                                onChange={handleChange}
                                                className="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <label htmlFor="push-female" className="block text-sm/6 font-medium text-gray-900">
                                                Female
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="push-other"
                                                name="gender"
                                                type="radio"
                                                value='other'
                                                onChange={handleChange}
                                                className="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <label htmlFor="push-other" className="block text-sm/6 font-medium text-gray-900">
                                                Other
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-1">
                                        <label htmlFor="age" className="block text-base/6 font-medium text-gray-900">
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
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-2">
                                        <label htmlFor="preference" className="block text-base/6 font-medium text-gray-900">
                                            Preference
                                        </label>
                                        <div className="mt-2">
                                            <select id="preference" name='preference' required onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                <option value="">Select Preference</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-2xl mt-4 font-semibold leading-7 text-gray-900">Prescription</h2>
                            <p className="mt-2 text-base/8 text-gray-600">
                                Leave for Doctor
                            </p>
                            <div className="mt-10 col-span-full">
                                <label htmlFor="street-address" className="block text-base font-medium leading-6 text-gray-900">
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={5}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Link to={"/dashboard/reception"}></Link><button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            onClick={handleClick}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
