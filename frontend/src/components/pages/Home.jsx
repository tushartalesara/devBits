import React from 'react'
import Footer from '../Footer'
import AboutUs from '../HomeComponents/AboutUs'
import Banner from '../HomeComponents/Banner'
import Products from '../HomeComponents/Products'
import Navbar from '../Navbar'
const Home = () => {
  return (
    <div>
        <a href="#top"> </a>
        <Navbar />
        <Banner />
        <Products />
        <AboutUs />
        <Footer />
    </div>
  )
}

export default Home
