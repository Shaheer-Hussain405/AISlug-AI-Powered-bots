import React from 'react'
import { Suspense,lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import LoadingData from './components/LoadingData';
import "./static/card-002.css"

const Home = lazy(()=> import("./Pages/Home"))
const About = lazy(()=> import("./Pages/About"))
const Career = lazy(()=> import("./Pages/Career"))
const Blogs = lazy(()=> import("./Pages/Blogs"))
const Blog_details = lazy(()=> import("./Pages/Blog_details"))
const Login = lazy(()=> import("./Pages/Login"))
const Signup = lazy(()=> import("./Pages/Signup"))
const Contact = lazy(()=> import("./Pages/Contact"))

const App = () => {
  return (
    <>
    <main className='relative'>
      <Suspense fallback={<LoadingData/>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blogs/:idx' element={<Blog_details/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </Suspense>
    </main>
    </>
  )
}

export default App