import React from 'react'
import './Banner.css'
import {HashLink} from 'react-router-hash-link'

const Banner = () => {
  return (
    <div className='banner'>
      <h1>Everse, one place for all your needs</h1>
      <p>Best offers available</p>
      <div className="banner-btns">
        <HashLink to='#products' className='link' >
          <button className='btns btns-outline'>OUR FINANCIAL SECURITIES</button></HashLink>
      </div>
    </div>
  );
};

export default Banner;
