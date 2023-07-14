"use client"
import React from "react";
import { Swiper, SwiperSlide ,useSwiper } from 'swiper/react';
import { Autoplay ,Navigation } from "swiper/modules";
import Image from "next/image";
import 'swiper/css';
import "swiper/css";
import './testimonial.css'
const Testimonial = () => {
  const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return <div className="absolute     z-10 w-[100%]  top-0 left-0   h-full   " > 
    <div className=" flex items-center justify-between  h-[420px] w-full " >

    <button className="cursor-pointer" onClick={() => swiper.slidePrev()}><Image src={'/assets/images/slidePre.png'} alt="prewBtn" width={200} height={200} className="w-8" /></button>
    <button className="cursor-pointer" onClick={() => swiper.slideNext()}><Image src={'/assets/images/slideNext.png'} alt="prewBtn" width={200} height={200} className="w-8" /></button>
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
    
    
    className='   w-[80%]  justify-center ps-[100px]  '
    >
      <SwiperButtonNext/>
      <SwiperSlide  className=" flex justify-center  "   >
        <div className="flex justify-center" >

            <Image src={'/assets/images/test1.png'} width={100} height={100} className="w-[80px]" alt="john" />
        </div>
      <div className='  w-[300px]  shadow-md -mt-10  mx-auto cursor-pointer px-[32px] py-8  rounded-xl  bg-[#00B9AD]/50 '>
        <div className='flex  text-white   items-center py-3  flex-col'>
          <div className="w-full flex flex-col  items-center" >
            <h1 className = 'font-nasalization font-[16px]' >Mr.John Smith</h1>
            <p className="font-poppins text-[14px]">CEO XYX Designs Pvt. Ltd</p>
          </div>

          <div className = 'mt-[17px]' >
            <Image src={'/assets/images/startQuotes.png'} width={200} height={200}  className="w-[30px]" />
            <p className = 'text-center font-poppins text-[12px] leading-[20px]' >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam
            </p>
            <Image src={'/assets/images/endQuotes.png'} width={200} height={200}  className="w-[30px]" />
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide  className=" flex justify-center  "   >
        <div className="flex justify-center" >

            <Image src={'/assets/images/test2.png'} width={100} height={100} className="w-[80px]" alt="john" />
        </div>
      <div className='  w-[300px]  shadow-md -mt-10  mx-auto cursor-pointer px-[32px] py-8  rounded-xl  bg-[#00B9AD]/50 '>
        <div className='flex  text-white   items-center py-3  flex-col'>
          <div className="w-full flex flex-col  items-center" >
            <h1 className = 'font-nasalization font-[16px]' >Mr.John Smith</h1>
            <p className="font-poppins text-[14px]">CEO XYX Designs Pvt. Ltd</p>
          </div>

          <div className = 'mt-[17px]' >
            <Image src={'/assets/images/startQuotes.png'} width={200} height={200}  className="w-[30px]" />
            <p className = 'text-center font-poppins text-[12px] leading-[20px]' >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam
            </p>
            <Image src={'/assets/images/endQuotes.png'} width={200} height={200}  className="w-[30px]" />
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide  className=" flex justify-center  "   >
        <div className="flex justify-center" >

            <Image src={'/assets/images/test3.png'} width={100} height={100} className="w-[80px]" alt="john" />
        </div>
      <div className='  w-[300px]  shadow-md -mt-10  mx-auto cursor-pointer px-[32px] py-8  rounded-xl  bg-[#00B9AD]/50 '>
        <div className='flex  text-white   items-center py-3  flex-col'>
          <div className="w-full flex flex-col  items-center" >
            <h1 className = 'font-nasalization font-[16px]' >Mr.John Smith</h1>
            <p className="font-poppins text-[14px]">CEO XYX Designs Pvt. Ltd</p>
          </div>

          <div className = 'mt-[17px]' >
            <Image src={'/assets/images/startQuotes.png'} width={200} height={200}  className="w-[30px]" />
            <p className = 'text-center font-poppins text-[12px] leading-[20px]' >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam
            </p>
            <Image src={'/assets/images/endQuotes.png'} width={200} height={200}  className="w-[30px]" />
          </div>
        </div>
      </div>
      </SwiperSlide>
 


      
    
    </Swiper>
    </div>
  );
};

export default Testimonial;
