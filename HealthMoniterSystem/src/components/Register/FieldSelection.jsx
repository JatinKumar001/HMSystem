import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import Navbar from '../Navbar/Navbar';
import studentImg from '../../assets/studentimg.png'
import doctorImg from '../../assets/doctorimg.jpeg'
import receptionImg from '../../assets/receptionistimg.jpg'

export default function FieldSelection() {

    const navigate = useNavigate();

    const handleSelectionClick = (selectChoice) => {
        console.log(selectChoice);
        navigate(`/register/${selectChoice}`)
    }

    return (
        <>

            <div className='flex justify-center w-screen h-screen'>
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
                <div className='flex justify-center items-center w-screen'>
                    <div
                        className='mr-6 rounded-xl w-[25%] h-72 bg-gray-200 shadow-xl transition ease-in-out duration-150 hover:scale-105 cursor-pointer lg:w-[15%]'
                        onClick={() => handleSelectionClick('Student')}
                    >
                        <div className='flex justify-center items-end w-full h-28 bg-black rounded-t-xl'>
                            <div className='w-24 h-24 relative top-12 bg-white rounded-full shadow-lg overflow-hidden'>
                                <img src={studentImg} alt='student' className='h-28 m-auto mt-1' />
                            </div>
                        </div>
                        <div className='flex justify-center items-end h-[38%]'>
                            <p className='text-3xl font-display font-medium'>Student</p>
                        </div>
                        {/* <button className='text-2xl font-sans font-semibold'>Student</button> */}
                    </div>
                    <div
                        className='mr-6 rounded-xl w-[25%] h-72 bg-gray-200 shadow-xl transition ease-in-out duration-150 hover:scale-105 cursor-pointer lg:w-[15%]'
                        onClick={() => handleSelectionClick('doctor')}
                    >
                        <div className='flex justify-center items-end w-full h-28 bg-black rounded-t-xl'>
                            <div className='w-24 h-24 relative top-12 bg-white rounded-full shadow-lg overflow-hidden'>
                                <img src={doctorImg} alt='doctor' className='h-28 m-auto mt-1' />
                            </div>
                        </div>
                        <div className='flex justify-center items-end h-[38%]'>
                            <p className='text-3xl font-display font-medium'>Doctor</p>
                        </div>
                    </div>
                    <div
                        className='rounded-xl w-[25%] h-72 bg-gray-200 shadow-xl transition ease-in-out duration-150 hover:scale-105 cursor-pointer lg:w-[15%]'
                        onClick={() => handleSelectionClick('reception')}
                    >
                        <div className='flex justify-center items-end w-full h-28 bg-black rounded-t-xl'>
                            <div className='w-24 h-24 relative top-12 bg-white rounded-full shadow-lg overflow-hidden'>
                                <img src={receptionImg} alt='reception' className='h-24 m-auto mt-1' />
                            </div>
                        </div>
                        <div className='flex justify-center items-end h-[38%]'>
                            <p className='text-3xl font-display font-medium'>Reception</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
