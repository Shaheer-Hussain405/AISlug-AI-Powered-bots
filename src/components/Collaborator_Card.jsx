import React from 'react'


const Collaborator_Card = ({bodium = [], BlurEffect = false ,className = ""}) => {
  return (
    <>
    <div className={className}>
        <div className='relative h-20 w-20 bg-white/10 rounded-2xl border border-yellow-400'>
            {bodium.map((data)=>(
                <div className='p-1 h-full flex items-center justify-center flex-col gap-2'>
                    <img src={data.img} alt="Featured" className='sm:w-15 w-12'/>
                </div>
            ))}
            {BlurEffect && <div className={`inset-0  sm:h-[140px] sm:w-[140px] h-[120px] w-[120px] absolute bg-pink-500 blur-[9rem] -z-10`}></div>
            }
        </div>
    </div> 
    </>
  )
}

export default Collaborator_Card