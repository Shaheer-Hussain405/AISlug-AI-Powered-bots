import React, { useEffect, useState } from 'react'
import FCC from '../components/Featured_Carousel_Card'
import Ai_Writing from "../assets/Hero/content_writing.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cntnt_writing from "../assets/Hero/content_writing.png"
import Ai_image from "../assets/Hero/ai-image.png"
import Ai_code from "../assets/Hero/ai-code.png"
import Ai_chat from "../assets/Hero/ai-chat.png"
import Ai_audio from "../assets/Hero/ai-audio.png"
import Ai_speech from "../assets/Hero/ai-speech.png"



const All_Featured = () => {

  const [viewNum, setViewNum] = useState(4)

  const settings = {
    infinite: true, 
    slidesToShow: viewNum,    
    slidesToScroll: 1,     
    autoplay: true,       
    autoplaySpeed: 0,   
    speed: 5000,        
    cssEase: "linear",  
    arrows: false,
    pauseOnHover: false,
    };
  useEffect(()=>{
    const handelResponse = ()=>{
      if (window.innerWidth < 1300 && window.innerWidth >= 640) {setViewNum(2)}
      else if (window.innerWidth < 640) {setViewNum(1)}
      else {setViewNum(4)}
    }
    handelResponse()
    window.addEventListener("resize", handelResponse)
    return ()=>{
      window.removeEventListener("resize", handelResponse)
    }
  },[])
const CardsInfo = [
    {
        id: 1,
        name: "Ai Code Generator",
        img: Ai_code,
        desc: "Generate clean and efficient code snippets using AI."
    },
    {
        id: 2,
        name: "Ai Content Writing",
        img: Cntnt_writing,
        desc: "Create high-quality content for blogs, articles, and social media."
    },
    {
        id: 3,
        name: "Ai Image Generator",
        img: Ai_image,
        desc: "Produce stunning images and artwork from text prompts."
    },
    {
        id: 4,
        name: "Ai Chat Bot",
        img: Ai_chat,
        desc: "Engage users with intelligent AI-powered chat responses."
    },
    {
        id: 5,
        name: "Speech to Text",
        img: Ai_speech,
        desc: "Convert spoken words into accurate written text instantly."
    },
    {
        id: 6,
        name: "Generate Text to Audio",
        img: Ai_audio,
        desc: "Transform written text into natural-sounding audio."
    },
];
  return (
    <>
    <section className='All_Featured_port container mx-auto mt-[5rem]'>
        <main className='flex flex-col gap-2 mx-3'>
            <div className='text-[#ff7a33] text-sm font-semibold text-center'>
                <h3>ALL AI PLATFORM</h3>
            </div>
            <div className='text-center sm:text-3xl text-2xl font-semibold'>
                <h1>All Possible Generative AI Solutions<br/>at One Place</h1>
            </div>
            <div className='relative'>
                <div className='absolute top-0 left-0 w-25 h-full bg-gradient-to-r from-[#111022] to-transparent z-12'></div>
                <div className='absolute top-0 right-0 w-25 h-full bg-gradient-to-l from-[#111022] to-transparent z-12'></div>
              <Slider {...settings} className='relative Carousel_Conatiner lg:my-12 my-8'>
                  {CardsInfo.map((data)=>(
                    <FCC key={data.id} bodium={{img: data.img ,name: data.name, desc: data.desc}}/>
                  ))}
              </Slider>
            </div>
        </main>
    </section>
    </>
  )
}

export default All_Featured