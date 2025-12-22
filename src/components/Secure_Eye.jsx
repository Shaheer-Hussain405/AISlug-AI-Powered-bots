import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";

const Secure_Eye = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handelPassView = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <>
    <div onClick={handelPassView} className='relative overflow-hidden h-5 w-5 p-5 cursor-pointer hover:text-purple-900'>
        <span className={`${isOpen? "scale-y-100":"scale-y-0"} duration-200 absolute top-1/2 left-1/2 -translate-[50%] `}>
            <FaEye/>
        </span>
        <span className={`${isOpen? "scale-y-0":"scale-y-100"} duration-200 absolute top-1/2 left-1/2 -translate-[50%] `}>
            <LuEyeClosed/>
        </span>
    </div>
    </>
  )
}

export default Secure_Eye