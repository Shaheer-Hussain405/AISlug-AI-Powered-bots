import React from 'react'

const WWD_Card = ({bodium = []}) => {
  return (
    <div className='lg:text-start text-center flex flex-col gap-5 lg:px-2 px-5'>
        <div className='flex lg:justify-start justify-center hover:scale-96 duration-600 ease'>
            <img src={bodium.img} alt="about us" />
        </div>
        <div className='lg:text-xl text-lg font-semibold hover:text-[#ff7a33] duration-300 ease'>
            <h3>{bodium.name}</h3>
        </div>
        <div className='text-gray-400 text-md'>
            <p>{bodium.para}</p>
        </div>
    </div>
  )
}

export default WWD_Card