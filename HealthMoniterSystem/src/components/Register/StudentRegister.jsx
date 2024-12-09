import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Disclosure } from '@headlessui/react'
import axios from 'axios';

export default function StudentRegister() {

    const navigate = useNavigate();
    const location = useLocation();
    const occup = location.pathname.split('/').pop();

    const [credentials, setCredentials] = useState({
        firstname: undefined,
        lastname: undefined,
        email: undefined,
        password: undefined,
        phone: undefined,
        course: undefined,
        stream: undefined,
        specialization: undefined,
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
                                <h2 className="text-2xl/9 font-semibold text-gray-900">Profile</h2>
                                <p className="mt-1 text-base/8 text-gray-600">
                                    This information will be displayed publicly so be careful what you share.
                                </p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-4">
                                        <label htmlFor="sap" className="block text-sm/6 font-medium text-gray-900">
                                            SAP ID
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    id="sap"
                                                    name="sap"
                                                    type="text"
                                                    placeholder="5000XXXXX"
                                                    autoComplete="sap"
                                                    onChange={handleChange}
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="col-span-full">
                                    <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                                        About
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            defaultValue={''}
                                        />
                                    </div>
                                    <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about yourself.</p>
                                </div> */}

                                    <div className="col-span-full">
                                        <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
                                            Photo
                                        </label>
                                        <div className="mt-2 flex items-center gap-x-3">
                                            <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
                                            <button
                                                type="button"
                                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                            >
                                                Change
                                            </button>
                                        </div>
                                    </div>

                                    {/* <div className="col-span-full">
                                    <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                                        Cover photo
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                                            <div className="mt-4 flex text-sm/6 text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div> */}
                                </div>
                            </div>

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

                                    <div className="sm:col-span-4">
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

                                    <div className="sm:col-span-4">
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

                                    <div className="sm:col-span-3">
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
                                        <label htmlFor="course" className="block text-sm/6 font-medium text-gray-900">
                                            Course
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="course"
                                                name="course"
                                                type="text"
                                                autoComplete="course"
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3 sm:col-start-1">
                                        <label htmlFor="stream" className="block text-sm/6 font-medium text-gray-900">
                                            Stream
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="stream"
                                                name="stream"
                                                type="text"
                                                autoComplete="stream"
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="specialization" className="block text-sm/6 font-medium text-gray-900">
                                            Specialization
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="specialization"
                                                name="specialization"
                                                type="text"
                                                autoComplete="specialization"
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    {/* <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
                                        ZIP / Postal code
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="postal-code"
                                            name="postal-code"
                                            type="text"
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div> */}
                                </div>
                            </div>

                            <div className="border-b border-gray-900/10 pb-12">

                                <div className="mt-10 space-y-10">
                                    {/* <fieldset>
                                    <legend className="text-sm/6 font-semibold text-gray-900">By Email</legend>
                                    <div className="mt-6 space-y-6">
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                            </div>
                                            <div className="text-sm/6">
                                                <label htmlFor="comments" className="font-medium text-gray-900">
                                                    Comments
                                                </label>
                                                <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="candidates"
                                                    name="candidates"
                                                    type="checkbox"
                                                    className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                            </div>
                                            <div className="text-sm/6">
                                                <label htmlFor="candidates" className="font-medium text-gray-900">
                                                    Candidates
                                                </label>
                                                <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="offers"
                                                    name="offers"
                                                    type="checkbox"
                                                    className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                            </div>
                                            <div className="text-sm/6">
                                                <label htmlFor="offers" className="font-medium text-gray-900">
                                                    Offers
                                                </label>
                                                <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset> */}
                                    <fieldset>
                                        <legend className="text-sm/6 font-semibold text-gray-900">Gender</legend>
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
