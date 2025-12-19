import React, { useState , useRef, useEffect} from 'react'
import Logo from "../assets/logo.png"
import { useLocation } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import { FiSidebar } from "react-icons/fi";
import { ImExit } from "react-icons/im";
import Dropdown from './Dropdown';

const Navbar_Tab = ({position = "relative", isSticky}) => {
    
const [sidebar, setSidebar] = useState(false)
const [pageDropdown, setPageDropdown] = useState(null)
const Mnav = useRef(null)

const location = useLocation()

const Page_navigations = [
    {name: "career",url: "/"},
    {name: "Detials",url: "/"},
    {name: "Login",url: "/"},
    {name: "Register",url: "/"},
]
const navigations = [
    {id:1,name: "Home",url: "/",},
    {id:2,name: "About",url: "/about"},
    {id:3,name: "Pages",img: <FaAngleDown/>, toolData: Page_navigations ,class: "h-[140px]"},
    {id:4,name: "FAQs", url: "/FAQs"},
    {id:5,name: "Contact",url: "/Contact"},
]  

const handelSidebar = () =>{
    setSidebar(!sidebar)
    setPageDropdown(null)
}

const handelPageBar = (id) => {
    setPageDropdown(prev => prev === id? null : id)
    setSidebar(false)

}

useEffect(()=>{
    const handelOutsideClick = (e) =>{
        if (sidebar && Mnav.current && !Mnav.current.contains(e.target)){
            setSidebar(!sidebar)
            setPageDropdown(null)
        }
    }
    const handelOutsideScroll = () =>{
        if (sidebar){document.body.style.overflowY="hidden"}
        else {document.body.style.overflowY="auto"}
    }

    handelOutsideScroll()
    document.addEventListener("mousedown", handelOutsideClick)

    return ()=>{
        document.removeEventListener("mousedown", handelOutsideClick)
    }
},[sidebar])

const StickyClass = `fixed w-full ${isSticky? "top-0":"-top-50 invisible"} duration-450 ease bg-[#12122b] z-999`

  return (
    <>
    <main className={position === "sticky"? StickyClass:"sm:relative sm:bg-transparent bg-[#12122b] z-499 sticky top-0 left-0"}>
        <nav className={` ${position === "sticky"? "py-4":"py-7"} mb-1 mx-auto max-w-[85vw] flex justify-between items-center`}>
            <div className='text-[24px] font-semibold'>
                <Link to="/" className='flex gap-3 items-end '>
                    <img src={Logo} alt="Logo" className='w-8'/>
                    <h1>AI<span className='text-[#ff7a33]'>Slug</span></h1>
                </Link>
            </div>
            <div className='Navigations lg:block hidden'>
                <ul className='flex gap-10 items-center'>
                    {navigations.map((item) =>(
                        <li key={item.id} className='group relative'>
                            <a href={item.url} className={`cursor-pointer  font-semibold
                                 py-3 px-1 text-[16px] flex items-center gap-1 ${location.pathname === item.url? "text-[#ff7a33] hover:text-[#ff7a33]": "group-hover:text-white text-[#949cba]" }`}>
                                {item.name}
                                {item.img}
                            </a>
                            {item.toolData && <Dropdown bodium={item.toolData}/>}
                        </li>
                    ))}                
    
                </ul>
            </div>
            <div className='sm:flex hidden items-center gap-3 font-semibold text-[#949cba]'>
                <button className='cursor-pointer py-2 px-6 rounded-xl border-transparent border hover:border-[#ff6c1e] hover:text-[#ff6c1e] duration-150'>Login</button>
                <button className='cursor-pointer py-2 px-6 rounded-xl border-transparent border hover:border-[#ff6c1e] hover:text-[#ff6c1e] duration-150'>Signup</button>
            </div>
            <div className='sm:hidden text-2xl'>
                <button onClick={handelSidebar} className='cursor-pointer border-0 p-2'>
                    <FiSidebar />
                </button>
            </div>
        </nav>
        {/* Mobile Respone Nav_Side  */}
        <nav ref={Mnav} className={`${sidebar? "w-60 border-s border-b px-2":"w-0"} overflow-hidden fixed top-0 right-0 h-screen duration-300 bg-black/80 py-10 rounded-bl-2xl border-gray-500 z-399`}>
            <div className='flex justify-end mr-6 text-2xl'>
                <button onClick={handelSidebar}><ImExit/></button>
            </div>
            <div className='mt-5'>
                <ul>
                    {navigations.map(item =>(
                        <li key={item.id} className='group relative text-xl'>
                            <div onClick={()=>{handelPageBar(item.id)}} className='w-full'>
                            <a href={item.url} className='w-full flex items-center gap-2 py-3 p-1'>
                                {item.name}
                                <span className={`${pageDropdown === item.id? "rotate-180":""} duration-150`}>
                                    {item.img}
                                </span>
                            </a>
                            {item.toolData && (
                                <div className={`${pageDropdown === item.id ? `${item.class}`:"h-0"} origin-top overflow-hidden duration-300 transition-all`}>
                                    <ul className='w-full'>
                                        {item.toolData.map((data, index)=>(
                                            <li key={index} className='flex justify-start gap-3 my-2 text-start text-lg'>
                                                <span className='ms-2 text-[#ff6c1e]'>|</span>
                                                <a href={data.url} className='block w-full'>
                                                    {data.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                               </div>
                            )}  
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    </main>
    </>
  )
}

export default Navbar_Tab