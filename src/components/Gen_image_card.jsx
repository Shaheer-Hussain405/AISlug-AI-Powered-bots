import React from 'react'

const Gen_image_card = ({bodium = {img: null}}) => {
  return (
    <>
    <div className='group rounded-xl overflow-hidden relative'>
        <img src={bodium.img} alt="Super Generative" className='rounded-xl group-hover:rotate-6 group-hover:scale-110 ease duration-900'/>
        <div className='absolute inset-0 origin-top w-full group-hover:h-full h-0 bg-black/50 duration-900'></div>
    </div>
    </>
  )
}

export default Gen_image_card