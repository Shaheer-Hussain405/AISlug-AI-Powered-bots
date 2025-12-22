import React from 'react'
import { NavLink } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";


const About_details = ({bodium = [],button = true}) => {
  return (
    <>
    <section className='Trial_port mx-3 mt-10'>
            <main className='max-w-[1300px] mx-auto'>
                <div className='relative sm:p-5 px-3 py-5 flex justify-center items-center'>
    
                    <div className='bottom-10 right-10 sm:h-[135px] sm:w-[135px] h-[115px] w-[115px] absolute bg-green-500 blur-[6rem] -z-10'></div>
                    <div className='bottom-1/2 left-25 sm:w-[135px] h-[115px] w-[115px] absolute bg-pink-500 blur-[6rem] -z-10'></div>
    
                    <div className='card-004 flex flex-col gap-5 p-5'>
                        <div className='tag text-[#ff7a33] font-bold font-md text-center'>
                            <span>{bodium.tag}</span>
                        </div>
                        <div className='md:text-4xl text-2xl  font-semibold text-center md:leading-12'>
                            <h1>{bodium.title}</h1>
                        </div>
                        <div className='text-md text-gray-400 text-center'>
                            <p>Mastering the Art of AI Tool: Unleashing the Power of Automated<br/>Creativity with AISlug</p>
                        </div>
                        {button &&
                        <div className='flex justify-center'>
                            <NavLink to="/login" className='cursor-pointer flex items-center gap-3 bg-[#7173ff] py-4 px-7 rounded-lg text-sm font-semibold'>Get Started <MdArrowOutward/></NavLink>
                        </div>}
                    </div>
                </div>
            </main>
        </section>
    </>
  )
}

export default About_details