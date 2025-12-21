import React from 'react'
import Rating from '../components/Ratings'
import About_img from "../assets/About/About_Hero_Img.jpg"

const Hero_2 = () => {
  return (
    <>
    <section className='About_hero mt-10'>
        <main className='conatiner mx-auto grid lg:grid-cols-[45%_55%] grid-cols-1'>
            <div className='flex flex-col justify-center lg:gap-5 gap-8 lg:my-0 my-6 lg:mr-10 px-8 lg:order-1 order-2 lg:text-start text-center'>
                <div className='sm:text-4xl text-2xl font-semibold'>
                    <h1>Create Something New with AISlug, that are simple to use</h1>
                </div>
                <div className='text-sm text-gray-400'>
                    <p>There are more than 80+ use cases and templates to pick from to meet all of your writing demands. Let’s Communicate with your customers with emotions</p>
                </div>
                <div className='flex sm:flex-row flex-col items-center lg:justify-start sm:justify-center gap-2'>
                    <Rating/>
                    <Rating is1st={false}/>
                </div>
            </div>
            <div className='lg:order-2 order-1 sm:flex justify-center'>
                <div className='mx-5'>
                    <img src={About_img} alt="Hero Img" className='rounded-2xl'/>
                </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default Hero_2