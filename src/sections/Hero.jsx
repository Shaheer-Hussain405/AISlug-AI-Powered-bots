import React from 'react'
import { NavLink } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import FHC from '../components/Featured_Hero_card';
import Cntnt_writing from "../assets/Hero/content_writing.png"
import Ai_image from "../assets/Hero/ai-image.png"
import Ai_code from "../assets/Hero/ai-code.png"
import Ai_chat from "../assets/Hero/ai-chat.png"
import Ai_audio from "../assets/Hero/ai-audio.png"
import Ai_speech from "../assets/Hero/ai-speech.png"
import CPU from "../assets/Hero/cpu.png"
import Rating from '../components/Ratings';


const Hero = () => {
  return (
    <>
    <section className='container mx-auto mt-[3.8rem]'>
        <main className='relative hero-terminal flex flex-col gap-3 mx-5'>
            <div className='text-center sm:text-[46px] text-[36px] font-semibold leading-tight'>
                <h1>Explore the Possibilities of<br/> AI 🤖 with <span className='effect_brand group '>AI<span className='text-[#ff7a33]  group-hover:text-white duration-300'>Slug</span></span></h1>
            </div>
            <div className='my-2 flex items-center justify-center'>
                <NavLink to="/login" className='cursor-pointer flex items-center gap-3 bg-[#7173ff] py-3 px-5 rounded-lg text-sm font-semibold'>Get Started <MdArrowOutward/></NavLink>
            </div>

            {/* || Featured Her Parent || */}

            <div className='Wrapper-Features my-2 py-2'>
                <div className='flex flex-col gap-2'>
                        <div className='flex justify-center'>
                            <FHC bodium={[{name: "Ai Code Generator",img: Ai_code}]} BlurEffect={true} className='sm:hidden'/>
                        </div>
                    <div className='flex sm:justify-evenly justify-between'>
                        <FHC bodium={[{name: "Ai Content Writing",img: Cntnt_writing}]} />
                        <FHC bodium={[{name: "Ai Image Generator",img: Ai_image}]}/>
                    </div>
                    <div className='flex justify-evenly items-center'>
                        <FHC bodium={[{name: "Ai Code Generator",img: Ai_code}]} BlurEffect={true} className='sm:block hidden'/>
                        <div className='relative sm:m-0 m-2 border flex justify-center items-center border-white bg-white/10 rounded-[45px] h-[170px] w-[170px] sm:h-[220px] sm:w-[220px]'>
                            <img src={CPU} alt="" className='sm:w-35 w-28'/>
                            <div className='inset-0 sm:h-[135px] sm:w-[135px] h-[115px] w-[115px] absolute bg-green-500 blur-[6rem] -z-10'></div>
                        </div>
                        <FHC bodium={[{name: "Ai Chat Bot",img: Ai_chat}]} BlurEffect={true} className='sm:block hidden'/>
                    </div>
                    <div className='flex sm:justify-evenly justify-between'>
                        <FHC bodium={[{name: "Generate Text to Audio",img: Ai_audio}]}/>
                        <FHC bodium={[{name: "Speech to Text",img: Ai_speech}]}/>
                    </div>
                    <div className='flex justify-center'>
                        <FHC bodium={[{name: "Ai Chat Bot",img: Ai_chat}]} BlurEffect={true} className='sm:hidden'/>
                    </div>
                </div>
            </div>
            <div className='Ratings_Reviews_port mt-[5rem] mb-[2rem] font-semibold'>
                <div className='flex md:flex-row flex-col  items-center justify-center gap-5'>
                    <Rating/>
                    <Rating is1st={false}/>
                </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default Hero