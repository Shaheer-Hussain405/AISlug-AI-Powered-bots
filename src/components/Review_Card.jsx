import React from 'react'
import { FaStar } from "react-icons/fa6";


const Review_Card = ({bodium = []}) => {
  return (
    <>
    <div className='my-3 border rounded-2xl border-gray-600 duration-300 hover:border-yellow-300/90 md:p-8 p-6'>
        <div className='flex flex-col justify-between h-full gap-5'>
            <div className='flex gap-3 items-center'>
                <img src={bodium.userImg} alt="userImg" className='rounded-full w-10'/>
                <div className='flex flex-col'>
                    <h4 className='font-semibold'>{bodium.user}</h4>
                    <p>{bodium.occup}</p>
                </div>
            </div>
            <div className='font-semibold text-lg'>
                <h3>{bodium.title}</h3>
            </div>
            <div className='text-gray-400 text-md'>
                <p>{bodium.desc}</p>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <img src={bodium.img} alt="Brand_Trust"/>
                </div>
                <div className='py-2 px-3 rounded-2xl bg-amber-500/30 flex items-center h-8 gap-1'>
                    <span>{bodium.rating}</span>
                    <span className='text-yellow-500'>
                        <FaStar/>
                    </span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Review_Card