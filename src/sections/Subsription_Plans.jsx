import React, { useState } from 'react'
import Plans_card from '../components/Plans_card'

const Subsription_Plans = () => {


    const monthlyPlans = [
  {
    label: "Free",
    price: ["$0","$0"],
    isPopular: false,
    packages: [
      "Basic access",
      "Limited features",
      "Community support",
      "Single user",
    ]
  },
  {
    label: "Startup",
    price: ["$29","$279"],
    isPopular: true,
    packages: [
      "Full feature access",
      "Priority email support",
      "Up to 5 team members",
      "Advanced analytics",
      "Custom integrations",
      "Early access to new features",
    ]
  },
  {
    label: "Enterprise",
    price: ["$99","$950"],
    isPopular: false,
    packages: [
      "Unlimited features",
      "Dedicated account manager",
      "24/7 premium support",
      "Unlimited team members",
      "Custom solutions",
    ]
  }
]

    const [isMonthly, setIsMonthly] = useState(true)

  return (
    <>
    <section className='Subscription_port mx-3 lg:my-15 my-8'>
        <main className='max-w-[1300px] mx-auto'>
            <div className='flex flex-col gap-15'>
                <div className='flex flex-col sm:gap-5 gap-8 text-center lg:text-4xl text-2xl font-semibold'>
                    <h3>Flexible Pricing Plans That Your Needs</h3>
                    <div className='flex sm:flex-row flex-col gap-6 justify-center sm:items-center items-start sm:ms-0 ms-5'>
                        <div className='flex items-center gap-2'>
                            <h5 className={`${isMonthly? "text-[#ff7a33]":"text-gray-400"} text-[16px] font-semibold duration-200`}>Pay Monthly</h5>
                            <button onClick={()=>{setIsMonthly(!isMonthly)}} className='outline-0 toggle-btn relative border-0 rounded-2xl cursor-pointer bg-[#426bff] sm:py-2 py-1 h-6 sm:min-w-11 min-w-[43px] px-3'>
                                <div className={`${isMonthly? "translate-x-0":"translate-x-[-100%]"} absolute top-1/2 -translate-y-[50%] h-[18px] w-[18px] right-1 rounded-full bg-white duration-200`}></div>
                            </button>
                        </div>
                        <div className='text-[16px] flex gap-2 items-center text-[#ff7a33]'>
                            <span>Pay Yearly</span>
                            <span className='text-sm py-1 px-2 bg-gray-400/40 rounded-xl'>save 20%</span>
                        </div>
                    </div>
                </div>
                <div className='Plans_Card '>
                    <div className='relative '>

                        <div className='hidden sm:block top-40 left-5 h-60 w-60 absolute bg-green-500 blur-[6rem] -z-5'></div>
                        <div className='hidden sm:block top-20 left-1/2 translate-x-[-50%] h-80 w-80 absolute bg-yellow-500 blur-[3rem] -z-5'></div>
                        <div className='hidden sm:block top-40 right-5 h-60 w-60 absolute bg-green-500 blur-[6rem] -z-5'></div>

                        <div className='relative'>
                            <div className={`${isMonthly? "block":"hidden"} grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6`}>
                                {monthlyPlans.map((data, index)=>(
                                    <Plans_card key={index} bodium={data}/>
                                ))}
                            </div>
                            <div className={`${isMonthly? "hidden":"block"} w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6`}>
                                {monthlyPlans.map((data, index)=>(
                                    <Plans_card key={index} bodium={data} yearly={true}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </> 
  )
}

export default Subsription_Plans