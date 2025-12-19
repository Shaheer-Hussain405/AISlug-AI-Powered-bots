import React from 'react'
import Plans_Button from './Plans_Button'

const Plans_card = ({bodium = {},yearly = false}) => {
  return (
    <>
    <div className='Plans_Card group flex-1 bg-[#0f0f24] border border-[#3c3c76] hover:border-yellow-300/90 rounded-2xl py-8 px-10 duration-300 delay-75 '>
        <div className='relative flex flex-col gap-4 lg:text-start text-center'>

            <div className='sm:hidden block bottom-12 left-5 h-30 w-30 absolute bg-green-500 blur-[6rem] -z-5'></div>
            <div className='sm:hidden block bottom-15 right-5 h-40 w-40 absolute bg-yellow-500 blur-[6rem] -z-5'></div>
            <div className='sm:hidden block bottom-12 left-5 h-30 w-30 absolute bg-green-500 blur-[6rem] -z-5'></div>

            <div className='bottom-8 right-5 h-[70px] w-[70px] absolute bg-pink-500 blur-[7rem] duration-500 ease scale-0 group-hover:scale-100'></div>

            <div className={`${bodium.isPopular? "justify-between":"justify-start"} flex label text-blue-600 font-semibold`}>
                <span className='lg:text-2xl md:text-3xl text-xl'>
                    {bodium.label}
                </span>
                {bodium.isPopular && <span className='text-[#ff7a33] font-semibold text-sm py-1 px-1 bg-yellow-500/25 rounded-md'>Popular</span>}
            </div>
            <div className='my-3'>
                <h2 className='sm:text-[48px] text-3xl font-bold flex items-end'>
                    {yearly? bodium.price[1]:bodium.price[0]}
                    {yearly? (<span className='text-sm mx-2'>Yearly</span>):(<span className='text-sm mx-2'>Monthly</span>)}
                </h2>
            </div>
            <div>
                <Plans_Button/>
            </div>
            <div className='text-center my-5 text-white text-2xl font-semibold'>
                <h3>Features</h3>
            </div>
            <div >
                <ul className='list-disc list-inside flex flex-col gap-3 text-start text-gray-300'>
                {bodium.packages.map((points, index)=>(
                    <li key={index} className='sm:text-[16px] text-[14px] space-x-1'>{points}</li>
                ))}
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Plans_card