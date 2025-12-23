import React from 'react'
import Navbar_Compressed from '../sections/Navbar'
import About_details from '../sections/About_details'
import Contatct_port from '../sections/Contatct_port'
import Review from '../sections/Review'
import Trial from '../sections/Trial'
import Footer from '../sections/Footer'
import TopSroll_Button from '../components/TopSroll_Button'

const Contact = () => {
const About_Info = {
    tag: "Contact Us",
    title:"Our Dynamic Team are Waiting for Reach you",
}    
  return (
    <>
    <main className='relative'>
        <Navbar_Compressed/>
        <About_details bodium={About_Info}/>
        <Contatct_port/>
        <Review/>
        <Trial/>
        <Footer/>
        <TopSroll_Button/>
    </main>
    </>
  )
}

export default Contact