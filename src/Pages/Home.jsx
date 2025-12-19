import React, { useEffect, useState } from 'react'
import Hero from '../sections/Hero'
import All_Featured from '../sections/All_Featured'
import Generative_AI from '../sections/Generative_AI'
import Trust from '../sections/Trust'
import TopSroll_Button from '../components/TopSroll_Button'
import Collaboraions from '../sections/Collaboraions'
import Review from '../sections/Review'
import Subsription_Plans from '../sections/Subsription_Plans'
import FAQs from '../sections/FAQs'
import Trial from '../sections/Trial'
import Footer from '../sections/Footer'


const Home = () => {
  
  return (
    <>
    <main className='relative'>
      <Hero />
      <All_Featured />
      <Generative_AI/>
      <Trust/>
      <TopSroll_Button/>
      <Collaboraions/>
      <Review/>
      <Subsription_Plans/>
      <FAQs/>
      <Trial/>
      <Footer/>
    </main>
      
    </>
  )
}

export default Home