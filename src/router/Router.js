import React from 'react'
import {BrowserRouter,Routes,Route}from "react-router-dom"
import Header from '../layouts/Header'
import Home from "../pages/Home"
import Error from "../pages/Error"
import Blogs from "../pages/Blogs"
import About from "../pages/About"
import Features from '../pages/Features'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Content from '../pages/Content'
import Ocean from '../pages/featurte_Next/Ocean'
import Justice from '../pages/featurte_Next/Justice'
import Grow from '../pages/featurte_Next/Grow'
import Heaven from '../pages/featurte_Next/heaven'
import Nori from '../pages/blogs_Next/Nori'
import Pommy from '../pages/blogs_Next/Pommy'
import Well from '../pages/blogs_Next/Well'
import Life from '../pages/blogs_Next/Life'
import Gellary from '../pages/Gellary'
import Footer from '../layouts/Footer'

import { UserAuthContextProvider } from "../context/UserAuthContext";
import ProtectedRoute from "./ProtectedRoute";

//import MyApp from '../pages/Contact'
import Contact from '../pages/Contact'
import Review from '../pages/Review'

const Router = () => {
  return (
    
    <UserAuthContextProvider>
      <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/content' element={ <ProtectedRoute>
                    <Content />
                  </ProtectedRoute>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/blogs' element={ <ProtectedRoute>
                    <Blogs />
                  </ProtectedRoute>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/feature' element={ <ProtectedRoute>
                    <Features  />
                  </ProtectedRoute>}/>
        <Route path='/*' element={<Error/>}/>


        <Route path='/feature/ocean' element={<Ocean/>}/>
        <Route path='/feature/grow' element={<Grow/>}/>
        <Route path='/feature/justice' element={<Justice/>}/>
        <Route path='/feature/heaven' element={<Heaven/>}/>

        <Route path='/blogs/nori' element={<Nori/>}/>
        <Route path='/blogs/pommy' element={<Pommy/>}/>
        <Route path='/blogs/well' element={<Well/>}/>
        <Route path="/blogs/life" element={<Life/>}/>
        <Route path="/blogs/gellary" element={<Gellary/>}/>
        
        
        
    </Routes>
    <Footer/>
    </BrowserRouter>
    </UserAuthContextProvider>
    
  )
}

export default Router
