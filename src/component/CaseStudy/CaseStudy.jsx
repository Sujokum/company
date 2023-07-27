import React from 'react'
import ExportedImage from "next-image-export-optimizer";
// import Image from 'next/image'

import ClimeateCrunch from '../../../public/images/climateCrunch.png'
import CRD from '../../../public/images/Crd.png'
import Rewardle from '../../../public/images/Rewardle.png'
import Milk from '../../../public/images/Milk.png'
import Calculator from '../../../public/images/calculator.png'
import CanteenBaba from '../../../public/images/canteenBaba.png'
import Wine from '../../../public/images/wine.png'
import Foo from '/public/images/abovefoo.png'
const CaseStudy = () => {
    const data = [
        {
            id : 1,
            heading : "Climate Crunch",
            para : "A day to day App, Tracking our actions and guiding us how to make the world better place, to understand this more better its just like apps those are compulsory in any phone like Health/Fitness, Clock, Calculator, Campass, News etc",
            icon1 : "Node JS",
            icon2 : "Flutter",
            icon3 : "IOS",
            img : ClimeateCrunch

        },
        {
            id : 2,
            heading : "Milk & Munchies",
            para : "the app connects skilled professionals with parents and children, allowing professionals to reserve time slots for knowledge-sharing sessions at the physical location 'Tech Treats by Milk and Munches.' The sessions take place in a tech-themed environment, where professionals discuss technology or skills with the child while the food order is being prepared. The app facilitates the booking process, payment transactions, and profiles for professionals, parents, and children.",
            icon1 : "Node JS",
            icon2 : "Flutter",
            icon3 : "IOS",
            img : Milk

        },
        {
            id : 3,
            heading : "Canteen Baba",
            para : "At Alphalogix, we follow a systematic approach to web development. From requirement gathering and design to development and launch, we ensure a seamless process. Partner with us for exceptional results that align with your goals.",
            icon1 : "Node JS",
            icon2 : "Flutter",
            icon3 : "IOS",
            img : CanteenBaba
        },
        {
            id : 5,
            heading : "CRD",
            para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d",
            icon1 : "Node JS",
            icon2 : "Flutter",
            icon3 : "IOS",
            img : CRD
        },
        {
            id : 6,
            heading : "Rewardle",
            para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d",
            icon1 : "Node JS",
            icon2 : "Flutter",
            icon3 : "IOS",
            img : Rewardle
        },
        {
            id : 7,
            heading : "Wine Hunter",
            para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d",
            icon1 : "Node JS",
            icon2 : "Flutter",
            icon3 : "IOS",
            img : Wine
        },
        {
            id : 8, 
            heading : "calculator.com",
            para : "Our online scientific calculator leverages the MathQuill library to display mathematical expressions and the Math.js library for accurate calculations. Offering a comprehensive range of mathematical operations and functionalities, users can input equations using the MathQuill interface, while Math.js handles the computation, delivering precise results.",
            icon1 : "Node JS",
            icon2 : "Flutter",
            icon3 : "IOS",
            img : Calculator

        },
    ]
  return (
    <div className='w-full relative max-md:px-[30px] px-[59px] bg-gradient-to-b from-[#00B9AD] to-[#026861] pt-[9px] pb-[165px]' >
        <div className='absolute bottom-0 w-full left-0 ' >
            <ExportedImage   src={Foo} width={200} height={200} className='w-full' alt="footerImage" />
        </div>
        <h1 className='font-steelfish max-sm:text-[30px] font-bold max-md:text-[80px] max-2xl:text-[80px] 2xl:text-[128px] text-white/50 ' >
            Case Study
        </h1>
        <div className='w-full flex justify-center flex-wrap max-md:gap-[20px] gap-[30px]' >
            {
                data?.map((val)=>(

                
            <div key={val.id} className=' max-md:w-[95%] max-md:px-0 w-[368px] px-[7px] pt-[8px] pb-[20px] flex rounded-[20px] flex-col items-center min-h-[376px] bg-[#00B9AD]/50 ' >
                <div className='w-full  h-[169px]' >
                    <ExportedImage src = {val?.img} alt='images' width={500} height={500}  className = 'w-full h-full max-md:object-cover  rounded-[20px]'  />
                </div>

                <div className='w-full text-center px-[20px]' >

                    <h1 className='my-[11px] font-nasalization text-[34px] overflow-hidden text-white ' >{val.heading}</h1>
                    <p className='text-white font-poppins text-[14px]  '>{val.para}</p>
                    
                </div>

                <div className='flex mt-[20px] justify-between max-md:flex-col max-md:gap-y-4 w-full px-[38px]' >
                    <button className='px-[17px] py-[4px] text-[16px] text-blue rounded-[15px] bg-white font-poppins shadow-sm'>{val.icon1}</button>
                    <button className='px-[17px] py-[4px] text-[16px] text-blue rounded-[15px] bg-white font-poppins shadow-sm' >{val.icon2}</button>
                    <button className='px-[17px] py-[4px] text-[16px] text-blue rounded-[15px] bg-white font-poppins shadow-sm' >{val.icon3}</button>
                </div>

            </div>
            )
                
            )
        }
         <div  className='w-[368px] px-[7px] pt-[8px] pb-[20px] flex rounded-[20px] flex-col items-center justify-center min-h-[376px] bg-[#00B9AD]/50 ' >
                

                <div className='w-full text-center px-[20px]' >

                    <h1 className='my-[11px] font-nasalization text-[34px] text-white ' >Comming Soon</h1>
                    
                </div>


            </div>
        </div>
    </div>
  )
}

export default CaseStudy