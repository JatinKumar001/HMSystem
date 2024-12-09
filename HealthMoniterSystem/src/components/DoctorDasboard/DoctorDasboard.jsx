import React, { useRef, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import userlogo from '../../assets/user1.png'
import peoplelogo from '../../assets/people.png'
import search from '../../assets/search.png'
import Done from '../../assets/done.png'
import Cancel from '../../assets/cancel.png'
import Pending from '../../assets/pending.png'
import doctorimg from '../../assets/doctorimg.jpeg'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import App from '../../App'


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

export default function DoctorDasboard() {

    const { data, loading, error } = useFetch("http://localhost:8080/api/appointment")

    const navigate = useNavigate()


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

    const handleReAppointment = async (appointmentId) => {
        try {
            await axios.post(`http://localhost:8080/api/appointment/${appointmentId}`);
            alert('Appointment add successfully');

            window.location.reload();
        } catch (error) {
            console.error('Error re-appointment:', error);
            alert('Failed to re-appointment');
        }
    };

    const handleEditClick = (appointmentId) => {
        navigate(`/dashboard/doctor/edit/${appointmentId}`);
    }

    const recordsRef = useRef(null);

    const scrollToRecords = () => {
        recordsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const [activeItemId, setActiveItemId] = useState(null);
    const [appointmentSearch, setAppointmentSearch] = useState();
    const [appointmentSearchPending, setAppointmentSearchPending] = useState();
    const [appointmentStatus, setAppointmentStatus] = useState('done');
    const [statusAll, setStatusAll] = useState(false);

    const handleActiveClick = (id) => {
        setActiveItemId((prevId) => (prevId === id ? null : id));
    };

    const handleChangeSearchAppointmentPending = (e) => {
        setAppointmentSearchPending(e.target.value);
    }

    const handleChangeSearchAppointment = (e) => {
        setAppointmentSearch(e.target.value);
    }

    const handleAppointmentStatus = (value) => {
        setStatusAll(false);
        setAppointmentSearch();
        setAppointmentStatus(value);
    }

    const handleStudentId = (studentID) => {
        navigate(`/dashboard/studenthistory/${studentID}`)
    }

    const user = JSON.parse(localStorage.getItem("user_data"));

    return (
        <div>
            <div className="min-h-full">
                <Navbar />

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className='flex justify-between max-[840px]:flex-col'>
                            <div>
                                {/* <div className="max-w-xs mt-8 rounded-lg overflow-hidden bg-gray-50 shadow-xl border-2 border-gray-100 max-[840px]:items-center max-[840px]:m-auto">
                                    <div className='pt-8 pl-8 pr-8'>
                                        <img className="w-full rounded-full" src={doctorimg} alt="Sunset in the mountains" />
                                    </div>
                                    <div className="flex flex-col text-center px-6 py-4">
                                        <p className="font-bold text-xl mb-2">{data.sap} {data.sap}</p>
                                        <p className="text-gray-500 text-base font-medium">
                                            Doctor
                                        </p>
                                    </div>
                                </div> */}
                                <div className="flex flex-col leading-10 max-w-xl mt-8 rounded-lg overflow-hidden bg-gray-50 shadow-xl border-2 border-gray-100">
                                    <div className='pt-8 pl-8 pr-8'>
                                        <img className="m-auto h-60 rounded-full" src={doctorimg} alt="Sunset in the mountains" />
                                    </div>
                                    <div className="flex flex-col text-center mt-5 px-6 py-4">
                                        <p className="font-bold text-xl mb-2">{user.firstname} {user.lastname}</p>
                                        <p className="text-gray-500 text-base font-medium">
                                            Doctor
                                        </p>
                                    </div>
                                    <div className='flex justify-center items-start flex-col mt-5 m-5 text-gray-800'>
                                        <p>Email : <sapn className='text-gray-500'>{user.email}</sapn></p>
                                        <p>Phone No. : <sapn className='text-gray-500'>{user.email}</sapn></p>
                                        <p>Gender : <sapn className='text-gray-500'>{user.gender}</sapn></p>
                                        <p>Age : <sapn className='text-gray-500'>{user.age}</sapn></p>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-center mt-20 mb-6 max-[500px]:flex-col max-[840px]:items-center max-[840px]:justify-center max-[840px]:ml-0'>
                                    <Link
                                        to={"/appointment"}
                                        state={{ from: location.pathname }}
                                        className="flex justify-center rounded-md bg-sky-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 max-[500px]:mb-5 max-[500px]:w-full max-[500px]:mr-0 max-[1025px]:mr-4 lg:mr-5"
                                    ><button
                                        type="submit"
                                    // className="flex max-[500px]:mb-5 max-[500px]:w-full lg:mr-5 justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                            Make Appointment
                                        </button></Link>

                                    <button
                                        type="submit"
                                        onClick={scrollToRecords}
                                        className="flex justify-center rounded-md bg-sky-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 max-[500px]:w-full"
                                    >
                                        View Record
                                    </button>
                                </div>
                            </div>

                            <div className='flex flex-col mt-10 mb-auto max-[500px]:mt-10 max-[500px]:ml-0 max-[500px]:flex-col'>
                                <div className='w-[44rem] ml-24 max-[400px]:w-auto max-[600px]:w-96 max-[670px]:m-auto max-[711px]:w-[35rem] max-[755px]:w-[40rem] max-[840px]:justify-center max-[840px]:ml-5'>
                                    <p className=' text-2xl font-semibold mb-8'>Appointments</p>
                                    <div className='flex justify-between mb-2 mr-14'>
                                        <div className='w-screen mr-4'>
                                            <input
                                                id='search'
                                                name='search'
                                                type='text'
                                                onChange={handleChangeSearchAppointmentPending}
                                                className='w-full px-4 py-2 rounded-full border-2 border-slate-200 shadow-md shadow-slate-300 outline-none'
                                                placeholder='Search Appointment'
                                            />
                                        </div>
                                        <div className='flex items-center'>
                                            <img
                                                src={search}
                                                alt='search-btn'
                                                className='cursor-pointer lg:w-20 sm:w-10'
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-5 h-[29rem] overflow-auto max-[500px]:mt-10">
                                        <ul role="list" className="divide-y divide-gray-100">
                                            {data
                                                .filter((item) => appointmentSearchPending ? `${item.firstname} ${item.lastname} ${item.sap}`.toLowerCase().includes(appointmentSearchPending.toLowerCase()) & item.appstatus === 'pending' : item.appstatus === "pending")
                                                .map((item) => (
                                                    <li key={item._id} className="flex flex-col gap-x-6 py-5 mr-5">
                                                        <div className={activeItemId === item._id ? "flex justify-between gap-x-6 pt-5 pb-2 pr-5 rounded-t-xl cursor-pointer" : "flex justify-between gap-x-6 pt-5 pb-2 pr-5 cursor-pointer"} onClick={() => handleActiveClick(item._id)}>
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
                                                            <div className="shrink-0 flex items-end max-[399px]:flex-col">
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation(); // Prevent parent click handler
                                                                        handleEditClick(item._id);
                                                                    }}
                                                                    className="flex w-20 justify-center rounded-md mx-2 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 shadow-md hover:bg-sky-600 hover:text-white hover:border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 max-[399px]:mx-0 max-[399px]:mb-1"
                                                                >
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation(); // Prevent parent click handler
                                                                        handleCancelClick(item._id);
                                                                    }}
                                                                    className="flex w-20 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 shadow-md hover:bg-sky-600 hover:text-white hover:border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                                                                >
                                                                    Cancel
                                                                </button>
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
                                                            <div className='flex justify-between items-center mt-4'>
                                                                <div className='mt-5'>
                                                                    <button onClick={() => handleStudentId(item.sap)} className='flex justify-center rounded-md bg-sky-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 max-[500px]:w-full'>View History</button>
                                                                </div>
                                                                <div className='flex items-center'>
                                                                    <p className='text-gray-500'>Status :</p>
                                                                    <img
                                                                        src={Pending}
                                                                        className='w-6 h-6 ml-2'
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-28 max-[500px]:mt-10' id='records' ref={recordsRef}>
                            <div className='flex justify-between items-start mb-5'>
                                <div>
                                    <p className='text-2xl font-semibold mb-5'>Records</p>
                                </div>
                                <div className='flex'>
                                    <button onClick={() => setStatusAll(true)} className='flex w-20 justify-center rounded-md mx-2 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 shadow-md hover:shadow-lg hover:text-black hover:sacle-105 hover:border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 max-[399px]:mx-0 max-[399px]:mb-1'>All</button>
                                    <button onClick={() => handleAppointmentStatus('done')} className='flex w-20 justify-center rounded-md mx-2 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 shadow-md hover:shadow-lg hover:text-black hover:sacle-105 hover:border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 max-[399px]:mx-0 max-[399px]:mb-1'>Completed</button>
                                    <button onClick={() => handleAppointmentStatus('cancel')} className='flex w-20 justify-center rounded-md mx-2 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 shadow-md hover:shadow-lg hover:text-black hover:scale-105 hover:border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 max-[399px]:mx-0 max-[399px]:mb-1'>Cancel</button>
                                </div>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <div className='w-screen mr-4'>
                                    <input
                                        id='search'
                                        name='search'
                                        type='text'
                                        onChange={handleChangeSearchAppointment}
                                        className='w-full px-4 py-2 rounded-full border-2 border-slate-200 shadow-md shadow-slate-300 outline-none'
                                        placeholder='Search Appointment'
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <img
                                        src={search}
                                        alt='search-btn'
                                        className='w-10 cursor-pointer'
                                    />
                                </div>
                            </div>
                            <ul role="list" className="divide-y divide-gray-100">
                                {data.filter((item) => appointmentSearch ? `${item.firstname} ${item.lastname} ${item.sap}`.toLowerCase().includes(appointmentSearch.toLowerCase()) : statusAll ? item.appstatus === 'done' | item.appstatus === 'pending' | item.appstatus === 'cancel' : item.appstatus === `${appointmentStatus}`).map((item) => (
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
                                            <div className='flex justify-between mt-5'>
                                                <div className='mt-5'>
                                                    <button onClick={() => handleStudentId(item.sap)} className='flex justify-center rounded-md bg-sky-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 max-[500px]:w-full'>View History</button>
                                                </div>
                                                <div className='flex justify-end mt-4'>
                                                    <button onClick={() => handleReAppointment(item._id)} className='flex justify-center rounded-md bg-sky-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 max-[500px]:w-full'>Re-appointment</button>
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
