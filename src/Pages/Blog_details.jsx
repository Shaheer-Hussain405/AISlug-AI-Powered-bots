import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import blogs from '../Data/Blogs';
import About_details from '../sections/About_details';
import Blog_Content from '../sections/Blog_Content';
import { IoMdArrowRoundBack } from "react-icons/io";
import Trial from '../sections/Trial';
import Footer from '../sections/Footer';
import TopSroll_Button from '../components/TopSroll_Button';
import { TbError404 } from "react-icons/tb";

const Blog_details = () => {
  const Navigate = useNavigate()
  const { idx } = useParams();
  const blog = blogs.find(el => el.id === Number(idx))

  if (!blog) return (
    <div>
      <div className='Back_button text-gray-300 flex items-center  mt-5 px-5 md:text-2xl sm:text-xl text-lg font-semibold'>
          <button onClick={()=>Navigate(-1)} className='flex gap-3 cursor-pointer py-2'><span className='my-auto'><IoMdArrowRoundBack/></span> <span className='md:text-lg tet-md'>Back</span></button>
      </div>
      <div className='text-center font-semibold text-3xl my-20'>No Blog Found</div>
      <div className=' flex justify-center text-[60px]'><TbError404/></div>
    </div>
    )

const About_Info = {
    tag: "Blogs Details",
    title:"Blog Details/Single Post",
}
useEffect(()=>{
  window.scrollTo({top:0,behavior:"instant"})
},[blog])
  return (
    <>
    <main className='Blogs_detail relative'>
      <div className='Back_button text-gray-300 flex items-center  mt-5 px-5 md:text-2xl sm:text-xl text-lg font-semibold'>
        <button onClick={()=>Navigate(-1)} className='flex gap-3 cursor-pointer py-2'><span className='my-auto'><IoMdArrowRoundBack/></span> <span className='md:text-lg tet-md'>Back</span></button>
      </div>
      <About_details bodium={About_Info} button={false}/>
      <Blog_Content bodium={blog}/>
      <Trial/>
      <Footer/>
      <TopSroll_Button/>
    </main>
    </>
  )
}

export default Blog_details