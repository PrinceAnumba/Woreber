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
import Clothing from './components/Clothing';
import Textiles from './components/Textiles';
import LeatherGoods from './components/LeatherGoods';
import Accessories from './components/Accessories';
import ProductDetail from './Pages/ProductDetail';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';

const App = () => {
  return (
    <div className='font-poppins main'>
       
        <Welcomebar/>
        <Utilitybar/>
        <Navbar/>
        
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/AboutUs' element={<Aboutus/>}/>
            <Route path='/OnlineShop' element={<OnlineShop/>}>
              <Route path='/OnlineShop/Clothing' element={<Clothing/>}/>
              <Route path='/OnlineShop/Cart' element={<Cart/>}/>
              <Route path='/OnlineShop/Wishlist' element={<Wishlist/>}/>
              <Route path='/OnlineShop/Textiles' element={<Textiles/>}>
                <Route path='/OnlineShop/Textiles/:id' element={<ProductDetail/>}/>
              </Route>
              <Route path='/OnlineShop/*' exact element={<ProductDetail/>}/>
              <Route path='/OnlineShop/LeatherGoods' element={<LeatherGoods/>}/>
              <Route path='/OnlineShop/Accessories' element={<Accessories/>}/>
            </Route>
            <Route path='/Blog' element={<Blog/>}/>
            <Route path='/Contact' element={<Contact/>}/>
          </Routes>
        <Footer/>
        <BackToTop/>    
  
    </div>
  )
}

export default App