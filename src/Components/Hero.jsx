import React from "react";
import banner1 from "../assets/Hero/img3.png";
import banner2 from "../assets/Hero/bg1.png";
import banner3 from "../assets/Hero/img22.png";
import Slider from "react-slick";
const ImageList = [
  {
    id: 1,
    img: banner1,
    title: "Upto 60% Offer in All Mens Wear",
    discription:
      "Ready-to-wear is the term used for clothing that’s pre-manufactured to standard sizes and sold in finished condition. For this reason, it differs from made-to-measure and bespoke clothing.",
  },
  {
    id: 2,
    img: banner2,
    title: "Upto 50% Offer in Marrige Functions",
    discription:
      "Ready-to-wear Marrige Wasty Shirts and Saries ...Like too Offer Soon Upto 60% Quick to buy a Dress Collections and Existing Gifts ",
  },
  {
    id: 3,
    img: banner3,
    title: "Upto 35% Offer in All Kids Wear",
    discription:
      "Fabrics: Children's clothing can be made from a variety of fabrics, including cotton, polyester, nylon, and spandex.",
  },
];
const Hero = ({handleOrderPopup}) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: false,
  };
  return (
    <div className="relative overflow-hidden min-h-[550px]  sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className=" h-[700px] w-[700px]  bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold" data-aos="fade-up" data-aos-once="true" data-aos-duration="500">
                     {data.title}
                  </h1>
                  <p className="text-sm" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">
                     {data.discription}
                  </p>
                  <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
                    <button onClick={handleOrderPopup} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full ">
                      OrderNow
                    </button>
                  </div>
                </div>
                <div className="order-2 sm:order-1 ">
                  <div className="relative z-10" data-aos="zoom-in" data-aos-once="true">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
