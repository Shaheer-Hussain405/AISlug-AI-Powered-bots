import React from 'react'
import { IoStar } from "react-icons/io5";

const Star = ({type = 1}) => {
  return (
    <>
    {type === 1 &&
        <div className='flex justify-center items-center bg-[#00b67b] h-5 w-5'>
            <IoStar/>
        </div>
    }
    {type === 2 &&
        <div className='text-yellow-600'>
          <IoStar/>
        </div>
    }
    </>
  )
}

export default Star