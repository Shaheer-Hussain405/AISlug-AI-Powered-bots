import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

const Team_Card = ({img,name,occupation}) => {
  return (
    <>
    <div className='flex flex-col gap-2 text-center w-45 overflow-hidden'>
        <div className='relative group'>
            <img src={img} alt="" className='object-cover border-gray-600 border rounded-2xl '/>
            <div className='absolute top-1/2 left-1/2 translate-[-50%] h-42 w-42 bg-black/75 rounded-xl opacity-0 group-hover:opacity-100 duration-200 z-2'></div>
            <div className='absolute top-1/2 left-1/2 translate-[-50%] flex gap-2 opacity-0 group-hover:opacity-100 text-white z-4 text-xl'>
                <button className='cursor-pointer hover:text-blue-600 p-1 translate-y-15 group-hover:translate-y-0 duration-400 ease'><FaFacebook/></button>
                <button className='cursor-pointer hover:text-blue-600 p-1 translate-y-15 group-hover:-translate-y-2 duration-400 delay-50 ease'><FaGithub/></button>
                <button className='cursor-pointer hover:text-blue-600 p-1 translate-y-15 group-hover:translate-y-0 duration-400 delay-100 ease'><AiFillTwitterCircle/></button>
            </div>
        </div>
        <div className='sm:text-lg text-md font-semibold'>
            <h3>{name}</h3>
        </div>
        <div className='text-gray-400 md:text-md text-sm'>
            <span>{occupation}</span>
        </div>
    </div>
    </>
  )
}

export default Team_Card