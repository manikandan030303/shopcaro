import React from 'react'
import Banner1 from '../assets/foot.jpg'
import ftlogo from '../assets/8539117.png'
import {FaFacebook,FaInstagram,FaLinkedin,FaLocationArrow,FaMobileAlt} from "react-icons/fa";
const BannerImg1={
    backgroundImage:`url(${Banner1})`,
    backgroundPosition:"bottom",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",

};
const FooterLinks=[
    {
        title:"Home",
        link:"/#"
    },
    {
        title:"About",
        link:"/#"
    },
    {
        title:"Contact Us",
        link:"/#"
    },
    {
        title:"Blog",
        link:"/#"
    }
];
const FooterLinks1=[
    {
        title1:"Kurties",
        link1:"/#"
    },
    {
        title1:"Suditars",
        link1:"/#"
    },
    {
        title1:"Fancy Collection",
        link1:"/#"
    },
    {
        title1:"Fuction Readymades",
        link1:"/#"
    }
];
const Footer = () => {
  return (
    <div style={BannerImg1} className='text-white '>
        <div className='container'>
            <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-36 pt-5'>
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'><img src={ftlogo} className="max-w-[50px]" alt="" />
                        ShopCaroo                  
                    </h1>
                    <p>A New Trending Ready made Collections Saries,chudies,and Morden Dress Available for you</p>
                </div>
                <div className='grid col-span-2 md:pl-10 grid-cols-2 sm:grid-cols-3'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link)=>(
                                        <li className='hover:text-primary cursor-pointer hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                            <span>{link.title}</span>
                                             
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>New Arivals</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks1.map((link1)=>(
                                        <li className='hover:text-primary cursor-pointer hover:translate-x-1 duration-300 text-gray-200'>
                                            <span>{link1.title1}</span>
                                             
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='ml-5'>
                        <div className='flex items-center gap-3 mt-7'>
                            <a href=""><FaInstagram className="text-3xl" /> </a>
                            <a href=""><FaLinkedin className="text-3xl" /> </a>
                            <a href=""><FaFacebook className="text-3xl" /> </a>
                            
                        </div>
                        <div className='mt-6'>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow/>
                                <p>Cuddalore,TamilNadu</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaMobileAlt/>
                                <p>+91 9025490551</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer