import React, { useState } from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";


const Paginations = () => {
  const [isActive,setIsActive] = useState(0)
const pages = [1,2,3,4,<MdOutlineArrowForwardIos/>]

  return (
    <>
    <div className='flex justify-center gap-4'>
        {pages.map((data, index)=>(
            <button className={`${isActive === index ? "bg-blue-600/90 border-blue-600/90":"bg-[#15152E] border-gray-600"} duration-200 hover:bg-blue-600/90 hover:border-blue-600/90 h-10 w-10 border cursor-pointer rounded-md flex justify-center items-center`}>
                {data}
            </button>
        ))}
    </div>
    </>
  )
}

export default Paginations