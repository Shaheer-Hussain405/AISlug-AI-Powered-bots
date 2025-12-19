import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const FAQs = () => {

  const FAQs_Info = [
    {
      querry: "What is your AI platform used for?",
      Ans: "Our platform provides powerful AI agents, image generation, and smart automation tools to help individuals and businesses work faster, create better content, and solve complex tasks efficiently."
    },
    {
      querry: "What are AI agents and how do they work?",
      Ans: "AI agents are intelligent assistants that can perform tasks autonomously, such as data analysis, content creation, customer support, and workflow automation, based on your instructions."
    },
    {
      querry: "Can I generate AI images for commercial use?",
      Ans: "Yes, all images generated using our AI image tools can be used for commercial purposes, including marketing, design, and product development, according to our usage policy."
    },
    {
      querry: "Do I need technical skills to use your AI tools?",
      Ans: "No technical skills are required. Our tools are designed to be user-friendly, allowing anyone to create, automate, and generate content with simple prompts and easy controls."
    },
    {
      querry: "Is my data safe when using your platform?",
      Ans: "Absolutely. We prioritize data security and privacy by using industry-standard encryption and ensuring that your information is never shared without your consent."
    },
    {
      querry: "Can I switch or cancel my subscription at any time?",
      Ans: "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly from your account dashboard without any hidden fees."
    }
  ]

  const [isActive,setIsActive] = useState(1)

  const AccordianState = (id) =>{
    setIsActive(id === isActive? null:id)
  } 

  return (
    <>
    <section className='FAQs_port md:mt-30 mt-15 mx-3' id='faqs_direct'>
        <main className='container mx-auto'>
            <div className="flex flex-col gap-5">
                <div className='text-center tag text-[#ff7a33] font-semibold'>
                    <span>Frequent Ask Questions</span>
                </div>
                <div className='text-center md:text-3xl sm: text-2xl text-xl font-semibold'>
                    <h1>
                        Questions About our AISlug?<br/>We have Answers!
                    </h1>
                </div>
                <div className='FAQs_container mt-15'>
                    <div className='max-w-[800px] mx-auto flex flex-col gap-3'>
                        {FAQs_Info.map((data , index)=>{
                        const isOpen = isActive === index 
                        return (
                            <div className='accordian border border-[#3c3c77] bg-[#15152c] rounded-xl overflow-hidden'>
                                <button onClick={()=>AccordianState(index)} className={`Accordian_Title ${isOpen? "text-white":"text-gray-400"} duration-500 md:p-6 sm:p-4 py-3 px-2 w-full flex justify-between sm:text-md text-[11px] md:text-xl cursor-pointer`}>
                                    <h2>{data.querry}</h2>
                                    <span className={`${isOpen? "rotate-180":"rotate-0"} duration-500`}><IoIosArrowDown/></span>
                                </button>
                                <div className={`Accordian_Content ${isOpen? "max-h-100 md:pb-5 sm:mb-4 my-3":"max-h-0 pb-0"} md:px-5 sm:px-4 px-3  overflow-hidden duration-600 text-gray-400 md:text-lg sm:text-sm ease text-[10px]`}>
                                    <p>{data.Ans}</p>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default FAQs