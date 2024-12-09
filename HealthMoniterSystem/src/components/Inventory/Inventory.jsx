import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import search from '../../assets/search.png'

const TABLE_HEAD = ["Name", "Purchase Date", "Expiry Date", "Status", "Quantity"];

const equipment_HEAD = ["Name", "Purchase Date", "Status",];

const medicne_ROWS = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "Aspirin",
        email: "john@creative-tim.com",
        job: "Manager",
        org: "Organization",
        online: true,
        purchasedate: "23/04/18",
        exirydate: "24/08/18",
        quantity: "20",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Lisinopril",
        email: "alexa@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: false,
        purchasedate: "23/04/18",
        exirydate: "24/08/18",
        quantity: "20",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Levothyroxine",
        email: "laurent@creative-tim.com",
        job: "Executive",
        org: "Projects",
        online: false,
        purchasedate: "23/04/18",
        exirydate: "24/08/18",
        quantity: "20",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Atorvastatin",
        email: "michael@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: true,
        purchasedate: "23/04/18",
        exirydate: "24/08/18",
        quantity: "20",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Simvastatin",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        purchasedate: "23/04/18",
        exirydate: "24/08/18",
        quantity: "20",
    },
];

const equipment_ROWS = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "Hospital Stretchers",
        email: "john@creative-tim.com",
        job: "Manager",
        org: "Organization",
        online: true,
        purchasedate: "23/04/18",
        exirydate: "24/08/18",
        quantity: "20",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Defibrillators",
        email: "alexa@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: false,
        purchasedate: "23/04/18",
        exirydate: "24/08/18",
        quantity: "20",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Anesthesia Machines",
        email: "laurent@creative-tim.com",
        job: "Executive",
        org: "Projects",
        online: false,
        purchasedate: "23/04/18",
        exirydate: "24/08/18",
        quantity: "20",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Patient Monitors",
        email: "michael@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: true,
        purchasedate: "23/04/18",
        exirydate: "24/08/18",
        quantity: "20",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Sterilizers",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        purchasedate: "23/04/18",
        exirydate: "24/08/18",
        quantity: "20",
    },
];

const stuff_ROWS = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "Band-Aids",
        email: "john@creative-tim.com",
        job: "Manager",
        org: "Organization",
        online: true,
        quantity: "20",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Antibiotic Ointment",
        email: "alexa@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: false,
        purchasedate: "23/04/18",
        exirydate: "24/08/18",
        quantity: "20",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Ibuprofen",
        email: "laurent@creative-tim.com",
        job: "Executive",
        org: "Projects",
        online: false,
        purchasedate: "23/04/18",
        exirydate: "24/08/18",
        quantity: "20",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Bandage Wrap",
        email: "michael@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: true,
        quantity: "20",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Instant Cold Compress",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        quantity: "20",
    },
];

