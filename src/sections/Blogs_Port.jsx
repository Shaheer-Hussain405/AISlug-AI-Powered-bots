import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { CiCalendarDate } from "react-icons/ci";
import { LuClock2 } from "react-icons/lu";
import { HiCursorClick } from "react-icons/hi";
import { NavLink } from 'react-router-dom'
import Paginations from '../components/paginations'
import Blogs from "../Data/Blogs"

const Blogs_Port = () => {
  const Navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <>
    <section className='Blogs_Data mt-10'>
        <main className='max-w-[1300px] mx-auto'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mx-3'>
                {Blogs.map((data, index)=>(
                  <div key={index} className='flex flex-col gap-5'>
                      <div className={`${isLoaded? "hidden":"block"} bg-[#15152c] rounded-lg h-60 p-5`}>
                        <div className='w-full h-full shiny_load'></div>
                      </div>
                      <div onClick={()=>{Navigate(`/blog/${data.id}`)}} className={`${isLoaded? "block":"hidden"} md:justify-start h-60 justify-center relative group overflow-hidden rounded-lg`}>
                          <img onLoad={()=>{setIsLoaded(true)}} src={data.img} alt="Blog_img" className={`rounded-lg group-hover:scale-104 group-hover:rotate-2 duration-300 ease`}/>
                          <div className='overlay bg-black/60 absolute top-0 left-0 h-0 w-full group-hover:h-full duration-300 ease'></div>
                          <div className='absolute h-full bg-transparent w-full top-0 left-0 flex justify-center items-center'>
                            <span className='text-[#ff7a33] font-semibold text-md scale-y-0 group-hover:scale-y-100 duration-300 delay-55 origin-top flex items-center gap-2 select-none'>Click to Open <HiCursorClick/></span>
                          </div>
                      </div>
                      <button onClick={()=>{Navigate(`/blogs/${data.id}`)}} className='cursor-pointer py-2 hover:text-[#ff7a33] text-start duration-150 text-xl font-semibold'>
                          {data.title}
                      </button>
                      <div className='flex gap-5 text-sm mt-auto'>
                          <div className='flex items-center gap-2'>
                            <CiCalendarDate/>
                            <span>{data.date}</span>
                          </div>
                          <div className='flex items-center gap-2'>
                            <LuClock2/>
                            <span>{data.time}</span>
                          </div>
                      </div>
                  </div>
                ))}
            </div>
            <div className='mt-10'>
                <Paginations/>
            </div>
        </main>
    </section>
    </>
  )
}

export default Blogs_Port