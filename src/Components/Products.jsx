import React from 'react'
import poto1 from "../assets/8.5.2024.jpg"
import poto2 from "../assets/yellow.jpg"
import poto3 from "../assets/red.jpg"
import poto4 from "../assets/Hukum  135.jpg"
import poto5 from "../assets/blue.jpg"
import { FaStar } from "react-icons/fa";
const ProductsItem =[
  {
    id:1,
    img:poto1,
    title: "Women Traditional",
    rating: 5.0,
    author:"Megantha" ,
    aosDelay:"0" ,
  },
  {
    id:2,
    img:poto2,
    title: "Women Ethnic",
    rating: 4.4,
    author:"yellow" ,
    aosDelay:"200" ,
  },
  {
    id:3,
    img:poto3,
    title: "Fancy Suditar",
    rating: 4.8,
    author:"red" ,
    aosDelay:"400" ,
  },
  {
    id:4,
    img:poto4,
    title: "Morden Dress",
    rating: 4.5,
    author:"light Megantha" ,
    aosDelay:"600" ,
  },
  {
    id:5,
    img:poto5,
    title: "Chaithra",
    rating: 5.0,
    author:"blue" ,
    aosDelay:"800" ,
  },

];
const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p className='text-sm text-primary' data-aos="fade-up">Top Selling Products for You</p>
                <h1 className='text-3xl font-bold' data-aos="fade-up">Products</h1>
                <p className='text-xs text-gray-400 mt-2' data-aos="fade-up">A New Trendind Ready made Collections Saries,chudies,and Morden Dress Available for you</p>
            </div>
            <div>
              <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                {
                  ProductsItem.map((data)=>(
                    <div key={data.id} data-aos="fade-up" data-aos-delay={data.aosDelay} className='space-y-3'>
                      <img src={data.img} alt="" className='h-[200px] w-[150px] object-cover rounded-md'/>
                      <div>
                        <h3 className='font-semibold'>{data.title}</h3>
                        <p className="text-sm text-gray-600">{ data.author}</p>
                        <div className='flex items-center gap-1'>
                          <FaStar className="text-yellow-400" />
                          <span>{data.rating}</span>
                        </div>
                      </div>
                    </div>

                    
                  ))
                }
              </div>
              <div className='flex justify-center'>
                <button className='text-center bg-primary text-white rounded-md p-1 mt-10 py-1'>View All Product</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Products