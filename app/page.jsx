import Hero from "../src/components/Home/hero/hero"
import SaleCountDown from "../src/components/Home/saleCount/saleCountDown"
import FeaturedProducts from "../src/components/Home/FeaturedProducts/FeaturedProducts"
import OrderForm from "../src/components/Home/Order/OrderForm"
import Testimonial from "../src/components/Home/testimonial/testimonial"
import Footer from "../src/components/Home/footer/footer"
import Navbar from "../src/components/Home/Navbar/Navbar"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SaleCountDown/>
      <FeaturedProducts/>
      <OrderForm/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home