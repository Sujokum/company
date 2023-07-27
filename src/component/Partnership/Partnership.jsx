import React from 'react'
import PqartnershipCard from './PqartnershipCard'
const Partnership = () => {
    const data = [
        {
            id : 1,
            title : <h1 className='text-center font-nasalization max-md:w-[95%] text-gray text-[30px]'>Fixed Price <br /> Model</h1>,
            para : <p className='text-center font-poppins w-[80%] leading-[25px] text-[15px] text-gray'>This approach establishes the project's scope of work, cost, and deadline before beginning development.
            For prolonged durations of interaction, this strategy is very suited. The client may relax knowing that the project will stay inside the predetermined budget.
            Clients that have a distinct understanding of their needs are most suited for this methodology.</p>
        },
        {
            id : 2,
            title : <h1 className='text-center font-nasalization max-md:w-[95%] text-gray text-[30px]'>Hire Dedicated <br /> Model</h1>,
            para : <p className='text-center font-poppins w-[80%] leading-[25px] text-[15px] text-gray'>Clients pay the developer of the application according to the amount of hours they put into the project in this very traditional and straightforward method of engagement. Customers may readily begin the project because they are not required to arrive with precise requirements. Additionally, this approach enables client to add new features whenever they want and lets them know precisely what they're purchasing. This promotes far more dialogue and trust.</p>
        },
        {
            id : 3,
            title : <h1 className='text-center font-nasalization max-md:w-[95%] text-gray text-[30px]'>On Site Development<br /> Model</h1>,
            para : <p className='text-center font-poppins w-[80%] leading-[25px] text-[15px] text-gray'>When customers desire additional temporary resources for on-site development, this option is ideal. This sort of contract guarantees a cost-effective engagement and in-person contacts with engineers. Due to constant contact throughout the whole process, this approach aids in meeting the deadline on time. </p>
        },
    ]
  return (
<>
    <div className='w-full overflow-x-hidden flex justify-center bg-blue ' >
    <div className='flex flex-col items-center  w-full py-[22px] ' >
        <h1 className=' max-sm:text-[25px] max-xl:text-[60px] xl:text-[70px] 2xl:text-[90px] max-md:text-[50px] font-steelfish text-center font-bold text-gray ' > <span className='text-white' > Partnership  </span> WE FOLLOW</h1>
        <p className='text-center max-sm:text-[10px] font-poppins max-md:w-[80%] max-xl:text-[14px]  max-md:px-4 xl:text-[15px] 2xl:text-[16px] text-white w-[430px]' >
            
Our partnership approach is built on collaboration and mutual growth. We foster strong, long-lasting relationships, aligning our expertise with your vision to achieve shared success.
        </p>
    </div>
</div>
<div className='w-full  py-[100px] gap-[20px] flex justify-between lg:justify-center max-lg:justify-center flex-wrap max-md:px-[20px] xl:px-[50px] 2xl:px-[101px] lg:px-[101px] ' >
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