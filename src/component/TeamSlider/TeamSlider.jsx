"use client"
import React from "react";
import { Swiper, SwiperSlide ,useSwiper } from 'swiper/react';
import { Autoplay ,Navigation } from "swiper/modules";
// import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import 'swiper/css';
import "swiper/css";
import img1 from '../../../public/images/NadiaIqbal.png';
import img2 from '../../../public/images/ShaukatHayat.png';
import img3 from '../../../public/images/Danish.png';
import facebookIcon from '../../../public/images/facebookIcon.png';
import instaIcon from '../../../public/images/instaIcon.png';
import linkdin from '../../../public/images/linkdin.png';
import twitter from '../../../public/images/twitter.png';
import Pre from '../../../public/images/slidePre.png';
import Next from '../../../public/images/slideNext.png';

import Link from "next/link";
const TeamSlider = () => {

    const team = [
        {
            id : 1 ,
            img : img1, 
            name : "NADIA IQBAL",
            role : "CEO/CO-FOUNDER",
            para : "Experienced React developer, passionate about clean code and common React standards, BSCS graduate. Works well in both team and solo environments.",
            Fbsocial : "https://www.facebook.com/nadia.iqbal.566?mibextid=ZbWKwL",
            InstaSocail : "https://instagram.com/nadi.shocks?igshid=MzRlODBiNWFlZA==",
            LinkdinSocial : "https://www.linkedin.com/in/nadia-iqbal-14387153",
            TwitterSocial : "https://twitter.com/Nadiahunzai?t=TreWfGIpUO9pxlqTkvKCeQ&s=08 "
        },
        {
            id : 2 ,
            img : img2, 
            name : "Shaukat Hayat",
            role : "COO/ Co-founder",
            para : "Experienced Communications Designer with expertise in Visual Communication, UI/UX Design, Advertising, and Branding. Bachelor of Design in Communication Design from National College of Arts, Lahore.",
            Fbsocial : "https://www.facebook.com/shaukathayathunzai?mibextid=ZbWKwL",
            InstaSocail : "https://instagram.com/hayathunzai?igshid=ZDc4ODBmNjlmNQ==",
            LinkdinSocial : "https://www.linkedin.com/in/shaukat-hayat-9303a29",
            TwitterSocial : "https://twitter.com/shkthayat?t=O5lzR5x5uJs3SJvOzY9zew&s=09"
        },
        {
            id : 3 ,
            img : img3, 
            name : "Danish Karim",
            role : "Cto",
            para : "Experienced Frontend Developer skilled in AWS Amplify, JavaScript, Reactjs (Redux, Context API), MERN, and TypeScript. Holds a Bachelor's degree in Computer Science from COMSATS University Islamabad.",
            Fbsocial : "https://www.facebook.com/danish.karim.18?mibextid=ZbWKwL",
            InstaSocail : "https://instagram.com/danish.kareem?igshid=MzNlNGNkZWQ4Mg==",
            LinkdinSocial : "https://www.linkedin.com/in/danish-karim-aab681128",
            TwitterSocial : "https://twitter.com/danishkarim96?t=iHXlJBLVD8zF9Q4KOUhZ0w&s=09"
        },
    ]

    const SwiperButtonNext = ({ children }) => {
        const swiper = useSwiper();
        return <div className=" w-full   h-full flex justify-center items-center  " > 
        <div className=" flex items-center justify-between  h-full max-xl:w-[100%] xl:w-[80%]  max-md:items-center  2xl:w-1/2 " >

        <button className="cursor-pointer" onClick={() => swiper.slidePrev()}><ExportedImage src={Pre} alt="prewBtn"  className="w-[30px]" /></button>
         {children}
        <button className="cursor-pointer" onClick={() => swiper.slideNext()}><ExportedImage src={Next} alt="prewBtn"  className="w-[30px]" /></button>
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
    centeredSlides = {true}
    loop={true}
    className="relative"
  >

   {
       team?.map((val)=>(
           <SwiperSlide key={val.id} >
            <SwiperButtonNext>
        <div className="   h-[800px] flex justify-center items-center " >
                <div className="flex flex-col items-center w-[720] " >
                    <div>
                        <ExportedImage src={val?.img} alt="team"  className="w-full" />        
                    </div>
                    <div className="flex max-xl:flex-col max-xl:items-center max-xl:w-[300px]  mt-[30px] justify-center gap-x-[15px] max-xl:ps-5  ps-24" >
                            <div className=" max-2xl:min-w-[300px] 2xl:w-[297px] font-steelfish flex flex-col max-xl:items-center   " >
                                <h1 className="text-blue  max-2xl:text-[45px] 2xl:text-[64px]   " >{val.name}</h1>
                                <h3 className="text-orange max-2xl:text-[30px] 2xl:text-[40px] -mt-5    " >{val.role}</h3>
                            </div>
                            <div className="max-2xl:w-[304px] max-xl:flex max-xl:flex-col max-xl:items-center 2xl:w-[250px] font-poppins text-[14px]  pt-[16px] ">
                                <p className="max-xl:text-center" >
                                    {val.para}
                                </p>
                                <div className="flex max-xl:mt-3  mt-2 items-center gap-2 " >
                                    <Link href={val.Fbsocial}   target="_blank"   className=" cursor-pointer " >
                                    
                                        <ExportedImage  className=" max-xl:w-[20px] w-[30px] h-auto" src={facebookIcon} alt="facebook icon" />
                                    
                                    </Link>
                                    <Link href={val.InstaSocail}  target="_blank" className="cursor-pointer" >
                                    
                                        <ExportedImage className="max-xl:w-[20px] w-[30px] h-auto" src={instaIcon} alt="Instagram icon" />
                                    
                                    </Link>
                                    <Link href={val.LinkdinSocial}  target="_blank" className="cursor-pointer" >
                                    
                                        <ExportedImage className= "max-xl:w-[20px] w-[30px] h-auto" src={linkdin} alt="Instagram icon" />
                                    
                                    </Link>
                                    <Link href={val.TwitterSocial}  target="_blank" className="cursor-pointer" >
                                    
                                    
                                        <ExportedImage className="max-xl:w-[20px] w-[30px] h-auto" src={twitter} alt="Instagram icon" />
                                    
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>    
    
        </div>
</SwiperButtonNext>
        </SwiperSlide>
    ))
}
    
    </Swiper>
    </>
  )
}

export default TeamSlider