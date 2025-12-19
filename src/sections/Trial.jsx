import React from 'react'
import { MdArrowOutward } from "react-icons/md";


const Trial = () => {
  return (
    <>
    <section className='Trial_port mx-3 my-18'>
        <main className='max-w-[1300px] mx-auto'>
            <div className='relative sm:p-5 px-3 py-5 flex justify-center items-center border border-yellow-300/90 rounded-xl'>

                <div className='bottom-10 left-10 sm:h-[135px] sm:w-[135px] h-[115px] w-[115px] absolute bg-green-500 blur-[6rem] -z-10'></div>
                <div className='bottom-1/2 left-25 sm:w-[135px] h-[115px] w-[115px] absolute bg-pink-500 blur-[6rem] -z-10'></div>
                <div className='top-10 right-15 sm:h-[135px] sm:w-[135px] h-[115px] w-[115px] absolute bg-green-500 blur-[6rem] -z-10'></div>

                <div className='card-004 flex flex-col gap-6 md:p-20 sm:p-10 p-5'>
                    <div className='tag text-[#ff7a33] font-bold font-md text-center'>
                        <span>14 Day's Free Trial</span>
                    </div>
                    <div className='md:text-4xl text-2xl  font-semibold text-center md:leading-12'>
                        <h1>Be part of the future of AIMug Let’s<br/>Create Something</h1>
                    </div>
                    <div className='text-md text-gray-400 text-center'>
                        <p>Choose a topic & create something better than before, get started from today.<br/>No Credit Card Required</p>
                    </div>
                    <div className='flex justify-center'>
                        <button className='cursor-pointer flex items-center gap-3 bg-[#7173ff] py-4 px-7 rounded-lg text-sm font-semibold'>Get Started <MdArrowOutward/></button>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default Trial