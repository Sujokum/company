"use client"
import React from "react";
import { Swiper, SwiperSlide ,useSwiper } from 'swiper/react';
import { Autoplay ,Navigation } from "swiper/modules";
import ExportedImage from "next-image-export-optimizer";
import btnPre from  '/public/images/slidePre.png'
// import Image from "next/image";
import btnNext from  '/public/images/slideNext.png'
import test1 from  '/public/images/test1.png'
import test2 from  '/public/images/test2.png'
import test3 from  '/public/images/test3.png'
import startQuotes from  '/public/images/startQuotes.png'
import endQuotes from  '/public/images/endQuotes.png'
import 'swiper/css';
import "swiper/css";
import './testimonial.css'
const Testimonial = () => {
  const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return <div className="absolute     z-10 w-full  top-0 left-0   h-full   " > 
    <div className=" flex items-center justify-between  h-[420px] w-full " >

    <button className="cursor-pointer" onClick={() => swiper.slidePrev()}><ExportedImage src={btnPre} alt="prewBtn"  className="w-8" /></button>
    <button className="cursor-pointer" onClick={() => swiper.slideNext()}><ExportedImage src={btnNext} alt="prewBtn"  className="w-8" /></button>
    </div>
    
    </div>;
  };
  return (
    <div
    className="w-full overflow-x-hidden max-lg:px-3  px-16  relative  justify-center items-center min-h-[484px] py-24 bg-gradient-to-b from-[#00B9AD] to-[#026861] "
    >

    <Swiper
    spaceBetween={30}
    autoplay={true}
    navigation
    breakpoints={{
      640: {
        slidesPerView: 1,
    
      },
      768: {
        slidesPerView: 2,
     
      },
      1216: {
        slidesPerView: 3,
     
      }
    }}
    modules={[Autoplay , Navigation]}
    loop={true}
    
    
    className='   max-xl:w-full w-[80%]  justify-center ps-[100px]  '
    >
      <SwiperButtonNext/>
      <SwiperSlide  className=" flex justify-center  "   >
        <div className="flex justify-center" >

            <ExportedImage src={test1} className="w-[80px]" alt="john" />
        </div>
      <div className='  w-[300px]  shadow-md -mt-10  mx-auto cursor-pointer px-[32px] h-[400px] py-8  rounded-xl  bg-[#00B9AD]/50 '>
        <div className='flex  text-white   items-center py-3  flex-col'>
          <div className="w-full flex flex-col  items-center" >
            <h1 className = 'font-nasalization font-[16px]' >Mr.John Smith</h1>
            <p className="font-poppins text-[14px]">CEO XYX Designs Pvt. Ltd</p>
          </div>

          <div className = 'mt-[17px]' >
            <ExportedImage alt="quotes"  src={startQuotes} width={200} height={200}   className="w-[30px]" />
            <p className = 'text-center font-poppins text-[13px] leading-[20px]' >

            The visual appeal of our website after Alphalogix redesign is simply outstanding! They have an incredible eye for design, and our site now leaves a lasting impression on every visitor.
            </p>
            <ExportedImage src={endQuotes} alt="quotes" width={200} height={200}   className="w-[30px]" />
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide  className=" flex justify-center  "   >
        <div className="flex justify-center" >

            <ExportedImage src={test2}  className="w-[80px]" alt="john" />
        </div>
      <div className='  w-[300px]  shadow-md -mt-10  mx-auto cursor-pointer px-[32px] py-8 h-[400px]  rounded-xl  bg-[#00B9AD]/50 '>
        <div className='flex  text-white   items-center py-3  flex-col'>
          <div className="w-full flex flex-col  items-center" >
            <h1 className = 'font-nasalization font-[16px]' >Mr.John Smith</h1>
            <p className="font-poppins text-[14px]">CEO XYX Designs Pvt. Ltd</p>
          </div>

          <div className = 'mt-[17px]' >
            <ExportedImage src={startQuotes} width={200} height={200} alt="quotes"  className="w-[30px]" />
            <p className = 'text-center font-poppins text-[13px] leading-[20px]' >
            Our website was in dire need of an upgrade, and Alphalogix delivered beyond our expectations! Their web development team revamped our site with a modern design, seamless navigation, and improved performance. We've seen a significant increase in user engagement and conversions ever since
            </p>
            <ExportedImage src={endQuotes}  alt="quotes"  className="w-[30px]" />
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide  className=" flex justify-center  "   >
        <div className="flex justify-center" >

            <ExportedImage src={test3}  className="w-[80px]" alt="john" />
        </div>
      <div className='  w-[300px]  shadow-md -mt-10  mx-auto cursor-pointer px-[32px] py-8  rounded-xl h-[400px]  bg-[#00B9AD]/50 '>
        <div className='flex  text-white   items-center py-3  flex-col'>
          <div className="w-full flex flex-col  items-center" >
            <h1 className = 'font-nasalization font-[16px]' >Mr.John Smith</h1>
            <p className="font-poppins text-[14px]">CEO XYX Designs Pvt. Ltd</p>
          </div>

          <div className = 'mt-[17px]' >
            <ExportedImage src={startQuotes}  alt="quotes"  className="w-[30px]" />
            <p className = 'text-center font-poppins text-[13px] leading-[20px]' >
            Thanks to Alphalogix , our customer engagement increased by 30%, and we saw a 20% boost in our sales within just three months.
            and The support team is always prompt and helpful. They assisted us through every step of the onboarding process, making it seamless and stress-free.
            </p>
            <ExportedImage src={endQuotes}  alt="quotes"  className="w-[30px]" />
          </div>
        </div>
      </div>
      </SwiperSlide>
 


      
    
    </Swiper>
    </div>
  );
};

export default Testimonial;
