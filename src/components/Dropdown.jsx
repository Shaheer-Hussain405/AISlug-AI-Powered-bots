import React from 'react'
import { NavLink } from 'react-router-dom'

const Dropdown = ({bodium = [],isOpen}) => { 

  if (bodium == []) return null

  return (
    <>
    <div className={`w-[160px] absolute left-0 top-10 rounded-2xl bg-[#0e0d1d] px-4 my-2 border-gray-800 group-hover:h-[115px] group-hover:border border-0 h-0  overflow-hidden duration-550`}>
        <div>
            <ul className='flex flex-col py-2'>
                {bodium.map((data, index)=>(
                    <li key={index} className='hover:text-[#ff7a33] pb-2 hover:ms-2 duration-400'>
                        <NavLink to={data.url} className={({isActive})=> `flex gap-2 items-center ${isActive? "text-[#ff7a33]":"text-gray-400"}`}>
                            <span className='font-bold'>|</span>
                            <span >
                                {data.name}
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    </>
  )
}

export default Dropdown;