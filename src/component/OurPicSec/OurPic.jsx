import React from 'react'
import Image from 'next/image'
const OurPic = () => {
  return (
    <div className='h-screen flex gap-2 bg-blue w-full' >
        <div className='flex w-[30%] h-full flex-col gap-2' >
            <div className='w-full h-[50%]' >
                <Image src={'/assets/images/ourImg1.png'} alt='ourTeam' width={500} height={500} className='w-full h-full object-cover' />
            </div>
            <div className='w-full h-[50%]' > 

                <Image src={'/assets/images/ouImg2.png'} width={500} alt='ourTeam' height={500} className='w-full h-full  object-cover' />
            </div>
        </div>
        <div className='flex w-[70%] flex-col gap-2' >
            <div className='flex w-full  gap-2' >
                <div className='w-[60%] h-[300px] overflow-hidden ' >
                <Image src={'/assets/images/ourImg3.png'} width={500} height={500} alt='ourTeam' className='w-full h-full object-cover' />
                </div>
                <div className='w-[40%] h-[300px] overflow-hidden ' >
                <Image src={'/assets/images/ourImg4.png'} width={500} height={500} alt='ourTeam' className='w-full h-full object-cover' />
                </div>
            </div>
            <div className='flex gap-2' >
                <div className='w-[25%] h-[400px] overflow-hidden'  >
                <Image src={'/assets/images/ourImg5.png'} width={500} height={500} alt='ourTeam' className='w-full  object-cover' />
                </div>
                <div className='w-[75%] h-[400px] overflow-hidden' >
                <Image src={'/assets/images/ourImg6.png'} width={500} height={500} alt='ourTeam' className='w-full  object-cover' />
                </div>
            </div>
            <div className='flex gap-2 ' >
                <div className='w-full h-[350px]  overflow-hidden' >
                <Image src={'/assets/images/ourImg7.png'} width={500} height={500} alt='ourTeam' className='w-full object-cover' />
                </div>
               
            </div>

        </div>

    </div>
  )
}

export default OurPic