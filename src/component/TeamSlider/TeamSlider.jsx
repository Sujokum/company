"use client"
import React from "react";
import { Swiper, SwiperSlide ,useSwiper } from 'swiper/react';
import { Autoplay ,Navigation } from "swiper/modules";
import Image from "next/image";
import 'swiper/css';
import "swiper/css";
const TeamSlider = () => {

    const SwiperButtonNext = ({ children }) => {
        const swiper = useSwiper();
        return <div className="absolute z-10 w-full top-0 h-full flex justify-center items-center  " > 
        <div className=" flex items-end justify-between h-[420px] w-1/2 " >

        <button className="cursor-pointer" onClick={() => swiper.slidePrev()}><Image src={'/assets/images/slidePre.png'} alt="prewBtn" width={200} height={200} className="w-8" /></button>
        <button className="cursor-pointer" onClick={() => swiper.slideNext()}><Image src={'/assets/images/slideNext.png'} alt="prewBtn" width={200} height={200} className="w-8" /></button>
        </div>
        
        </div>;
      };
  return (
    <>
      <Swiper
    // spaceBetween={50}
    slidesPerView={1}
    // autoplay={true}
    navigation
    modules={[Autoplay , Navigation]}
    loop={true}
    className="relative"
  >
   <SwiperButtonNext/>
    <SwiperSlide>
    <div className=" w-full h-[800px] flex justify-center items-center " >
            <div className="flex flex-col items-center w-[720] " >
                <div>
                    <Image src={"/assets/images/NadiaIqbal.png"} alt="team" width={500} height={500} className="w-full" />        
                </div>
                <div className="flex max-xl:flex-col max-xl:items-center max-xl:w-[300px]  mt-[30px] justify-center gap-x-[15px]  w-[500px]" >
                        <div className="w-[197px] font-steelfish flex flex-col    " >
                            <h1 className="text-blue text-[64px]   " >NADIA IQBAL</h1>
                            <h3 className="text-orange text-[40px] -mt-5    " >CEO/CO-FOUNDER</h3>
                        </div>
                        <div className="max-xl:w-[204px] max-xl:flex max-xl:flex-col max-xl:items-center 2xl:w-[250px] font-poppins text-[14px]  pt-[16px] ">
                            <p className="max-xl:text-center" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <div className="flex max-xl:mt-3  items-center gap-2 " >
                                <a href="/" >
                                    <Image width={300} height={300} className=" max-xl:w-[20px] w-[30px] h-auto" src="/assets/images/facebookIcon.png" alt="facebook icon" />
                                </a>
                                <a href="/" >
                                    <Image width={200} height={200} className="max-xl:w-[20px] w-[30px] h-auto" src="/assets/images/instaIcon.png" alt="Instagram icon" />
                                </a>
                                <a href="/" >
                                    <Image width={200} height={200} className= "max-xl:w-[20px] w-[30px] h-auto" src="/assets/images/linkdin.png" alt="Instagram icon" />
                                </a>
                                <a href="/" >
                                    <Image width={200} height={200} className="max-xl:w-[20px] w-[30px] h-auto" src="/assets/images/twitter.png" alt="Instagram icon" />
                                </a>
                            </div>
                        </div>
                </div>
            </div>    

    </div>
    </SwiperSlide>



    <SwiperSlide>
    <div className=" w-full h-[800px] flex justify-center items-center " >
            <div className="flex flex-col items-center w-[720] " >
                <div>
                    <Image src={"/assets/images/ShaukatHayat.png"} alt="team" width={500} height={500} className="w-full" />        
                </div>
                <div className="flex max-xl:flex-col max-xl:items-center max-xl:w-[300px]  mt-[30px] justify-center gap-x-[15px]  w-[500px]" >
                        <div className="w-[247px] font-steelfish flex flex-col    " >
                            <h1 className="text-blue text-[64px]   " >Shaukat Hayat</h1>
                            <h3 className="text-orange text-[40px] -mt-5    " >COO/ Co-founder</h3>
                        </div>
                        <div className="max-xl:w-[204px] max-xl:flex max-xl:flex-col max-xl:items-center 2xl:w-[250px] font-poppins text-[14px]  pt-[16px] ">
                            <p className="max-xl:text-center" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <div className="flex max-xl:mt-3  items-center gap-2 " >
                                <a href="/" >
                                    <Image width={300} height={300} className=" max-xl:w-[20px] w-[30px] h-auto" src="/assets/images/facebookIcon.png" alt="facebook icon" />
                                </a>
                                <a href="/" >
                                    <Image width={200} height={200} className="max-xl:w-[20px] w-[30px] h-auto" src="/assets/images/instaIcon.png" alt="Instagram icon" />
                                </a>
                                <a href="/" >
                                    <Image width={200} height={200} className= "max-xl:w-[20px] w-[30px] h-auto" src="/assets/images/linkdin.png" alt="Instagram icon" />
                                </a>
                                <a href="/" >
                                    <Image width={200} height={200} className="max-xl:w-[20px] w-[30px] h-auto" src="/assets/images/twitter.png" alt="Instagram icon" />
                                </a>
                            </div>
                        </div>
                </div>
            </div>    

    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className=" w-full h-[800px] flex justify-center items-center " >
            <div className="flex flex-col items-center w-[720] " >
                <div>
                    <Image src={"/assets/images/Danish.png"} alt="team" width={500} height={500} className="w-full" />        
                </div>
                <div className="flex max-xl:flex-col max-xl:items-center max-xl:w-[300px]  mt-[30px] justify-center gap-x-[15px]  w-[500px]" >
                        <div className="w-[231px] font-steelfish flex flex-col    " >
                            <h1 className="text-blue text-[64px]   " >Danish Karim</h1>
                            <h3 className="text-orange text-[40px] -mt-5    " >Cto</h3>
                        </div>
                        <div className="max-xl:w-[204px] max-xl:flex max-xl:flex-col max-xl:items-center 2xl:w-[250px] font-poppins text-[14px]  pt-[16px] ">
                            <p className="max-xl:text-center" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <div className="flex max-xl:mt-3  items-center gap-2 " >
                                <a href="/" >
                                    <Image width={300} height={300} className=" max-xl:w-[20px] w-[30px] h-auto" src="/assets/images/facebookIcon.png" alt="facebook icon" />
                                </a>
                                <a href="/" >
                                    <Image width={200} height={200} className="max-xl:w-[20px] w-[30px] h-auto" src="/assets/images/instaIcon.png" alt="Instagram icon" />
                                </a>
                                <a href="/" >
                                    <Image width={200} height={200} className= "max-xl:w-[20px] w-[30px] h-auto" src="/assets/images/linkdin.png" alt="Instagram icon" />
                                </a>
                                <a href="/" >
                                    <Image width={200} height={200} className="max-xl:w-[20px] w-[30px] h-auto" src="/assets/images/twitter.png" alt="Instagram icon" />
                                </a>
                            </div>
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