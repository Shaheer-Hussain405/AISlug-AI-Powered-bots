import React from 'react'
import { Suspense,lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar_Compressed from './sections/Navbar'
import LoadingData from './components/LoadingData';
import "./static/card-002.css"

const Home = lazy(()=> import("./Pages/Home"))
const About = lazy(()=> import("./Pages/About"))

const App = () => {
  return (
    <>
    <main className='relative'>
      <Navbar_Compressed/>
      <Suspense fallback={<LoadingData/>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </Suspense>
    </main>
    </>
  )
}

export default App