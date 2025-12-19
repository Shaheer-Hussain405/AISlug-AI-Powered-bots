import React, { useRef,useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import brand_1 from "../assets/Trust/brand-logo-1.png"
import brand_2 from "../assets/Trust/brand-logo-2.png"
import brand_3 from "../assets/Trust/brand-logo-3.png"
import brand_4 from "../assets/Trust/brand-logo-4.png"
import brand_5 from "../assets/Trust/brand-logo-5.png"
import brand_6 from "../assets/Trust/brand-logo-6.png"
import brand_7 from "../assets/Trust/brand-logo-7.png"
import brand_8 from "../assets/Trust/brand-logo-8.png"
import brand_9 from "../assets/Trust/brand-logo-9.png"
import brand_10 from "../assets/Trust/brand-logo-10.png"
import brand_11 from "../assets/Trust/brand-logo-11.png"
import brand_12 from "../assets/Trust/brand-logo-12.png"

gsap.registerPlugin(ScrollTrigger);

const Trust = () => {
    const numberRef = useRef(null)

    useEffect(() => {
  const counter = { value: 0 };

  gsap.to(counter, {
    value: 10.8,
    duration: 2,
    ease: "power1.out",
    // snap: { value: 1 }, // 
    scrollTrigger: {
      trigger: numberRef.current,
      start: "top 80%",
      once: true,
    },
    onUpdate: () => {
      numberRef.current.innerText = counter.value.toFixed(2);
    },
  });
}, []);

  return (
    <>
    <section className='Our_Trust max-w-[1200px] mx-auto'>
        <main className='flex flex-col  items-center gap-10 md:py-30 py-20 mx-5'>
            <div className=' text-center text-2xl font-semibold'>
                <h2>Trusted by <span className='text-blue-500'><span ref={numberRef}>0</span>k+</span>  teams, agencies and freelancers.</h2>
            </div>
            <div className='grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 lg:gap-15  gap-10 p-3'>
                <div className='flex flex-col gap-2'>
                    <img src={brand_1} alt="brand_trust" />
                    <img src={brand_2} alt="brand_trust" />
                </div>
                <div className='flex flex-col gap-2'>
                    <img src={brand_3} alt="brand_trust" />
                    <img src={brand_4} alt="brand_trust" />
                </div>
                <div className='flex flex-col gap-2'>
                    <img src={brand_5} alt="brand_trust" />
                    <img src={brand_6} alt="brand_trust" />
                </div>
                <div className='flex flex-col gap-2'>
                    <img src={brand_7} alt="brand_trust" />
                    <img src={brand_8} alt="brand_trust" />
                </div>
                <div className='flex flex-col gap-2'>
                    <img src={brand_9} alt="brand_trust" />
                    <img src={brand_10} alt="brand_trust" />
                </div>
                <div className='flex flex-col gap-2'>
                    <img src={brand_11} alt="brand_trust" />
                    <img src={brand_12} alt="brand_trust" />
                </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default Trust