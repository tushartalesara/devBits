import React from 'react'
import './Banner.css'
import {HashLink} from 'react-router-hash-link'

const Banner = () => {
  return (
    <div className='banner'>
      <h1>A place where you can trade different financial securities</h1>
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
