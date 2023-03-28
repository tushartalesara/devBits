import React from 'react'
import './Banner.css'
import {HashLink} from 'react-router-hash-link'

const Banner = () => {
  return (
    <div className='banner'>
      <h1>Everse, one place for all your needs</h1>
      <p>Best offers available</p>
      <div className="banner-btns">
        <HashLink to='#finances' className='banner-link' >
          <button className='btns btns-outline'>FINANCIAL SECURITIES</button>
        </HashLink>
        <HashLink to='#aboutUs' className='banner-link' >
          <button className='btns btns-outline'>ABOUT US</button>
        </HashLink>
      </div>
    </div>
  );
};

export default Banner;
