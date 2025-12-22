import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const Jobs_Card = ({bodium = []}) => {
  return (
    <>
    <div className='job_card border border-gray-600 rounded-lg md:p-10 p-6'>
        <div className='flex md:flex-row flex-col md:gap-0 gap-8 md:justify-between md:items-center'>
            <div className='flex md:flex-row flex-col items-start gap-8'>
                <div className='h-15 w-15 bg-[#262651] rounded-lg flex justify-center items-center p-4'>
                    <img src={bodium.img} alt="company_logo" className='w-25'/>
                </div>
                <div className='flex flex-col sm:gap-3 gap-4 w-full'>
                    <h3 className='sm:text-2xl text-xl font-semibold md:text-start text-center'>{bodium.title}</h3>
                    <div className='flex sm:gap-5 gap-3 sm:flex-row flex-col text-gray-400 font-semibold sm:text-md text-sm'>
                        <span className='text-white'>{bodium.company_name}</span>
                        <span>{bodium.employees_needed}</span>
                        <span>{bodium.salary_range}</span>
                    </div>
                    <div className='flex md:justify-start justify-end gap-5 mx-2 text-sm'>
                        <div className='border border-gray-600 hover:border-blue-600/90 hover:bg-blue-600/90 py-1 px-2 rounded-lg bg-[#15152e]'>
                        <span>{bodium.type}</span></div>
                        <div className='border border-gray-600 hover:border-blue-600/90 hover:bg-blue-600/90 py-1 px-2 rounded-lg bg-[#15152e]'>
                        <span>{bodium.country}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex md:flex-col sm:flex-row flex-col md:justify-start justify-between items-center gap-3'>
                <NavLink to="/login" className='bg-[#6d73ff] cursor-pointer active:scale-98 rounded-lg py-3 px-4 font-semibold flex items-center gap-2 text-sm'>
                    <span>Apply job</span>
                    <span className='text-xl'><FiArrowUpRight/></span>
                </NavLink>
                <p className='text-gray-400 sm:text-md text-sm'>{bodium.posted_time}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Jobs_Card