export default function Inventory() {

    const [activeDiv, setActiveDiv] = useState(1);

    return (
        <div>
            <div className="min-h-full">
                <Navbar />

                <header className="bg-white shadow">
                    <div className="flex justify-between items-center mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Inventory</h1>
                        </div>
                        <div className='flex'>
                            <button onClick={() => setActiveDiv(1)} className='flex justify-center rounded-md mx-2 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 shadow-md hover:shadow-lg hover:text-black hover:sacle-105 hover:border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 max-[399px]:mx-0 max-[399px]:mb-1'>Medicines</button>
                            <button onClick={() => setActiveDiv(2)} className='flex justify-center rounded-md mx-2 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 shadow-md hover:shadow-lg hover:text-black hover:sacle-105 hover:border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 max-[399px]:mx-0 max-[399px]:mb-1'>Equipment</button>
                            <button onClick={() => setActiveDiv(3)} className='flex justify-center rounded-md mx-2 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 shadow-md hover:shadow-lg hover:text-black hover:scale-105 hover:border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 max-[399px]:mx-0 max-[399px]:mb-1'>Extra Stuff</button>
                        </div>
                    </div>

                </header>
                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div>
                            {activeDiv === 1 && <div>
                                <div>
                                    <p className=' text-2xl font-semibold mt-5 mb-14'>Medicines</p>
                                </div>
                                <div className="flex items-center justify-between pb-4 my-10 bg-white dark:bg-gray-900">
                                    <div className='w-screen mr-4'>
                                        <input
                                            id='search'
                                            name='search'
                                            type='text'
                                            // onChange={handleChangeSearchAppointment}
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
                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table className="w-full text-sm text-left text-gray-500">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                            <tr>
                                                {TABLE_HEAD.map((head) => (
                                                    <th key={head} className="px-6 py-3">
                                                        {head}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {medicne_ROWS.map((row, index) => (
                                                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                                    <th className="flex items-center px-6 py-4">
                                                        {/* <img className="w-10 h-10 rounded-full" src={row.img} alt={row.name} /> */}
                                                        <div className="ml-3">
                                                            <div className="text-base font-semibold">{row.name}</div>
                                                            {/* <div className="font-normal text-gray-500">{row.email}</div> */}
                                                        </div>
                                                    </th>
                                                    <td className="px-6 py-4">{row.purchasedate}</td>
                                                    <td className="px-6 py-4">{row.exirydate}</td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center">
                                                            <div
                                                                className={`h-2.5 w-2.5 rounded-full ${row.online ? "bg-green-500" : "bg-red-500"} mr-2`}
                                                            ></div>
                                                            {row.online ? "Available" : "Unavailable"}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {row.quantity}
                                                        {/* <a href="#" className="font-medium text-blue-600 hover:underline">
                                                    Edit user
                                                </a> */}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>}
                            {activeDiv === 2 && <div>
                                <div>
                                    <p className=' text-2xl font-semibold mt-5 mb-14'>Equipment</p>
                                </div>
                                <div className="flex items-center justify-between pb-4 my-10 bg-white dark:bg-gray-900">
                                    <div className='w-screen mr-4'>
                                        <input
                                            id='search'
                                            name='search'
                                            type='text'
                                            // onChange={handleChangeSearchAppointment}
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
                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table className="w-full text-sm text-left text-gray-500">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                            <tr>
                                                {equipment_HEAD.map((head) => (
                                                    <th key={head} className="px-6 py-3">
                                                        {head}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {equipment_ROWS.map((row, index) => (
                                                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                                    <th className="flex items-center px-6 py-4">
                                                        {/* <img className="w-10 h-10 rounded-full" src={row.img} alt={row.name} /> */}
                                                        <div className="ml-3">
                                                            <div className="text-base font-semibold">{row.name}</div>
                                                            {/* <div className="font-normal text-gray-500">{row.email}</div> */}
                                                        </div>
                                                    </th>
                                                    <td className="px-6 py-4">{row.purchasedate}</td>
                                                    {/* <td className="px-6 py-4">{row.exirydate}</td> */}
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center">
                                                            <div
                                                                className={`h-2.5 w-2.5 rounded-full ${row.online ? "bg-green-500" : "bg-red-500"} mr-2`}
                                                            ></div>
                                                            {row.online ? "Working" : "Not Working"}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>}
                            {activeDiv === 3 && <div>
                                <div>
                                    <p className=' text-2xl font-semibold mt-5 mb-14'>Extra Stuff</p>
                                </div>
                                <div className="flex items-center justify-between pb-4 my-10 bg-white dark:bg-gray-900">
                                    <div className='w-screen mr-4'>
                                        <input
                                            id='search'
                                            name='search'
                                            type='text'
                                            // onChange={handleChangeSearchAppointment}
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
                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table className="w-full text-sm text-left text-gray-500">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                            <tr>
                                                {TABLE_HEAD.map((head) => (
                                                    <th key={head} className="px-6 py-3">
                                                        {head}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {stuff_ROWS.map((row, index) => (
                                                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                                    <th className="flex items-center px-6 py-4">
                                                        {/* <img className="w-10 h-10 rounded-full" src={row.img} alt={row.name} /> */}
                                                        <div className="ml-3">
                                                            <div className="text-base font-semibold">{row.name}</div>
                                                            {/* <div className="font-normal text-gray-500">{row.email}</div> */}
                                                        </div>
                                                    </th>
                                                    <td className="px-6 py-4">{row.purchasedate}</td>
                                                    <td className="px-6 py-4">{row.exirydate}</td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center">
                                                            <div
                                                                className={`h-2.5 w-2.5 rounded-full ${row.online ? "bg-green-500" : "bg-red-500"} mr-2`}
                                                            ></div>
                                                            {row.online ? "Available" : "Unavailable"}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {row.quantity}
                                                        {/* <a href="#" className="font-medium text-blue-600 hover:underline">
                                                    Edit user
                                                </a> */}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
