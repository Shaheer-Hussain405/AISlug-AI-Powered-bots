import React from 'react'
import Team_Card from '../components/Team_Card'

import img_1 from "../assets/About/team-1.jpg"
import img_2 from "../assets/About/team-2.jpg"
import img_3 from "../assets/About/team-3.jpg"
import img_4 from "../assets/About/team-4.jpg"
import img_5 from "../assets/About/team-5.jpg"
import img_6 from "../assets/About/team-6.jpg"
import img_7 from "../assets/About/team-7.jpg"
import img_8 from "../assets/About/team-8.jpg"

const Meet_Team = () => {
const teamMembers = [
  {
    img: img_1,
    name: "John Doe",
    occupation: "UI/UX Designer",
  },
  {
    img: img_2,
    name: "Sarah Smith",
    occupation: "Frontend Dev.",
  },
  {
    img: img_3,
    name: "Michael Lee",
    occupation: "Backend Dev.",
  },
  {
    img: img_4,
    name: "Emma Johnson",
    occupation: "Project Mgr",
  },
  {
    img: img_5,
    name: "David Brown",
    occupation: "Full Stack Dev.",
  },
  {
    img: img_6,
    name: "Olivia Wilson",
    occupation: "QA Engineer",
  },
  {
    img: img_7,
    name: "James Taylor",
    occupation: "DevOps Eng",
  },
  {
    img: img_8,
    name: "Anderson",
    occupation: "Product Designer",
  },
];

  return (
    <>
    <section className='Meet_Our_Team mt-10'>
        <main className='container mx-auto'>
            <div className='flex flex-col gap-8'>
                <div className='md:text-4xl sm:text-3xl text-2xl font-semibold text-center'>
                    <h1>Meet Our Dynamic Team Member, Who<br/>Are Really Care About</h1>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-12 mt-10 mx-3'>
                    {teamMembers.map((data,index)=>(
                        <div className='flex justify-center' key={index}>
                            <Team_Card img={data.img} name={data.name} occupation={data.occupation}/>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default Meet_Team