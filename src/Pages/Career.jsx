import React from 'react'
import Navbar_Compressed from '../sections/Navbar'
import About_details from '../sections/About_details'
import Hero_2 from '../sections/Hero_2'
import Trust from '../sections/Trust'
import Jobs_Positions from '../sections/Jobs_Positions'
import Trial from "../sections/Trial"
import Footer from "../sections/Footer"
import TopSroll_Button from '../components/TopSroll_Button'

const Career = () => {
    const About_Info = {
    tag: "Career",
    title:`Unleash Your Potential: Explore Exciting Careers with Us`,
  }

  return (
    <>
    <main className='relative'>
        <Navbar_Compressed/>
        <About_details bodium={About_Info}/>
        <Hero_2/>
        <Trust/>
        <Jobs_Positions/>
        <Trial/>
        <Footer/>
        <TopSroll_Button/>
    </main>
    </>
  )
}

export default Career