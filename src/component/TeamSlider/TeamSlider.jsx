"use client"
import React from "react";
import { Swiper, SwiperSlide ,useSwiper } from 'swiper/react';
import { Autoplay ,Navigation } from "swiper/modules";
import Image from "next/image";
import 'swiper/css';
import "swiper/css";
const TeamSlider = () => {
    const swiper = useSwiper();

    const SwiperButtonNext = ({ children }) => {
        const swiper = useSwiper();
        return <button onClick={() => swiper.slideNext()}>{children}</button>;
      };
  return (
    <>
      <Swiper
    // spaceBetween={50}
    slidesPerView={1}
    autoplay={true}
    navigation
    modules={[Autoplay , Navigation]}
    loop={true}
    
  >
   <SwiperButtonNext>Slide</SwiperButtonNext>
    <SwiperSlide>
    <div className=" w-full h-[800px] flex justify-center items-center " >
            <div className="flex flex-col items-center w-[720] " >
                <div>
                    <Image src={"/assets/images/NadiaIqbal.png"} alt="team" width={500} height={500} className="w-full" />        
                </div>
                <div className="flex  mt-[30px] justify-center gap-x-[15px]  w-[419px]" >
                        <div className="w-[197px] font-steelfish flex flex-col   " >
                            <h1 className="text-blue text-[64px]" >NADIA IQBAL</h1>
                            <h3 className="text-orange text-[40px] mb-auto " >CEO/CO-FOUNDER</h3>
                        </div>
                        <div className="w-[204px] font-poppins text-[14px]  pt-[16px] ">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                </div>
            </div>    

    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className=" w-full h-[800px] flex justify-center items-center " >
    <div className="flex flex-col items-center w-[720] " >
                <div>
                    <Image src={"/assets/images/NadiaIqbal.png"} alt="team" width={500} height={500} className="w-full" />        
                </div>
                <div className="flex  mt-[30px] justify-center gap-x-[15px]  w-[419px]" >
                        <div className="w-[197px] font-steelfish flex flex-col   " >
                            <h1 className="text-blue text-[64px]" >NADIA IQBAL</h1>
                            <h3 className="text-orange text-[40px] mb-auto " >CEO/CO-FOUNDER</h3>
                        </div>
                        <div className="w-[204px] font-poppins text-[14px]  pt-[16px] ">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                </div>
            </div>    

    </div>
    </SwiperSlide>
    </Swiper>
    </>
  )
}

export default TeamSlider