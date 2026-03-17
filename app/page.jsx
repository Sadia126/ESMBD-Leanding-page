import Navbar from "../src/components/Home/Navbar/Navbar"
import Hero from "../src/components/Home/hero/hero"
import SaleCountDown from "../src/components/Home/saleCount/saleCountDown"
import Feature from "../src/components/Home/feature/feature"
import Delivery from "../src/components/Home/delivery/delivery"
import Testimonial from "../src/components/Home/testimonial/testimonial"
import Footer from "../src/components/Home/footer/footer"
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SaleCountDown/>
      <Feature/>
      <Delivery/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home