import React from 'react'

const Featured_Hero_card = ({bodium = [], BlurEffect = false ,className = ""}) => {
  return (
    <>
    <div className={className}>
        <div className='relative sm:h-30 sm:w-30 h-25 w-25 bg-white/10 rounded-xl border border-gray-600'>
            {bodium.map((data)=>(
                <div className='p-1 h-full flex items-center justify-center flex-col gap-2'>
                    <img src={data.img} alt="Featured" className='sm:w-15 w-10'/>
                    <h2 className='text-center sm:text-md text-[12px]'>{data.name}</h2>
                </div>
            ))}
            {BlurEffect && <div className={`inset-0  sm:h-[140px] sm:w-[140px] h-[120px] w-[120px] absolute bg-pink-500 blur-[7rem] -z-10`}></div>
            }
        </div>
    </div> 
    </>
  )
}

export default Featured_Hero_card