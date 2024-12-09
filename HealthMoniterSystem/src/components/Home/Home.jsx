import React from 'react'
import { useState } from 'react'
import BackgroundImage from '../../assets/OIP.jpeg'

import {
    Dialog,
    DialogPanel,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div>
            <div className='z-0 w-full h-full'>
                <img src={BackgroundImage} className='absolute w-full h-full bg-cover bg-center brightness-[.25]' />
            </div>
            <header className="">
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1 z-10">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="text-2xl text-white font-semibold">eDoc</span>
                            {/* <img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            /> */}
                        </a>
                    </div>
                    <div className="flex lg:hidden z-10">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end z-10">
                        <Link to={"/signin"} className="text-sm px-2 rounded-lg font-semibold leading-6 text-white hover:bg-sky-400">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between z-10">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root z-10">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="py-6">
                                    <Link
                                        to={"/signin"}
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
            <div className='z-10 text-gray-400 relative text-center flex flex-col my-40'>
                <p className='text-3xl font-semibold text-white mb-3'>Avoid Hassles & Delays.</p>
                <p>How is health today, Sounds like not good!</p>
                <p>Don't worry. Find your doctor online Book as you wish with eDoc.</p>
                <p>Make your appointment now.</p>

                <div className='my-8'>
                    <Link to={'/signin'} className='bg-sky-600 px-3 py-2 text-white rounded-md hover:bg-sky-700'>
                        Make Appointment
                    </Link>
                </div>
            </div>
        </div>
    )
}
