import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar_Tab'

const Navbar_Compressed = () => {
  const [isNavStick,setIsNavStick] = useState(false)
  const [active,setIsActive] = useState(false)

  useEffect(()=>{
    const handleNavbarSticky = () =>{
      setIsNavStick(window.scrollY >= 50);
    }
    const handlePosition = () =>{
      setIsActive(window.innerWidth > 640);
    }

    handleNavbarSticky();
    handlePosition();

    window.addEventListener("scroll", handleNavbarSticky);
    window.addEventListener("resize", handlePosition);
    return ()=>{
      window.removeEventListener("resize", handlePosition);
      window.removeEventListener("scroll", handleNavbarSticky);
    };
  },[]);
  return (
    <>
    <div className={active? "block":"hidden"}>
      <Navbar position="sticky" isSticky={isNavStick}/>
    </div>
    <Navbar />
    </>
  )
}

export default Navbar_Compressed