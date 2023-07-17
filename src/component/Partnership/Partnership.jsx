import React from 'react'
import PqartnershipCard from './PqartnershipCard'
const Partnership = () => {
    const data = [
        {
            id : 1,
            title : <h1 className='text-center font-nasalization text-gray text-[30px]'>Fixed Price <br /> Model</h1>,
            para : <p className='text-center font-poppins w-[80%] leading-[25px] text-[15px] text-gray'>In this model, the project's scope of work, including its cost and timeline, is established prior to commencing development. <br /> This approach is particularly suitable for extended periods of engagement. The client can have peace of mind, knowing that the project will adhere to the agreed-upon budget. <br /> This model is most suitable for clients who have a clear and well-defined vision of their requirements.</p>
        },
        {
            id : 2,
            title : <h1 className='text-center font-nasalization text-gray text-[30px]'>Hire Dedicated <br /> Model</h1>,
            para : <p className='text-center font-poppins w-[80%] leading-[25px] text-[15px] text-gray'>This engagement model follows a traditional and straightforward approach where clients compensate the app developer based on the number of hours worked on the project. <br /> It offers the advantage of clients being able to initiate the project without providing extensive specifications upfront. Additionally, this model enables clients to incorporate new features at any time, while also providing transparency regarding the services for which they are paying. <br />As a result, this model fosters a higher level of trust and facilitates effective communication.</p>
        },
        {
            id : 3,
            title : <h1 className='text-center font-nasalization text-gray text-[30px]'>On Site Development<br /> Model</h1>,
            para : <p className='text-center font-poppins w-[80%] leading-[25px] text-[15px] text-gray'>This model is favored when clients require additional temporary resources for on-site development. <br /> This type of contract ensures a cost-effective engagement while facilitating face-to-face interactions with developers. <br /> By adopting this model, deadlines can be met more efficiently due to continuous communication throughout the entire process. </p>
        },
    ]
  return (
<>
    <div className='w-full  flex justify-center bg-blue ' >
    <div className='flex flex-col items-center  w-full py-[22px] ' >
        <h1 className='text-[90px] max-md:text-[70px] font-steelfish text-center font-bold text-gray ' > <span className='text-white' > Partnership  </span> WE FOLLOW</h1>
        <p className='text-center font-poppins max-md:text-[14px]  text-[16px] text-white w-[430px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam</p>
    </div>
</div>
<div className='w-full py-[100px] gap-[20px] flex justify-between flex-wrap px-[101px] ' >
   {
    data?.map((val)=>(
        <PqartnershipCard key={val.id} title = {val.title} para = {val.para} />
    ))
   } 
</div>
</>
  )
}

export default Partnership