import React from 'react'
import Navbar_Compressed from '../sections/Navbar'
import About_details from '../sections/About_details'
import About_Hero from '../sections/Hero_2'
import Trust from '../sections/Trust'
import Meet_Team from '../sections/Meet_Team'
import Review from '../sections/Review'
import WhatWeDeliver from '../sections/WhatWeDeliver'
import FAQs from '../sections/FAQs'
import Trial from '../sections/Trial'
import Footer from '../sections/Footer'
import TopSroll_Button from '../components/TopSroll_Button'


const About = () => {
  const About_Info = {
    tag: "About AISlug",
    title:"Mastering the Art of AI Tool: Unleashing the Power of Automated Creativity with AISlug",
  }

  return (
    <>
    <main className='reltaive'>
        <Navbar_Compressed/>
        <About_details bodium={About_Info}/>
        <About_Hero/>
        <Trust/>
        <Meet_Team/>
        <Review/>
        <WhatWeDeliver/>
        <FAQs/>
        <Trial/>
        <Footer/>
        <TopSroll_Button/>
    </main>
    </>
  )
}

export default About