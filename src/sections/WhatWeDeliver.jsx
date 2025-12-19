import React from 'react'
import WWD_Card from '../components/WWD_Card'
import img_1 from "../assets/WhatWeDeliver/data-1.png"
import img_2 from "../assets/WhatWeDeliver/data-2.png"
import img_3 from "../assets/WhatWeDeliver/data-3.png"
import img_4 from "../assets/WhatWeDeliver/data-4.png"

const WhatWeDeliver = () => {
const WWD_Info = [
  {
    img: img_1,
    name: "Research & Discovery",
    para: "We analyze your business goals and user needs to create a strong foundation for the project."
  },
  {
    img: img_2,
    name: "Design & Prototyping",
    para: "Our team designs intuitive interfaces and builds interactive prototypes for early feedback."
  },
  {
    img: img_3,
    name: "Development & Testing",
    para: "We develop scalable solutions and rigorously test them to ensure performance and quality."
  },
  {
    img: img_4,
    name: "Launch & Support",
    para: "After launch, we provide continuous support, updates, and performance optimization."
  }
];

  return (
    <>
    <section className='About_Us mt-10'>
        <main className='max-w-[1300] mx-auto'>
            <div className="flex flex-col gap-6">
                <div className='md:text-3xl sm:text-2xl text-xl text-center leading-10 font-semibold'>
                    <h1>We deliver great quality and performance while offering<br/>you the most recent AIBusoness products.</h1>
                </div>
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-10 mx-3'>
                    {WWD_Info.map((data, index)=>(
                        <div key={index}>
                            <WWD_Card bodium={data}/>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default WhatWeDeliver