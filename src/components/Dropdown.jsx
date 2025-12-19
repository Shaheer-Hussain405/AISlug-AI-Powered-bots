import React from 'react'

const Dropdown = ({bodium = []}) => { 

  if (bodium == []) return null

  return (
    <>
    <div className='duration-550 transition-all origin-top group-hover:h-[155px] h-0 overflow-hidden w-[160px] absolute top-12'>
        <div className=' rounded-2xl bg-[#0e0d1d] text-white py-2 px-4 my-2 border border-gray-800'>
            <ul className='flex flex-col '>
                {bodium.map((data, index)=>(
                    <li key={index} className='hover:text-[#ff7a33] pb-2 hover:ms-2 duration-400'>
                        <a href={data.url} className='flex gap-2 items-center'>
                            <span className='font-bold'>|</span>
                            <span >
                                {data.name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    </>
  )
}

export default Dropdown;