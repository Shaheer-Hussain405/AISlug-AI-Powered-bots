import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io5";

const TopSroll_Button = () => {
    const [isActive,setIsActive] = useState(false)

    const handleTop = ()=>{window.scrollTo({top:0,behavior:"smooth"})}

    useEffect(()=>{
        const handelSroll = ()=>{
            setIsActive(window.scrollY > 80)
        }
        window.addEventListener("scroll", handelSroll)
        return ()=>{
            window.removeEventListener("scroll", handelSroll)
        }
    },[])

  return (
    <>
    <div className='z-299 fixed right-10 bottom-10 '>
        <button onClick={handleTop} className={`${isActive? "opacity-100 scale-100":"opacity-0 scale-0"} group overflow-hidden  text-lg cursor-pointer border rounded-sm border-gray-600 hover:border-white/50 hover:bg-orange-700 duration-250 bg-[#ff7a33] h-10 w-10 flex justify-center items-center`}>
            <span className='group-hover:-translate-y-1 duration-150'><IoIosArrowUp/></span>
        </button>
    </div>
    </>
  )
}

export default TopSroll_Button