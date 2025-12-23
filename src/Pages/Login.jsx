import React, { useState } from 'react'
import Navbar_Compressed from '../sections/Navbar'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import Secure_Eye from '../components/Secure_Eye';

const Login = () => {
    const [view,setView] = useState(false)

    const handelView = ()=> setView(!view)
  return (
    <>
    <section className='bg-LS not-[]:Login_portal'>
    <Navbar_Compressed/>
        <main className='h-[530px] container mx-auto w-full text-black'>
            <div className='flex justify-center h-full'>
                <div className='bg-white sm:rounded-2xl md:p-10 p-5 w-[600px] flex flex-col justify-between '>                
                    <div className='flex flex-col gap-6'>
                        <div className='text-center Brand text-2xl font-bold'>
                            <span className='text-[#ff7a33]'>AISlug</span>
                        </div>
                        <div className='Login_buttons flex flex-col gap-3 mx-2'>
                            <button className='flex gap-2 justify-center border border-gray-500 hover:bg-gray-200 duration-200 cursor-pointer text-black rounded-lg w-full px-1 sm:py-4 py-2'><FcGoogle/><span>Login with Google</span></button>
                            <button className='flex gap-2 justify-center border border-gray-500 hover:bg-gray-200 duration-200 cursor-pointer text-black rounded-lg w-full px-1 sm:py-4 py-2'><FaApple/><span>Login With Apple</span></button>
                            <button className='text-black cursor-pointer text-center text-sm'>or signin with email</button>
                        </div>
                    </div>
                    <div className='form'>
                        <form action="action.php" className='flex flex-col gap-3'>
                            <div className='flex gap-1 items-center border border-gray-500 rounded-lg'>
                                <span className='px-5'><MdOutlineMailOutline/></span>
                                <input type="email" required placeholder='shaheerDev@website.com' className='outline-0 border-0 w-full py-3 px-1'/>
                            </div>
                            <div className='flex gap-1 items-center border border-gray-500 rounded-lg'>
                                <span className='px-5'><MdPassword/></span>
                                <input type={view? "text":"password"} required placeholder='********' className='outline-0 border-0 w-full py-3 px-1'/>
                                <button type='button' onClick={handelView}>
                                    <Secure_Eye/>
                                </button>
                            </div>
                            <button type="reset" className='outline-0 text-sm text-blue-700/95 cursor-pointer'>Forgot Password?</button>
                            <button type="submit" className='py-4 px-3 w-full text-center bg-gradient-to-r outline-0 from-blue-600 to-[#8f79ff] text-white rounded-lg font-semibold cursor-pointer'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default Login