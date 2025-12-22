import React from 'react'
import Jobs_Card from '../components/Jobs_Card';
import img_1 from "../assets/Jobs_Card/data-1.png"
import img_2 from "../assets/Jobs_Card/data-2.png"
import img_3 from "../assets/Jobs_Card/data-3.png"
import img_4 from "../assets/Jobs_Card/data-4.png"
import img_5 from "../assets/Jobs_Card/data-5.png"
import img_6 from "../assets/Jobs_Card/data-6.png"
import img_flag from "../assets/Jobs_Card/Pak_flag.png"
import Paginations from '../components/paginations';

const Jobs_Positions = () => {

const jobs = [
  {
    title: "Frontend Developer",
    img: img_1,
    company_name: "TechCorp",
    employees_needed: "1 - 5 employees",
    salary_range: "2k - 3k USD",
    posted_time: "30 minutes ago",
    type: "Remote",
    country: "Pakistan",
    country_flag: img_flag,
  },
  {
    title: "Backend Developer",
    img: img_2,
    company_name: "CodeWorks",
    employees_needed: "3 - 10 employees",
    salary_range: "3k - 5k USD",
    posted_time: "1 hour ago",
    type: "Global",
    country: "Pakistan",
    country_flag: img_flag,
  },
  {
    title: "UI/UX Designer",
    img: img_3,
    company_name: "DesignHub",
    employees_needed: "2 - 4 employees",
    salary_range: "1.5k - 2.5k USD",
    posted_time: "45 minutes ago",
    type: "Remote",
    country: "Pakistan",
  },
  {
    title: "Full Stack Developer",
    img: img_4,
    company_name: "InnovateX",
    employees_needed: "5 - 15 employees",
    salary_range: "4k - 6k USD",
    posted_time: "2 hours ago",
    type: "Global",
    country: "Pakistan",
  },
  {
    title: "Data Analyst",
    img: img_5,
    company_name: "DataSense",
    employees_needed: "1 - 3 employees",
    salary_range: "2k - 3.5k USD",
    posted_time: "20 minutes ago",
    type: "Remote",
    country: "Pakistan",
  },
  {
    title: "Project Manager",
    img: img_6,
    company_name: "ManageIt",
    employees_needed: "1 - 2 employees",
    salary_range: "3k - 4k USD",
    posted_time: "1 hour ago",
    type: "Global",
    country: "Pakistan",
  },
];
  return (
    <>
    <section className='Jobs_port mt-8 mx-3'>
        <main className='max-w-[1100px] mx-auto'>
            <div className='flex flex-col gap-5'>
                <div className='tag text-[#ff7a33] text-md font-semibold text-center'>
                    <span>Open Positions</span>
                </div>
                <div className='lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold text-center'>
                    <h1>Open Positions! Lets Start Your Career</h1>
                </div>
                <div className='text-md text-gray-400 text-center'>
                    <p>Mastering the Art of AI Tool: Unleashing the Power of<br/>Automated Creativity with AISlug</p>
                </div>
                <div className='sm:mx-5 mx-1 my-10 flex flex-col gap-5'>
                    {jobs.map((data)=>(
                        <Jobs_Card bodium={data}/>
                    ))}
                </div>
                <Paginations/>
            </div>
        </main>
    </section>
    </>
  )
}

export default Jobs_Positions