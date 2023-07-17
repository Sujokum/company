"use client"
import React from "react";
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import 'swiper/css';
import "swiper/css";
const Slider = () => {

  const sliderData = [
    {
      id : 1,
      
    }
  ]
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
    autoplay={true}
    modules={[Autoplay]}
    loop={true}
    
  >
    <SwiperSlide>
    <div className="h-[78vh]  relative w-full slide1  flex  HomeBg  justify-center items-center max-sm:px-[50px] max-md:px-[100px] md:px-[160px] xl:px-[150px] 2xl:px-[160px]" >
                
                    <div className='absolute  -bottom-20   -z-20' >
                    <Image src={'/assets/images/bgWhiteShade.png'} width={300} height={300} className="  lg:w-[40rem] xl:w-[50rem] 2xl:w-[85rem] " />
                    </div>
                    <div className='flex  relative justify-between items-center  h-full w-full ' >
                        <div className="flex uppercase    max-sm:p-10  flex-col  font-steelfish  gap-3" >
                        <h1 className='text-blue font-bold max-md:text-7xl md:text-8xl xl:text-9xl ' >WEB</h1>
                        <h1 className='text-gray font-bold max-md:text-7xl md:text-8xl xl:text-9xl  ' >DEVELPOMENT</h1>
                        <p className='  text-gray max-sm:w-[80%] max-md:w-[100%]  max-xl:w-[40%] xl:w-[40%]  2xl:w-[40%] font-poppins max-md:text-md md:text-md xl:text-md 2xl:text-lg ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <button className='mt-5 max-md:w-[160px] md:w-[160px] 2xl:w-[160px] px-[30px] font-poppins py-[9px] bg-orange shadow-md text-white text-[14px] rounded-3xl' >
                            Get a Quote</button>
                        </div>
                        <div className="absolute -z-10 max-md:-right-0 max-md:-top-5  right-0 max-md:w-[250px]  md:w-[584px]" >
                        <Image src={'/assets/images/leptopGif.gif'} width={500} height={500} className="w-full " />
                        </div>
                    </div>

    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="h-[78vh]  relative w-full slide1  flex  HomeBg  justify-center items-center max-md:px-[100px] md:px-[160px] xl:px-[150px] 2xl:px-[160px]" >
                
                    <div className='absolute  -bottom-20   -z-20' >
                    <Image src={'/assets/images/bgWhiteShade.png'} width={300} height={300} className="  lg:w-[40rem] xl:w-[50rem] 2xl:w-[85rem] " />
                    </div>
                    <div className='flex  relative justify-between items-center  h-full w-full ' >
                        <div className="flex uppercase    max-sm:p-10  flex-col  font-steelfish  gap-3" >
                        <h1 className='text-blue font-bold max-md:text-7xl md:text-8xl xl:text-9xl ' >Mobile</h1>
                        <h1 className='text-gray font-bold max-md:text-7xl md:text-8xl xl:text-9xl  ' >DEVELPOMENT</h1>
                        <p className='  text-gray max-sm:w-[80%] max-md:w-[100%]  max-xl:w-[40%] xl:w-[40%]  2xl:w-[40%] font-poppins max-md:text-md md:text-md xl:text-md 2xl:text-lg ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <button className='mt-5 max-md:w-[160px] md:w-[160px] 2xl:w-[160px] px-[30px] font-poppins py-[9px] bg-orange shadow-md text-white text-[14px] rounded-3xl' >
                            Get a Quote</button>
                        </div>
                        <div className="absolute -z-10 max-md:-right-0 max-md:-top-3  right-0 max-md:w-[250px]  md:w-[584px]" >
                        <Image src={'/assets/images/mob-dev.gif'} width={500} height={500} className="w-full " />
                        </div>
                    </div>

    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="h-[78vh]  relative w-full slide1  flex  HomeBg  justify-center items-center max-md:px-[100px] md:px-[160px] xl:px-[150px] 2xl:px-[160px]" >
                
                    <div className='absolute  -bottom-20   -z-20' >
                    <Image src={'/assets/images/bgWhiteShade.png'} width={300} height={300} className="  lg:w-[40rem] xl:w-[50rem] 2xl:w-[85rem] " />
                    </div>
                    <div className='flex  relative  justify-between items-center  h-full w-full ' >
                        <div className="flex uppercase    max-sm:p-4 max-md:p-10  flex-col  font-steelfish  gap-3" >
                        <h1 className='text-blue font-bold max-md:text-7xl md:text-8xl xl:text-9xl ' >UI/UX</h1>
                        <h1 className='text-gray font-bold max-md:text-7xl md:text-8xl xl:text-9xl  ' >Design</h1>
                        <p className='  text-gray max-md:w-[100%]   max-xl:w-[40%] xl:w-[40%] font-poppins max-md:text-md md:text-md xl:text-md 2xl:text-lg ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <button className='mt-5 max-md:w-[160px] md:w-[160px] 2xl:w-[160px] px-[30px] font-poppins py-[9px] bg-orange shadow-md text-white text-[14px] rounded-3xl' >
                            Get a Quote</button>
                        </div>
                        <div className="absolute -z-10 max-md:-right-0 max-md:-top-3  right-0 max-md:w-[250px]  md:w-[584px]" >
                        <Image src={'/assets/images/UIUX-01.gif'} width={500} height={500} className="w-full " />
                        </div>
                    </div>

    </div>
    </SwiperSlide>
   
   


   
    
  </Swiper>
  )
}

export default Slider