import React from 'react'
import colab_1 from "../assets/Collaborators/collaboration-1.png"
import colab_2 from "../assets/Collaborators/collaboration-2.png"
import colab_3 from "../assets/Collaborators/collaboration-3.png"
import colab_4 from "../assets/Collaborators/collaboration-4.png"
import colab_5 from "../assets/Collaborators/collaboration-5.png"
import colab_6 from "../assets/Collaborators/collaboration-6.png"
import colab_7 from "../assets/Collaborators/collaboration-7.png"
import CPU from "../assets/Hero/cpu.png"
import Ccard from '../components/Collaborator_Card'

const Collaboraions = () => {
  return (
    <>
    <section className=' Collaborations_port  lg:my-[3rem] mx-3 '>
        <main className='flex flex-col gap-5 max-w-[1280px] mx-auto text-center border border-gray-600 hover:border-yellow-300/90 delay-70 duration-550 rounded-2xl lg:p-20 py-8 '>
            <div className='tag text-[#ff7a33] font-semibold text-md'>
                <h5>Integrations With</h5>
            </div>
            <div className='md:text-4xl text-3xl font-semibold'>
                <h2>Streamlining Collaboration<br/> with <span className='effect_brand group'>AI<span className='text-[#ff7a33] group-hover:text-white duration-300'>Slug</span></span></h2>
            </div>
            <div className='flex justify-center mt-10'>
                <div className='card-004 Wrapper-Collaboratos my-2 sm:px-15 px-4 w-240'>
                    <div className='flex flex-col md:gap-2 sm:gap-1'>
                        <div className='flex justify-center'>
                            <Ccard bodium={[{img: colab_1}]} BlurEffect={true} className='sm:hidden'/>
                        </div>
                        <div className='flex sm:justify-evenly justify-between'>
                            <Ccard bodium={[{img: colab_2}]} />
                            <Ccard bodium={[{img: colab_3}]}/>
                        </div>
                        <div className='flex sm:justify-between justify-center items-center'>
                            <Ccard bodium={[{img: colab_1}]} BlurEffect={true} className='sm:block hidden'/>
                            <div className='relative sm:m-0 m-2 sm:w-40 sm:h-40 w-25 h-25 flex justify-center items-center rounded-full border-b-2 border-b-yellow-600'>
                                <img src={CPU} alt="" className='sm:w-35 w-28'/>
                                <div className='inset-0 sm:h-[135px] sm:w-[135px] h-[115px] w-[115px] absolute bg-green-500 blur-[9rem] -z-10'></div>
                            </div>
                            <Ccard bodium={[{img: colab_4}]} BlurEffect={true} className='sm:block hidden'/>
                        </div>
                        <div className='flex sm:justify-evenly justify-between'>
                            <Ccard bodium={[{img: colab_5}]}/>
                            <Ccard bodium={[{img: colab_6}]}/>
                        </div>
                        <div className='flex justify-center'>
                            <Ccard bodium={[{img: colab_4}]} BlurEffect={true} className='sm:hidden'/>
                            <Ccard bodium={[{img: colab_7}]} BlurEffect={true} className='mt-5 sm:block hidden'/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default Collaboraions