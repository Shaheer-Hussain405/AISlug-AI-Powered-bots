import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import AI_view from "../assets/Writing/ai_VIEW.jpg"
import Bot_card from '../components/Bot_card';
import AI_view2 from "../assets/Writing/ai_VIEW2.jpg"
import AI_view3 from "../assets/Writing/ai_VIEW3.jpg"
import { FaCheck } from "react-icons/fa6";
import Gen_image_card from '../components/Gen_image_card';

// data Image 
import data_1 from "../assets/Generative/data_1.jpg"
import data_2 from "../assets/Generative/data_2.jpg"
import data_3 from "../assets/Generative/data_3.jpg"
import data_4 from "../assets/Generative/data_4.jpg"
import data_5 from "../assets/Generative/data_5.jpg"
import data_6 from "../assets/Generative/data_6.jpg"
import data_7 from "../assets/Generative/data_7.jpg"
import data_8 from "../assets/Generative/data_8.jpg"
import data_9 from "../assets/Generative/data_9.jpg"
import data_10 from "../assets/Generative/data_10.jpg"


const Generative_AI = () => {

  const Bot_bard_Info = [
    {
      tag: "AI Chat Bot",
      title: "With FlowAI, you can chat 🤖 smarter, not harder.",
      para: "Mastering the Art of AI Content Writing: Unleashing the Power of Automated Creativity",
      img: AI_view2
    },
    {
      tag: "AI Video Generator",
      title: "A wonderful video may be created by anyone. That includes you.",
      para: "By listening to our leading AI text to speech reader, you can breeze through papers, articles, PDFs, and emails.",
      img: AI_view3
    }
  ]
  const card_3_Info1 = [
    {tag: "1000+ Styles"},
    {tag: "Custom Sizes"},
    {tag: "Oil Painting"},
    {tag: "+ And Much More"},
  ]
  const card_3_Info2 = [
    {tag: "Photo-realistic scenes"},
    {tag: "Graphihcs"},
    {tag: "Isometric Vector Graphics"},
  ]
  const Gen_images = [
    {img: data_1},
    {img: data_2},
    {img: data_3},
    {img: data_4},
    {img: data_5},
    {img: data_6},
    {img: data_7},
    {img: data_8},
    {img: data_9},
    {img: data_10},
  ]
  return (
    <>
    <section className='All_Featured_port max-w-[1350px] mx-auto mt-[8rem]'>
        <main className='flex flex-col gap-3 mx-3'>
            <div className='text-[#ff7a33] text-sm font-semibold text-center'>
                <h3>PURE AI SOLUTIONS</h3>
            </div>
            <div className='text-center sm:text-3xl text-2xl font-semibold mx-2'>
                <h1>Generative AI Designed for creators. Make<br/>your Life Easier with <span className='effect_brand group'>AI<span className='text-[#ff7a33]  group-hover:text-white duration-300'>SLUG</span></span></h1>
            </div>

            {/* Card I  ---------------------------------*/}

            <div className='Card_container mt-12 mb-5'>
              <div className='card-002 xl:p-15 md:px-10 md:py-12 px-5 lg:gap-0 gap-7 py-8 h-auto w-full grid lg:grid-cols-[45%_55%] grid-cols-1 xl:gap-10  rounded-2xl border border-gray-600 hover:border-yellow-300/90 delay-70 duration-550'>

              {/* Grid Column_1  */}

              <div className='flex items-center pr-5 lg:order-1 order-2'>
                <div className='flex flex-col xl:gap-8 lg:gap-4 gap-6'>
                    <div className='text-[#ff7a33] text-md font-semibold lg:text-start text-center'>
                      <h5>AI Writing Tools</h5>
                    </div>
                    <div className='lg:text-3xl text-2xl font-semibold lg:text-start text-center'>
                      <h2>Write ✍️ Better Content Faster, The Future of AI Writing Tools is Finally here</h2>
                    </div>
                    <div className='text-gray-400 md:text-lg text-sm lg:text-start text-center'>
                      <p>Mastering the Art of AI Content Writing: Unleashing the Power of Automated Creativity"</p>
                    </div>
                    <div className='flex flex-col gap-3 md:text-sm text-[12px] text-gray-400'>
                      <div className='flex gap-3'>
                        <div>
                          <CiCircleCheck className='text-blue-600 text-[20px] '/>
                        </div>
                        <p><span>There are more than <span className='font-bold text-white'>60+</span> use cases and templates to pick from to meet all of your writing demands.</span></p>
                      </div>
                      <div className='flex gap-3'>
                        <div>
                            <CiCircleCheck className='text-blue-600 text-[20px]'/>
                        </div>
                        <p><span>Let’s Communicate with your customers with emotions</span></p>
                      </div>
                      <div className='flex gap-3'>
                        <div>
                            <CiCircleCheck className='text-blue-600 text-[20px]'/>
                        </div>
                        <p><span>Choose the best AI copy for your message & save as a document</span></p>
                      </div>
                    </div>
                    <div>
                      <div className='my-2 flex items-center lg:justify-start justify-center'>
                          <NavLink to="/login" className='cursor-pointer flex items-center gap-3 bg-[#7173ff] py-3 px-5 rounded-lg text-sm font-semibold'><FaPlus/>Get Started</NavLink>
                      </div>
                    </div>
                </div>
              </div>

              {/* Grid Column_2  */}

              <div className='flex justify-center items-center mx-2 lg:order-2 order-1'>
                <div className='flex justify-center Image_card border bg-[#1e1e42] border-gray-600 rounded-2xl w-full md:px-5 md:py-8 p-4'>
                  <figure>
                    <img src={AI_view} alt="Program_view" className='w-150 shadow-sm shadow-white rounded-2xl'/>
                  </figure>
                </div>
              </div>
              </div>
            </div>

              {/* Card II ----------------------------------- */}

            <div className='grid lg:grid-cols-2 lg:gap-0 gap-4 grid-cols-1 bg-[#12122b]'>
              {Bot_bard_Info.map((data)=>(
                <div>
                  <Bot_card bodium={{tag: data.tag, title: data.title, para: data.para,img: data.img}}/>
                </div>
              ))}
            </div>

            {/* Card III ------------------------------------- */}

            <div className='Card_container mt-12 mb-5'>
              <div className='card-002 xl:p-12 md:px-10 md:py-12 px-3 lg:gap-0 gap-7 py-3 h-auto w-full grid lg:grid-cols-2 grid-cols-1 xl:gap-10  rounded-2xl border border-gray-600 hover:border-yellow-300/90 delay-70 duration-550'>

              {/* Grid Column_1  */}

              <div className='flex items-center lg:pr-5 order-2 mx-2'>
                <div className='flex flex-col xl:gap-8 lg:gap-4 gap-6'>
                    <div className='text-[#ff7a33] text-md font-semibold lg:text-start text-center'>
                      <h5>AI Writing Tools</h5>
                    </div>
                    <div className='lg:text-3xl text-2xl font-semibold lg:text-start text-center'>
                      <h2>Generate Outstanding AI Images Just Using Prompt 🌄</h2>
                    </div>
                    <div className='text-gray-400 md:text-lg text-sm lg:text-start text-center'>
                      <p><span className='text-blue-500'>AISlug</span> is an artificial art generator that turns your ideas into one-of-a kind artwork and photographs in seconds. Finally, you'll have the perfect image to go with your statement</p>
                    </div>
                    <div className='leading-tight grid grid-cols-2  gap-2  md:text-sm text-[12px] text-gray-400 mx-3'>
                      <div>
                        <ul className='flex flex-col gap-3 lg:text-[16px] font-semibold'>
                          {card_3_Info1.map((data)=>(
                            <li className='flex items-center gap-4'><div><FaCheck/></div> {data.tag}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <ul className='flex flex-col gap-3 lg:text-[16px] font-semibold'>
                          {card_3_Info2.map((data)=>(
                            <li className='flex items-center gap-4'><div><FaCheck/></div> {data.tag}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className='my-2 flex items-center lg:justify-start justify-center'>
                          <NavLink to="/login" className='cursor-pointer flex items-center gap-3 bg-[#7173ff] py-4 px-7 rounded-lg text-sm font-semibold'><FaPlus/>Get Started</NavLink>
                      </div>
                    </div>
                </div>
              </div>

              {/* Grid Column_2  */}

              <div className='relative mx-2 order-1'>
                <div className='h-full graphics-111 my-4 py-2'>
                  <div className='flex flex-col gap-4 my-4'>
                    <ul className='flex gap-1 lg:ms-20 sm:ms-23 ms-18'>
                      {["bg-red-500","bg-blue-500","bg-yellow-400"].map((circle,index)=>(
                        <li key={index} className={`md:h-3 md:w-3 h-2 w-2 ${circle} rounded-full`}></li>
                      ))}
                    </ul>
                    <div className='grid grid-cols-4 md:gap-4 gap-2'>
                        <div className='relative flex flex-col justify-center md:gap-4 gap-2 z-4'>
                          <Gen_image_card bodium={{img: data_1}}/>
                          <Gen_image_card bodium={{img: data_2}}/>
                          <div className='bottom-20 right-0 sm:h-[90px] sm:w-[90px] h-[80px] w-[80px] absolute bg-green-500 blur-[5rem] -z-2'></div>
                        </div>
                        <div className='relative flex flex-col md:gap-4 gap-2 z-4'>
                          <Gen_image_card bodium={{img: data_3}}/>
                          <Gen_image_card bodium={{img: data_4}}/>
                          <Gen_image_card bodium={{img: data_5}}/>
                          <div className='top-1/2 -translate-y-[50%] right-0 sm:h-[140px] sm:w-[140px] h-[80px] w-[80px] absolute bg-pink-500 blur-[4.5rem] -z-2'></div>
                        </div>
                        <div className='relative flex flex-col md:gap-4 gap-2 z-4'>
                          <Gen_image_card bodium={{img: data_6}}/>
                          <Gen_image_card bodium={{img: data_7}}/>
                          <Gen_image_card bodium={{img: data_8}}/>
                          <div className='top-10 right-0 sm:h-[120px] sm:w-[120px] h-[80px] w-[80px] absolute bg-blue-500 blur-[5rem] -z-2'></div>
                        </div>
                        <div className='flex flex-col justify-center md:gap-4 gap-2'>
                          <Gen_image_card bodium={{img: data_9}}/>
                          <Gen_image_card bodium={{img: data_10}}/>
                        </div>
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

export default Generative_AI