import React from 'react';
import Navbar from './Navbar';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Gallery from '../pages/Gallery';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Checkout from '../pages/Checkout';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

export default function Router() {
  const Layout = () => {
    return (
      <>
        <Navbar/>
        <Outlet/>
      </>
    )
  }

  const BrowserRouters = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/checkout" element={<Checkout/>}/>        
        </Routes>
      </BrowserRouter>
    )
  }
}