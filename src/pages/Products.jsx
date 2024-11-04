import React from 'react';

function Products() {

  return (
    <div className='page-container'>
        <div className="page-wrapper">
          <div className='products-container'>
            <Product name="Dog Painting" price="$20"/>
            <Product name="Family Painting" price="$30"/>
            <Product name="Cat Painting" price="$10"/>
            <Product name="Horse Painting" price="$25"/>
          </div>
        </div>
    </div>
  )
}

function Product (props) {
  return(
    <div className='product'>
      <div>{props.name}</div>
      <div>{props.price}</div>
      <button>Add to basket</button>
    </div>
  )
}

export default Products