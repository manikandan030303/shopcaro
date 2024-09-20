 import React from 'react'
 import Navbar from './Components/Navbar/Navbar'
 import Hero from './Components/Hero' 
 import Products from './Components/Products'
import Topproduct from './Components/Topproduct'
import Banner from './Components/Banner'
import Subscribe from './Components/Subscribe'
 import AOS from "aos";
 import "aos/dist/aos.css"
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import Popup from './Components/Popup'
 const App = () => {
  const [orderPopup,setOrderPopup] = React.useState (false);
  const handleOrderPopup =()=>{
    setOrderPopup(!orderPopup);
  };
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    })
    AOS.refresh();
  },[]);
   return (
     <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 '>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products />
      <Topproduct handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials/>
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
     </div>
   )
 }
 
 export default App