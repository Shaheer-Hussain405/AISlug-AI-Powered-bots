import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Featured_Carousel_Card = ({bodium = {img: "#",name:"",desc:""}}) => {
  return (
    <>
    <div className='Featured_Carousel_Card'>
        <div className='border border-gray-600 bg-[#15152c] rounded-2xl sm:h-[340px] sm:w-[300px] h-[320px] w-[280px] md:p-10 sm:p-7 p-5 mx-2 hover:border-yellow-300/65 delay-70 duration-550'>
            <div className='h-full Card_data109 flex flex-col gap-2 justify-between '>
                <div className='flex flex-col gap-8 justify-between'>
                    <div className='image_Carousel flex justify-start '>
                        <img src={bodium.img} alt="Carousel_Image" />
                    </div>
                    <div className='font-semibold hover:text-[#ff7a33] duration-150'>
                        <h4><a href="#" className='p1-1 block'>{bodium.name}</a></h4>
                    </div>
                    <div className='text-[#9fa5cd]'>
                        <p>{bodium.desc}</p>
                    </div>
                </div>
                <div className='group text-[#9fa5cd] hover:text-white duration-200'>
                    <button className='flex gap-2 items-center cursor-pointer py-2'><span className='group-hover:mr-3 duration-200'>Explore More</span> <span className='group-hover:text-[#ff7a33] duration-75'><MdArrowOutward/></span></button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Featured_Carousel_Card