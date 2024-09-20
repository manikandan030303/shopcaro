import React from 'react'
import imd from '../assets/man1.jpeg'
import Slider from "react-slick";
import imd1 from '../assets/man2.jpg'
import imd2 from '../assets/man3.jpg'
import imd3 from '../assets/man4.jpg'
import imd4 from '../assets/man5.jpg'
const TestimonialsData =[
    {
        id:1,
        name:"Vishnuraj",
        text:"Nice and fast delivery within the promise time. The highlight is open delivery so we can cross check while delivery the product and no Plastic bags for packing..",
        img:imd,
    },
    {
        id:2,
        name:"Hema",
        text:"Nice and fast delivery within the promise time. The highlight is open delivery so we can cross check while delivery the product and no Plastic bags for packing..",
        img:imd1,
    },
    {
        id:3,
        name:"Arunkumar",
        text:"Nice and fast delivery within the promise time. The highlight is open delivery so we can cross check while delivery the product and no Plastic bags for packing..",
        img:imd2,
    },
     {
        id:4,
        name:"Sabari",
        text:"Nice and fast delivery within the promise time. The highlight is open delivery so we can cross check while delivery the product and no Plastic bags for packing..",
        img: imd3,
    },
    {
        id:5,
        name:"Gopinath",
        text:"Nice and fast delivery within the promise time. The highlight is open delivery so we can cross check while delivery the product and no Plastic bags for packing..",
        img: imd4,
    }
];
const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:true,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    intialSlide:2,
                },
            },
            {
                breakpoint:624,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    
                },
            },
        ],
      };
  return (
    <div className='py-10 mb-10'>
        <div className='container'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p className='text-sm text-primary' data-aos="fade-up"> What our Customer are Saying</p>
                <h1 className='text-3xl font-bold' data-aos="fade-up">Testimonials</h1>
                <p className='text-xs text-gray-400' data-aos="fade-up">A New Trendind Ready made Collections Saries,chudies,and Morden Dress Available for you</p>
            </div>
            
            <div>
            <Slider {...settings}>
            {TestimonialsData.map((data)=>(
                <div className='my-6'>
                     <div key={data.id} className='flex flex-col gap-4 shadow-lg px-6 py-8 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                <div className='mb-4' >
                    <img src={data.img} alt=""  className='rounded-full w-20 h-20 ml-10'/>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-3'>
                    <p className='text-xs text-gray-400'>{data.text}</p>
                    <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
                    </div>
                   
                </div>
                <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
            </div>
                </div>
               
                             
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonials