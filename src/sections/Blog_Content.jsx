import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Blog_Content = ({bodium = {}}) => {
  return (
    <>
    <section className='Content_blog mx-3 mt-20'>
        <main className='mx-auto max-w-[1200px]'>
            <div>
                <div className='text-Start font-semibold sm:text-4xl text-2xl md:px-15 px-4'>
                    {bodium.title}
                </div>
                <div className='mt-10 flex flex-col md:gap-10 sm:gap-6 gap-4 mx-2'>
                    <div className='grid md:grid-cols-[55%_45%] grid-cols-1'>
                        <div className='flex flex-col justify-center gap-4'>
                            <h1 className='sm:text-2xl text-xl font-semibold'>{bodium.content[0].heading}</h1>
                            <p className='text-gray-300 md:text-lg sm:text-md text-sm'>{bodium.content[0].para}</p>
                        </div>
                        <div>
                            <img src={bodium.img} alt="" className='w-150 md:p-5 md:my-0 my-6'/>
                        </div>
                    </div>
                    <div className='max-w-[800px] mx-auto flex flex-col gap-8'>
                        <div className='flex flex-col justify-center gap-8'>
                            <h1 className='sm:text-2xl text-xl font-semibold'>{bodium.content[1].heading}</h1>
                            <p className='text-gray-300 md:text-lg sm:text-md text-sm'>{bodium.content[1].para}</p>
                        </div>
                        <div className='flex flex-col justify-center gap-8'>
                            <h1 className='sm:text-2xl text-xl font-semibold'>{bodium.content[2].heading}</h1>
                            <p className='text-gray-300 md:text-lg sm:text-md text-sm'>{bodium.content[2].para}</p>
                        </div>
                        <div className='border-[#3c3c77] border bg-[#15152e] rounded-xl md:p-15 p-8'>
                            <div className='flex flex-col gap-5 relative ps-5'>
                                <div className='absolute top-1 left-0 h-[60%] w-1 bg-[#ff7a33]'></div>
                                <p className='sm:font-semibold sm:text-lg text-md text-gray-300'>There are many different forms of travel, including road trips, cruises, backpacking, and more, each offering its own unique set of experiences and adventures.</p>
                                <span className='sm:text-md text-sm font-bold'>Angela B. Harris</span>
                            </div>
                        </div>
                        <div className='content_footer'>
                            <div className='bg-[#3c3c77] h-[2px] my-8'></div>
                            <div className='flex md:flex-row flex-col md:gap-0 gap-5 md:justify-between'>
                                <div className='flex gap-2'>
                                    {["Open AI","Copy Writing","AI Assistant"].map((item)=>(
                                        <div className='py-1 px-2 border hover:bg-[#3c3c77] duration-150 ease cursor-pointer border-[#3c3c77] rounded-sm bg-[#15152e] text-[13px] font-normal'><span>{item}</span></div>
                                    ))}
                                </div>
                                <div className='flex gap-2 text-[#5c5c91] text-2xl'>
                                    <FaFacebook/>
                                    <FaGithub/>
                                    <FaInstagramSquare/>
                                    <FaLinkedin/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default Blog_Content