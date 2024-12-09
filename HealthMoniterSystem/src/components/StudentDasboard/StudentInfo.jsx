import React from 'react'
import useFetch from '../../hooks/useFetch'
import studentimg from '../../assets/studentimg.png'

export default function StudentInfo() {

    // const { data, loading, error } = useFetch("http://localhost:8080/api/users/67126a758ca8e6bd083f6245")

    // console.log(data);
    const data = JSON.parse(localStorage.getItem("user_data"));

    return (
        <>
            <div className="flex flex-col leading-10 max-w-xl mt-8 rounded-lg overflow-hidden bg-gray-50 shadow-xl border-2 border-gray-100">
                <div className='pt-8 pl-8 pr-8'>
                    <img className="m-auto h-60 rounded-full" src={studentimg} alt="Sunset in the mountains" />
                </div>
                <div className="flex flex-col text-center mt-5 px-6 py-4">
                    <p className="font-bold text-xl mb-2">{data.firstname} {data.lastname}</p>
                    <p className="text-gray-500 text-base font-medium">
                        {data.sap}
                    </p>
                </div>
                <div className='flex justify-center items-start flex-col mt-5 m-5 text-gray-800'>
                    <p>Email : <sapn className='text-gray-500'>{data.email}</sapn></p>
                    <p>Phone No. : <sapn className='text-gray-500'>{data.email}</sapn></p>
                    <p>Course : <sapn className='text-gray-500'>{data.course}</sapn></p>
                    <p>Stream : <sapn className='text-gray-500'>{data.email}</sapn></p>
                    <p>Specialization : <sapn className='text-gray-500'>{data.specialization}</sapn></p>
                    <p>Gender : <sapn className='text-gray-500'>{data.gender}</sapn></p>
                    <p>Age : <sapn className='text-gray-500'>{data.age}</sapn></p>
                </div>
            </div>
        </>
    )
}
