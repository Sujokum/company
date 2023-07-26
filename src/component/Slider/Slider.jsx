"use client"
import React from "react";
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import ExportedImage from "next-image-export-optimizer";
// import Image from "next/image";
import bgWhiteShade from '../../../public/images/bgWhiteShade.png'
import webGif from '../../../public/images/leptopGif.gif'
import mobGif from '../../../public/images/mobile.gif'
import uiuxGif from '../../../public/images/UIUX-01.gif'
import graphicGif from '../../../public/images/graphic.gif'
import dataGif from '../../../public/images/data.gif'
import blockchainGif from '../../../public/images/blockchain.gif'
import CMSGIF from '../../../public/images/CMS.gif'


import 'swiper/css';
import "swiper/css";
const Slider = () => {

  const sliderData = [
    {
      id : 1,
      heading : "WEB",
      heading2:"DEVELPOMENT",
      para : "Unlock your online potential with our expert web development services. Our skilled team crafts SEO-optimized websites that drive organic traffic, boost search rankings, and deliver exceptional user experiences.",
      image : webGif,

      
    },
    {
      id : 2,
      heading : "Mobile",
      heading2:"DEVELPOMENT",
      para : "Experience cutting-edge mobile development solutions that empower your business. Our skilled team delivers high-quality mobile applications tailored to your unique requirements, ensuring seamless performance and exceptional user experiences.",
      image : mobGif,
    },
    {
      id : 3,
      heading : "UI/UX",
      heading2:"DESIGN",
      para : "Discover captivating user experiences and stunning interfaces with our UI/UX design services. We redefine digital interactions, crafting visually striking and intuitive designs that elevate your brand to new heights.",
      image : uiuxGif,
    },
    {
      id : 4,
      heading : "GRAPHIC",
      heading2:"DESIGN",
      para : "Experience the power of visual storytelling through our exceptional graphic design services. Our talented team brings ideas to life with captivating visuals and innovative designs, leaving your brand standing out and your audience inspired.",
      image : graphicGif,
    },
    {
      id : 5,
      heading : "DATA",
      heading2:"SCIENCE",
      para : "Uncover hidden insights in your data with our expert data science services. Our skilled team uses advanced analytics and machine learning to empower businesses with data-driven strategies for growth and optimization.",
      image : dataGif,
    },
    {
      id : 6,
      heading : "BLOCKCHAIN",
      heading2:"DEVELOPMENT",
      para : "Revolutionizing industries with cutting-edge blockchain solutions. Experience secure, transparent, and efficient business processes with our expert team.",
      image : blockchainGif,
    },
    {
      id : 7,
      heading : "CMS",
      heading2:"DEVELOPMENT(WORDPRESS)",
      para : "Streamline your content management with our expert CMS development. Effortlessly create, edit, and publish content for an exceptional user experience.",
      image : CMSGIF,
    },
  ]
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
    autoplay={true}
    modules={[Autoplay]}
    loop={true}
    
  >
    {
      sliderData?.map((val)=>(

      
    <SwiperSlide key={val.id}>
    <div className="h-[80vh]  relative w-full slide1 flex  HomeBg  justify-center items-center max-sm:px-[50px] max-md:px-[40px]  md:px-[100px] xl:px-[150px] max-2xl:pb-[20px] 2xl:px-[160px]" >
                
                    <div className='absolute  -bottom-20   -z-20' >
                    <ExportedImage src={bgWhiteShade} className="   xl:w-[50rem] 2xl:w-[85rem] " />
                    </div>
                    <div className='flex max-2xl:mb-[20px]  relative justify-between items-center    h-full 2xl:w-full  ' >
                        <div className="flex uppercase  max-md:w-full   max-sm:p-2  flex-col  font-steelfish  gap-3" >
                        <h1 className='text-blue font-bold max-md:text-7xl md:text-8xl xl:text-7xl 2xl:9xl ' >{val.heading}</h1>
                        <h1 className='text-gray font-bold break-words max-lg:2-full lg:w-1/2 2xl:w-full    max-md:text-7xl md:text-7xl xl:text-7xl 2xl:9xl  ' >{val.heading2}</h1>
                        <p className='  text-gray  max-md:w-[100%]  max-xl:w-[40%] xl:w-[40%]  2xl:w-[40%] font-poppins max-md:text-md md:text-md xl:text-[17px] 2xl:text-lg ' >{val.para}</p>
                        <button className='mt-5 max-md:w-[160px] md:w-[160px] 2xl:w-[160px] px-[30px] font-poppins py-[9px] bg-orange shadow-md text-white text-[14px] rounded-3xl' >
                            Get a Quote</button>
                        </div>
                        <div className="absolute -z-10 max-xl:-right-0 max-xl:-top-5  right-0 max-xl:w-[250px]  xl:w-[584px]" >
                        <ExportedImage src={val?.image}  alt="images" className="w-full " />
                        </div>
                    </div>

    </div>
    </SwiperSlide>
    ))
  }


 

    
   
   


   
    
  </Swiper>
  )
}

export default Slider