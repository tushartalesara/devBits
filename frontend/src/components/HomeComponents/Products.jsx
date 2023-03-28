import React from 'react'
import Product from './Product'
import './Products.css'
const Products = () => {
  return (
    <div className='finances' id='finances'>
      <h1>OUR FINANCIAL SECURITIES</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <main className="cards-items">
            <Product />
            <Product />
            <Product />
            <Product />
          </main>
          </div>
        </div>
      </div>
  )
}

export default Products;
