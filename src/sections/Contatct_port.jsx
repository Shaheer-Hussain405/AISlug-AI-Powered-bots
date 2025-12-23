import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";

const Contatct_port = () => {
    const Dev_Info = [
        {img: IoHomeSharp, label:"Address", info: "Hali Rd, Industrial Area Hyderabad"},
        {img: IoCallSharp , label:"Phone", info: "+92700953601"},
        {img: MdEmail , label:"Email", info: "shaheeri8213@gmail.com"}
    ]
  return (
    <>
    <section className='Contact_port mt-15 mx-5'>
        <main className='max-w-[1000px] mx-auto'>
            <div className='flex flex-col gap-10'>
                <div className='md:text-4xl text-center sm:text-3xl text-2xl font-semibold'>
                    <h1>Contact Us</h1>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-3 gap-10'>
                    <div className='flex items-center'>
                        <div className='flex flex-col gap-8'>
                            {Dev_Info.map((data,index)=>(
                                <div key={index} className='flex items-center gap-2'>
                                    <div className='text-2xl'>
                                        <div className='my-auto h-10 w-10 bg-white rounded-full flex justify-center items-center text-black'>
                                            <data.img/>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-1 text-gray-300'>
                                        <h2 className='font-semibold text-[#ff7a33]'>{data.label}</h2>
                                        <p className='md:text-md text-sm'>{data.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='bg-[#15152c] border-gray-600 border rounded-xl md:p-8 p-6'>
                        <h3 className='text-2xl font-semibold text-[#ff7a33]'>Send Message</h3>
                        <form action="action.php" className='w-full flex flex-col gap-4 mt-5'>
                            <div>
                                <label htmlFor="cu1" >Full Name</label>
                                <input type="text" required id='cu1' className='w-full border-0 border-b border-gray-400 px-1 outline-0 pb-2 text-gray-300'/>
                            </div>
                            <div>
                                <label htmlFor="cu2" >Email</label>
                                <input type="email" required id='cu2' className='w-full border-0 border-b border-gray-400 px-1 outline-0 pb-2 text-gray-300'/>
                            </div>
                            <div>
                                <label htmlFor="cu3" >Message</label>
                                <input type="text" required id='cu3' className='w-full border-0 border-b border-gray-400 px-1 outline-0 pb-2 text-gray-300'/>
                            </div>
                            <div>
                                <button type='submit' className='sm:h-13 h-12 round w-full cursor-pointer bg-[#426bff]  rounded-lg text-white text-xl flex justify-center items-center'>
                                    <BsFillSendFill/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>

    </>
  )
}

export default Contatct_port