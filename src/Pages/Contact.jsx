import React from 'react'
import Navbar_Compressed from '../sections/Navbar'
import About_details from '../sections/About_details'
import Review from '../sections/Review'
import Trial from '../sections/Trial'
import Footer from '../sections/Footer'

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
        <Review/>
        <Trial/>
        <Footer/>
    </main>
    </>
  )
}

export default Contact