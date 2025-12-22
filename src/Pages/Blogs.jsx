import React from 'react'
import Navbar from '../sections/Navbar'
import About_details from '../sections/About_details'
import Blogs_Port from '../sections/Blogs_Port'
import Trial from '../sections/Trial'
import Footer from '../sections/Footer'
import TopSroll_Button from '../components/TopSroll_Button'

const Blogs = () => {
const About_Info = {
    tag: "Blog Posts",
    title:`Check Out our Articles it may help to start your AI Journey`,
}
  return (
    <>
    <main className='relative'>
        <Navbar/>
        <About_details bodium={About_Info} button={false}/>
        <Blogs_Port/>
        <Trial/>
        <Footer/>
        <TopSroll_Button/>
    </main>
    </>
  )
}

export default Blogs