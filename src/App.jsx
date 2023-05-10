import React from 'react';
import Header from './components/Header'
import Welcomebar from './components/Welcomebar'
import Utilitybar from './components/Utilitybar'
import Navbar from './components/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import OnlineShop from './Pages/OnlineShop';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import BackToTop from './components/BackToTop';

const App = () => {
  return (
    <div className='font-poppins main'>
       <Welcomebar/>
       <Utilitybar/>
       <Navbar/>
       <div className="">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AboutUs' element={<Aboutus/>}/>
          <Route path='/OnlineShop' element={<OnlineShop/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
        <BackToTop/>
       </div>
    </div>
  )
}

export default App