import React from 'react'

const CaseStudy = () => {
    const data = [
        {
            id : 1,
            heading : "Climate Crunch",
            para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d",
            icon1 : "Node JS",
            icon2 : "Flutter",
            icon3 : "IOS",

        },
        {
            id : 2,
            heading : "Milk & Munchies",
            para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d",
            icon1 : "Node JS",
            icon2 : "Flutter",
            icon3 : "IOS",

        },
        {
            id : 3,
            heading : "Canteen Baba",
            para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d",
            icon1 : "Node JS",
            icon2 : "Flutter",
            icon3 : "IOS",
        },
        {
            id : 4,
            heading : "Balito",
            para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d",
            icon1 : "Node JS",
            icon2 : "Flutter",
            icon3 : "IOS",

        },
        {
            id : 5,
            heading : "CRD",
            para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d",
            icon1 : "Node JS",
            icon2 : "Flutter",
            icon3 : "IOS",
        },
        {
            id : 6,
            heading : "Rewardle",
            para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d",
            icon1 : "Node JS",
            icon2 : "Flutter",
            icon3 : "IOS",
        },
        {
            id : 7,
            heading : "Wine Hunter",
            para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d",
            icon1 : "Node JS",
            icon2 : "Flutter",
            icon3 : "IOS",
        },
        {
            id : 8, 
            heading : "calculator.com",
            para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d",
            icon1 : "Node JS",
            icon2 : "Flutter",
            icon3 : "IOS",

        },
    ]
  return (
    <div className='w-full px-[59px] bg-gradient-to-b from-[#00B9AD] to-[#026861] pt-[9px] pb-[115px]' >
        <h1 className='font-steelfish font-bold text-[128px] text-white/50 ' >
            Case Study
        </h1>
        <div className='w-full flex justify-center flex-wrap gap-[30px]' >
            {
                data.map((val)=>(

                
            <div key={val.id} className='w-[368px] px-[7px] pt-[8px] pb-[20px] flex rounded-[20px] flex-col items-center min-h-[376px] bg-[#00B9AD]/50 ' >
                <div className='w-full  h-[169px] bg-white rounded-[20px]' >
                </div>

                <div className='w-full text-center px-[38px]' >

                    <h1 className='my-[11px] font-nasalization text-[34px] text-white ' >{val.heading}</h1>
                    <p className='text-white font-poppins text-[14px]  '>{val.para}</p>
                    
                </div>

                <div className='flex mt-[20px] justify-between w-full px-[38px]' >
                    <button className='px-[17px] py-[4px] text-[16px] text-blue rounded-[15px] bg-white font-poppins shadow-sm'>{val.icon1}</button>
                    <button className='px-[17px] py-[4px] text-[16px] text-blue rounded-[15px] bg-white font-poppins shadow-sm' >{val.icon2}</button>
                    <button className='px-[17px] py-[4px] text-[16px] text-blue rounded-[15px] bg-white font-poppins shadow-sm' >{val.icon3}</button>
                </div>

            </div>
            )
                
            )
        }
        </div>
    </div>
  )
}

export default CaseStudy