import React from 'react'
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
    const Company_Links = ["Sign in","Register","Pricing","Privacy Policy","Career"]
    const Resources_Links = ["Ai Writer","Business AI","Ai Blog Writer","Ai COntent Writer","Ai Copy","Article Writing"]
  return (
    <>
    <section className='Footer_port mt-14 mb-10' id='Contact_direct'>
        <main className='lg:max-w-[1100px] md:max-w-[900px] sm:max-w-[600px] sm:mx-auto mx-10'>
            <div className='grid lg:grid-cols-[25%_20%_20%_35%] md:grid-cols-2 sm:grid-cols-1 lg:gap-1 gap-8'>
                    <div className='flex flex-col gap-3 text-gray-400 lg:px-5 sm:px-10 pr-5'>
                        <div className='text-2xl font-semibold text-white'><h1>AI <span className='text-[#ff7a33]'>Slug</span></h1></div>
                        <p>A Magical Tool to Optimize you content for the first know who you're targeting. Identify your target audience.</p>
                    </div>
                    <div className='flex flex-col gap-3 text-gray-400 lg:px-5 sm:px-10 pr-5'>
                        <div className='text-xl font-semibold text-white'><h1>Company</h1></div>
                        <ul className='flex flex-col gap-1 text-sm'>
                            {Company_Links.map((data, index)=>(
                                <li key={index}className='group py-1'>
                                    <a href="#" className='group-hover:text-blue-600 group-hover:translate-x-2 duration-200 block'>{data}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col gap-3 text-gray-400 lg:px-5 sm:px-10 pr-5'>
                        <div className='text-xl font-semibold text-white'><h1>Resources</h1></div>
                        <ul className='flex flex-col gap-1 text-sm'>
                            {Resources_Links.map((data, index)=>(
                                <li key={index}className='group py-1'>
                                    <a href="#" className='group-hover:text-blue-600 group-hover:translate-x-1 duration-200 block'>{data}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col gap-3 text-gray-400 lg:px-5 sm:pr-10 '>
                        <div className='text-xl font-semibold text-white'><h1>Contact Us</h1></div>
                        <form className='relative Email_port flex sm:flex-row flex-col sm:gap-0 gap-3 justify-between sm:items-center sm:border rounded-lg sm:overflow-hidden border-gray-500'>
                            <input type="email" required placeholder='Enter Email' className='sm:p-0 py-3 px-3 sm:ps-5 h-13  md:flex-1 flex-0 sm:border-0 border border-gray-500 outline-0  rounded-lg bg-transparent font-semibold'/>
                            <div>
                                <button type='submit' className='sm:h-13 h-12 sm:w-20 w-full cursor-pointer bg-[#426bff] sm:rounded-none rounded-lg text-white text-xl flex justify-center items-center'>
                                    <BsFillSendFill/>
                                </button>
                            </div>
                        </form>
                    </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default Footer