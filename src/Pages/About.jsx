import React from 'react'
import About_details from '../sections/About_details'
import About_Hero from '../sections/About_Hero'
import Trust from '../sections/Trust'
import Meet_Team from '../sections/Meet_Team'
import Review from '../sections/Review'
import WhatWeDeliver from '../sections/WhatWeDeliver'
import FAQs from '../sections/FAQs'
import Trial from '../sections/Trial'
import Footer from '../sections/Footer'

const About = () => {
  return (
    <>
    <main className='reltaive'>
        <About_details/>
        <About_Hero/>
        <Trust/>
        <Meet_Team/>
        <Review/>
        <WhatWeDeliver/>
        <FAQs/>
        <Trial/>
        <Footer/>
    </main>
    </>
  )
}

export default About