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
            <Product name="Stocks" desc="A stock is a form of security that indicates the holder has proportionate ownership in the issuing corporation and is sold predominantly on stock exchanges. Here you can buy and sell stocks avilable with us" link="/stocks"/>
            <Product name="Cryptos" desc="Cryptocurrency(Crypto), sometimes called crypto-currency or crypto, is any form of currency that exists digitally or virtually and uses cryptography to secure transactions. Here you can buy and sell cryptos avilable with us" link="/cryptos"/>
          </main>
          </div>
        </div>
      </div>
  )
}

export default Products;
