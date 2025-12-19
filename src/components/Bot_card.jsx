import React from 'react'
import { MdArrowOutward } from "react-icons/md";


const Bot_card = ({bodium = {}}) => {
  return (
    <>
        <div className='h-auto  hover:border-yellow-300/90 delay-70 duration-550 border border-gray-600 rounded-2xl flex gap-5 flex-col p-3 py-8 sm:p-8 lg:mx-3'>
          <div className='text-md text-[#ff7a33] text-center'>
            <h5>{bodium.tag}</h5>
          </div>
          <div className='sm:text-3xl text-2xl font-semibold text-center'>
              <h2>{bodium.title}</h2>
          </div>
          <div className='text-gray-400 text-sm text-center'>
            <p>{bodium.para}</p>
          </div>
          <div className='text-blue-500 flex justify-center relative'>
            <button className='flex items-center gap-3 py-2 px-3 group cursor-pointer'><span>Start Chat</span> <span className='group-hover:translate-x-3 duration-150'><MdArrowOutward/></span></button>
            <div className='top-10 right-0 sm:h-[90px] sm:w-[90px] h-[80px] w-[80px] absolute bg-green-500 blur-[6rem] z-2'></div>
          </div>
          <div className='relative flex justify-center'>
            <figure>
                <img src={bodium.img} alt=""  className='rounded-xl shadow-white shadow-sm '/>
            </figure>
            <div className='bottom-0 left-0 sm:h-[90px] sm:w-[90px] h-[80px] w-[80px] absolute bg-pink-300 blur-[6rem] z-2'></div>
          </div>
        </div>
    </>
  )
}

export default Bot_card