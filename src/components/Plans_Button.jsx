import React from 'react'
import { NavLink } from 'react-router-dom'

const Plans_Button = () => {
  return (
    <>
    <NavLink to="/login" className='plans_button relative overflow-hidden py-4 px-10 bg-transparent border border-[#3c3c76] rounded-xl font-semibold z-12 cursor-pointer'>
        <span>Avail This</span>
        <div className='plans_effect absolute inset-0 bg-gradient-to-r from-[#ff7a33] to-yellow-600 scale-0 duration-500 -z-2 rounded-xl'></div>
    </NavLink>
    </>
  )
}

export default Plans_Button