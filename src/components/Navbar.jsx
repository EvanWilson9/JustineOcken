import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingBasket } from 'lucide-react';
import { useState } from 'react'

//Probably make navbar words all caps, change font
//Add in the cart button later; get symbol
export default function Navbar() {

  const [cart, setCart] = useState(0)

  return (
    <header>
        <Link to='/' className='title'>Justine Ocken</Link>
        <nav>
            <Link to="/" className="link">HOME</Link>
            {/* <Link to="/products" className="link">PRODUCTS</Link> */}
            <Link to="/gallery" className="link">GALLERY</Link>
            <Link to="/about" className="link">ABOUT</Link>
            <Link to="/contact" className="link">CONTACT</Link>
            {/* <div className='cart-area'>
              <Link to="/checkout" className="link"><ShoppingBasket/></Link>
              <div className='cart-total'>{cart}</div>
            </div> */}
        </nav>
    </header>
  )
}