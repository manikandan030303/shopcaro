import React from 'react'
import banner from '../assets/banner.jpg'
import { GrSecure } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi"
const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                <div data-aos="zoom-in">
                    <img src={banner} alt="" className='max-w-[450px] rounded-2xl h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(1,1,1,0)] object-cover' />
                </div>
                <div className='flex flex-col gap-5 sm:pt-0'>
                    <h1 className='text-3xl sm:text-4xl font-bold max-w-[500px]'>Festvel Sale Upto 60% Offer</h1>
                    <p className='text-sm text-gray-500 -tracking-wide leading-5'>The Comming Festvel Offer Soon.family purchase extra 10% offer.Marrige Wasties and Saries also Available with Existing Gifts</p>
                    <div className='flex flex-col gap-4'>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                            <GrSecure   className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"/>
                            <p>Secured Delivery</p>
                        </div>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                            <FaShippingFast  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-100 dark:bg-blue-400"/>
                            <p>Fastest Delivery</p>
                        </div>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                            <FaGooglePay  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400"/>
                            <p>Easy Online Payments</p>
                        </div>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                            <BiSolidOffer  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400"/>
                            <p>Offers Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner