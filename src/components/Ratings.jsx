import React from 'react'
import Send from "../assets/Hero/send.png"
import Star from '../components/star';
import Rating_img from "../assets/Hero/rating.png"


const Rating = ({is1st = true}) => {
  return (
    <>
    {is1st? 
    <div className='flex gap-1 items-center'>
        <img src={Rating_img} alt="Star" className='w-12'/>
        <div className='flex flex-col gap-1 py-2'>
            <div className='flex gap-1'>
                <Star/><Star/><Star/><Star/><Star/><Star/>
            </div>
            <div>
                <h4>Rated 4.8 . 1,000+ Reviews</h4>
            </div>
        </div>
    </div> :
    <div className='flex gap-2 items-center'>
        <img src={Send} alt="send" className='w-10'/>
        <div className='flex flex-col gap-1 py-2'>
            <div className='flex gap-1'>
                <Star type={2}/><Star type={2}/><Star type={2}/><Star type={2}/><Star type={2}/>
            </div>
            <div>
                <h4>Rated 4.8 . 1,000+ Reviews</h4>
            </div>
        </div>
    </div>}
    </>
  )
}

export default Rating