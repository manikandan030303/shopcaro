import React from 'react'
import Banner from '../assets/bg.jpg'
 
const BannerImg ={
    backgroundImage:`url(${Banner})`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",

};
const Subscribe = () => {
  return (
    <div className='mb-20 bg-gray-100 dark:bg-gray-800 text-white' data-aos="zoom-in" style={BannerImg}>
        <div className='backdrop-blur-sm py-10 container'>
            <div>
                <h1 className='text-2xl sm:text-3xl !text-center sm:text-left font-semibold pb-2'>Get Notified About New products</h1>
                <input type="text" data-aos="fade-up" placeholder='Enter Your Email' className='w-full p-3' />
            </div>
        </div>
    </div>
  )
}

export default Subscribe