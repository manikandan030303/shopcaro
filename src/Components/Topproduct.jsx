import React from 'react'
import Img1 from "../assets/shirt.png"
import Img2 from "../assets/tshirt.png"
import Img3 from "../assets/shirt2.png"
import { FaStar } from "react-icons/fa";
const ProductData=[
    {
        id:1,
        img:Img1,
         title:"Checked Casual Shirt",
         discription:"This shirt is a Normal Casual Shirt and Unique Design Checked pattern.Looking Awesome Shirt",
    },
    {
        id:2,
        img:Img2,
         title:"Modren TShirt",
         discription:"This shirt is a Normal Casual Shirt and Unique Design Checked pattern.Looking Awesome Shirt",
    },
    {
        id:3,
        img:Img3,
         title:"Checked Shirt inside Tshirt",
         discription:"This shirt is a Normal Casual Shirt and Unique Design Checked pattern.Looking Awesome Shirt",
    },
];
const Topproduct = ({handleOrderPopup}) => {
  return (
    <div>
        <div className='container-1'>
            <div className='text-left ml-20 mb-24 '>
                <p className='text-sm text-primary' data-aos="fade-up">Top Rated Products for You</p>
                <h1 className='text-3xl font-bold ' data-aos="fade-up">Top Rated Products</h1>
                <p className='text-xs text-gray-400 mt-2' data-aos="fade-up">A New Trendind Ready made Collections Saries,chudies,and Morden Dress Available for you</p>
            </div>
           
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center pt-11'>
            {ProductData.map((data)=>(
                <div className='rounded-2xl bg-white hover:bg-black/80 hover:text-white dark:bg-gray-800 dark:hover:bg-primary relative duration-high shadow-xl group max-w-[300px] '>
                    <div className='h-[100px] pl-14'>
                        <img src={data.img} alt=""  className='w-[180px] h-[170px]  transform -translate-y-20 group-hover:scale-105 duration-300  '/>
                    </div>
                    <div className='p-4 text-center'>
                        <div className='w-full flex justify-center items-center gap-1'>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                        </div>
                        <h1 className='text-xl font-bold'>{data.title}</h1>
                        <p className=' text-gray-500 group-hover:text-white text-sm line-clamp-3 duration-300'>{data.discription}</p>
                         <button onClick={handleOrderPopup} className='bg-primary hover:scale-150 text-white py-1 px-4 duration-300 rounded-full mt-4 group-hover:bg-white group-hover:text-primary' /*onClick={handleOrderPopup}*/ > 
                            Order Now
                        </button>
                    </div>
                </div>
            ))}
          </div>

     </div>

    </div>
  )
}

export default Topproduct