import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
        {/* <Link to='/' className='title'>Justine Ocken</Link> */}
        <Link to='/'><img className="title-img" src="/images/justine-logo-removebg-preview.png"/></Link>
        <nav>
            <Link to="/" className="link">HOME</Link>
            {/* <Link to="/products" className="link">PRODUCTS</Link> */}
            <Link to="/gallery" className="link">GALLERY</Link>
            <Link to="/contact" className="link">CONTACT</Link>
            {/* <div className='cart-area'>
              <Link to="/checkout" className="link"><ShoppingBasket/></Link>
              <div className='cart-total'>{cart}</div>
            </div> */}
        </nav>
    </header>
  )
}