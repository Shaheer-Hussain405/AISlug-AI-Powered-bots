import React, { useEffect, useState } from 'react'
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
import { FaPlus } from "react-icons/fa6";

import Review_Card from '../components/Review_Card'

const Review = () => {

    const [mobileView, setMobileView] = useState(12)

useEffect(()=>{
    const handleResponse = ()=>{
        if (window.innerWidth < 640){setMobileView(5)}
        else if (window.innerWidth < 992) {setMobileView(6)}
        else {setMobileView(12)}
    }

    handleResponse()

    window.addEventListener("resize", handleResponse)
    return ()=>{
        window.removeEventListener("resize", handleResponse)
    }
},[])


const Reviews_jar = [
  {
    user: "Alex Morgan",
    img: brand_1,
    occup: "Product Designer",
    title: "Clean design and smooth flow",
    desc: "The interface feels intuitive and fast, making daily tasks easier and improving overall workflow efficiency.",
    userImg: "https://i.pravatar.cc/150?img=1",
    rating: 5,
  },
  {
    user: "Sofia Turner",
    img: brand_2,
    occup: "Marketing Manager",
    title: "Highly reliable and efficient",
    desc: "Performance has been consistently solid, helping our team collaborate better and deliver projects on time.",
    userImg: "https://i.pravatar.cc/150?img=2",
    rating: 4,
  },
  {
    user: "Daniel Lee",
    img: brand_3,
    occup: "Frontend Developer",
    title: "Developer friendly experience",
    desc: "The documentation is clear and well structured, which made integration fast and surprisingly straightforward.",
    userImg: "https://i.pravatar.cc/150?img=3",
    rating: 5,
  },
  {
    user: "Priya Shah",
    img: brand_4,
    occup: "Startup Founder",
    title: "Perfect for growing teams",
    desc: "It scales well with our needs and provides the flexibility required to manage a fast growing business.",
    userImg: "https://i.pravatar.cc/150?img=4",
    rating: 5,
  },
  {
    user: "Michael Brown",
    img: brand_5,
    occup: "UX Researcher",
    title: "Thoughtful user experience",
    desc: "Every interaction feels intentional, reducing friction and helping users complete tasks without confusion.",
    userImg: "https://i.pravatar.cc/150?img=5",
    rating: 4,
  },
  {
    user: "Emily Chen",
    img: brand_6,
    occup: "Content Strategist",
    title: "Great clarity and structure",
    desc: "The layout keeps everything organized, allowing our content team to stay focused and productive.",
    userImg: "https://i.pravatar.cc/150?img=6",
    rating: 5,
  },
  {
    user: "Rahul Verma",
    img: brand_7,
    occup: "Software Engineer",
    title: "Fast and dependable tool",
    desc: "Load times are quick and features work exactly as expected, even during heavy daily usage.",
    userImg: "https://i.pravatar.cc/150?img=7",
    rating: 4,
  },
  {
    user: "Laura Kim",
    img: brand_8,
    occup: "Project Manager",
    title: "Keeps projects on track",
    desc: "This tool helps our team stay aligned, track progress clearly, and avoid unnecessary delays.",
    userImg: "https://i.pravatar.cc/150?img=8",
    rating: 5,
  },
  {
    user: "James Wilson",
    img: brand_9,
    occup: "Business Analyst",
    title: "Data driven and practical",
    desc: "Insights are presented clearly, making it easier to analyze trends and support better decisions.",
    userImg: "https://i.pravatar.cc/150?img=9",
    rating: 4,
  },
  {
    user: "Nina Patel",
    img: brand_10,
    occup: "UI Designer",
    title: "Visually pleasing experience",
    desc: "The visual hierarchy and spacing feel balanced, creating an enjoyable and professional interface.",
    userImg: "https://i.pravatar.cc/150?img=10",
    rating: 5,
  },
  {
    user: "Chris Evans",
    img: brand_11,
    occup: "Operations Lead",
    title: "Streamlines daily operations",
    desc: "It reduced manual work significantly and helped our operations team stay efficient and organized.",
    userImg: "https://i.pravatar.cc/150?img=11",
    rating: 4,
  },
  {
    user: "Aisha Khan",
    img: brand_12,
    occup: "Digital Consultant",
    title: "Excellent overall experience",
    desc: "From setup to daily use, everything feels smooth, reliable, and well thought out.",
    userImg: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
];


  return (
    <>
    <section className='Reviews_port mx-4 lg:mt-[8rem] my-15'>
        <main className='max-w-[1300px] mx-auto'>
            <div className='relative flex flex-col gap-6'>
                <div className='text-[#ff7a33] font-semibold tag text-center'>
                    <h5>Customer Stories</h5>
                </div>
                <div className='lg:text-4xl text-2xl font-semibold text-center'>
                    <h2>AIMug. Received ⭐ 4.8/5 Stars{mobileView === 12 && <br/>} in Over 10,000+ Reviews.</h2>
                </div>
                <div className='Customer_Reviews mt-10'>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3'>
                        {Reviews_jar.slice(0,mobileView).map((data)=>(
                            <Review_Card bodium={data}/>
                        ))}
                    </div>
                </div>
                <div className='absolute bottom-0 left-0 w-full bg-[linear-gradient(180deg,_transparent,#111022,#111022)] h-60'></div>
                <div className='absolute bottom-10 left-0 w-full flex justify-center'>
                    <button className='cursor-pointer flex items-center gap-3 bg-[#7173ff] py-4 px-7 rounded-lg text-sm font-semibold'><FaPlus/>Get Started</button>
                </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default Review