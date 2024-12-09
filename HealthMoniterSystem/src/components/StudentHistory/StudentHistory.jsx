import React, { useState } from 'react'
import studentimg from '../../assets/studentimg.png'
import Navbar from '../Navbar/Navbar'
import useFetch from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import userlogo from '../../assets/user1.png'
import search from '../../assets/search.png'
import Done from '../../assets/done.png'
import Cancel from '../../assets/cancel.png'
import Pending from '../../assets/pending.png'
import peoplelogo from '../../assets/people.png'
import receptionistimg from '../../assets/receptionistimg.jpg'
import axios from 'axios'

const people = [
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '11 AM',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '11 AM',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '11 AM',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '11 AM',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '11 AM',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '11 AM',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
]

export default function StudentHistory() {

    const location = useLocation();
    const studentid = location.pathname.split('/').pop();
    console.log(studentid);

    const { data, loading, error } = useFetch('http://localhost:8080/api/appointment')

    const handleCancelClick = async (appointmentId) => {
        try {
            await axios.put(`http://localhost:8080/api/appointment/${appointmentId}`, { appstatus: 'cancel' });
            alert('Appointment cancelled successfully');

            window.location.reload();
        } catch (error) {
            console.error('Error cancelling appointment:', error);
            alert('Failed to cancel appointment');
        }
    };

    const [activeItemId, setActiveItemId] = useState(null);
    const [liveActiveItemId, setLiveActiveItemId] = useState(null);
    const [appointmentStatus, setAppointmentStatus] = useState('done');
    const [statusAll, setStatusAll] = useState(true);

    const handleLiveActiveClick = (id) => {
        setLiveActiveItemId((prevId) => (prevId === id ? null : id));
    };

    const handleActiveClick = (id) => {
        setActiveItemId((prevId) => (prevId === id ? null : id));
    };

    const handleAppointmentStatus = (value) => {
        setStatusAll(false);
        setAppointmentStatus(value);
    }

    return (
        <div>
            <div className="min-h-full">
                <Navbar />

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Student History</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div>
                            <div className='flex flex-col mb-auto max-[500px]:mt-10 max-[500px]:ml-0 max-[500px]:flex-col'>
                                <div className='mt-10 max-[500px]:ml-0'>
                                    <p className='text-2xl font-semibold mb-5'>Live Appointment</p>
                                </div>
                                <div className='max-h-[36rem] overflow-auto max-[600px]:m-auto max-[840px]:justify-center'>
                                    <ul role="list" className="divide-y divide-gray-100">
                                        {data.filter((item) => item.sap === studentid && item.appstatus === 'pending').map((item) => (
                                            <li key={item._id} className="flex flex-col gap-x-6 py-5 mr-5">
                                                <div onClick={() => handleLiveActiveClick(item._id)} className={liveActiveItemId === item._id ? "flex justify-between gap-x-6 pt-5 pb-2 pr-5 rounded-t-xl cursor-pointer" : "flex justify-between gap-x-6 pt-5 pb-2 pr-5 cursor-pointer"}>
                                                    <div className="flex min-w-0 gap-x-4 pl-2">
                                                        <img
                                                            alt=""
                                                            src={peoplelogo}
                                                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                                        />
                                                        <div className="min-w-0 flex-auto">
                                                            <p className="text-sm font-semibold leading-6 text-gray-900">
                                                                {item.firstname} {item.lastname}
                                                            </p>
                                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                                                SAP ID : {item.sap}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                                        <button onClick={() => handleCancelClick(item._id)} className='flex w-20 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 shadow-md hover:bg-sky-600 hover:text-white hover:border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Cancel</button>
                                                    </div>
                                                </div>
                                                <div className={liveActiveItemId === item._id ? "flex flex-col pt-8 pb-5 px-4 leading-8 rounded-b-xl shadow-lg " : "hidden"}>
                                                    <div className='flex justify-between'>
                                                        <div>
                                                            <p>Email : <span className="text-gray-500">{item.email}</span></p>
                                                            <p>Phon No. : <span className="text-gray-500">{item.phone}</span></p>
                                                        </div>
                                                        <div>
                                                            <p>Age : <span className="text-gray-500">{item.age}</span></p>
                                                            <p>Gender : <span className="text-gray-500">{item.gender}</span></p>
                                                            {/* <p>Previous History Count :{" "}<span className="text-gray-500">1</span></p> */}
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-end items-center mt-4'>
                                                        <p className='text-gray-500'>Status :</p>
                                                        <img
                                                            src={Pending}
                                                            className='w-6 ml-2'
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='mt-28 max-[500px]:mt-10'>
                            <div className='flex justify-between items-start mb-5'>
                                <div>
                                    <p className='text-2xl font-semibold mb-5'>Previous Appointments</p>
                                </div>
                                <div className='flex'>
                                    <button onClick={() => setStatusAll(true)} className='flex w-20 justify-center rounded-md mx-2 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 shadow-md hover:shadow-lg hover:text-black hover:sacle-105 hover:border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 max-[399px]:mx-0 max-[399px]:mb-1'>All</button>
                                    <button onClick={() => handleAppointmentStatus('done')} className='flex w-20 justify-center rounded-md mx-2 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 shadow-md hover:shadow-lg hover:text-black hover:sacle-105 hover:border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 max-[399px]:mx-0 max-[399px]:mb-1'>Completed</button>
                                    <button onClick={() => handleAppointmentStatus('cancel')} className='flex w-20 justify-center rounded-md mx-2 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 shadow-md hover:shadow-lg hover:text-black hover:scale-105 hover:border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 max-[399px]:mx-0 max-[399px]:mb-1'>Cancel</button>
                                </div>
                            </div>
                            <ul role="list" className="divide-y divide-gray-100">
                                {data.filter((item) => {
                                    if (item.sap !== studentid) return false;

                                    if (statusAll) {
                                        return ["done", "pending", "cancel"].includes(item.appstatus);
                                    } else {
                                        return item.appstatus === `${appointmentStatus}`;
                                    }
                                }).map((item) => (
                                    <li key={item._id} className="flex flex-col gap-x-6 py-5">
                                        <div className={activeItemId === item._id ? "flex justify-between gap-x-6 pt-5 pb-2 pr-5 rounded-t-xl cursor-pointer" : "flex justify-between gap-x-6 pt-5 pb-2 pr-5 cursor-pointer"} onClick={() => handleActiveClick(item._id)}>
                                            <div className="flex min-w-0 gap-x-4">
                                                <img alt="" src={userlogo} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-semibold leading-6 text-gray-900">{item.firstname} {item.lastname}</p>
                                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">SAP ID : {item.sap}</p>
                                                </div>
                                            </div>
                                            <div className={activeItemId === item._id ? "hidden" : "flex flex-col shrink-0 items-end"}>
                                                <p className="flex justify-center mt-1 truncate text-xs leading-5 text-gray-500">Email ID : {item.email}</p>
                                                <p className="flex justify-center mt-1 truncate text-xs leading-5 text-gray-500">Phone no. : {item.phone}</p>
                                            </div>
                                            <div className={activeItemId === item._id ? 'flex items-center' : 'hidden'}>
                                                <p className='text-gray-500'>Status :</p>
                                                <img
                                                    src={item.appstatus === 'done' ? Done : item.appstatus === 'cancel' ? Cancel : Pending}
                                                    className='w-8 ml-2'
                                                />
                                            </div>
                                        </div>
                                        <div className={activeItemId === item._id ? "flex flex-col pt-8 pb-5 px-4 leading-8 rounded-b-xl shadow-lg " : "hidden"}>
                                            <div className='flex justify-between'>
                                                <div>
                                                    <p>Email : <span className="text-gray-500">{item.email}</span></p>
                                                    <p>Phon No. : <span className="text-gray-500">{item.phone}</span></p>
                                                </div>
                                                <div>
                                                    <p>Age : <span className="text-gray-500">{item.age}</span></p>
                                                    <p>Gender : <span className="text-gray-500">{item.gender}</span></p>
                                                    {/* <p>Previous History Count :{" "}<span className="text-gray-500">1</span></p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
