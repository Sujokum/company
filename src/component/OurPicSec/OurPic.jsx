import React from 'react'
import Image from 'next/image'
const OurPic = () => {
  return (
    <div className='h-[1070px] flex gap-2  justify-between overflow-x-hidden  bg-blue w-full' >
        <div className='flex max-sm:hidden max-2xl:w-[25%]   2xl:w-[20%] h-full  flex-col gap-2 overflow-x-hidden' >
            <div className='w-[387px] h-[427px] overflow-hidden ' >
                <Image src={'/assets/images/ourImg1.png'} alt='ourTeam' width={500} height={500} className='w-full h-full block object-center object-cover' />
            </div>
            <div className='w-[387px] h-[619px] overflow-hidden ' > 

                <Image src={'/assets/images/ouImg2.png'} width={500} alt='ourTeam' height={500} className='w-full h-full block object-center  object-cover' />
            </div>
        </div>


        <div className='flex max-2xl:w-[75%] max-sm:w-[100%]  2xl:w-[60%]   flex-col gap-2' >
            <div className='flex w-full max-2xl:justify-end  gap-2' >
                <div className='  max-2xl:w-[780px]  2xl:w-[50%] h-[248px]  overflow-hidden ' >
                <Image src={'/assets/images/ourImg3.png'} width={500} height={500} alt='ourTeam' className='w-full h-full block object-center object-cover' />
                </div>
                <div className='max-2xl:w-[356px] 2xl:w-[50%] h-[248px]  overflow-hidden ' >
                <Image src={'/assets/images/ourImg4.png'} width={500} height={500} alt='ourTeam' className='w-full h-full object-cover' />
                </div>
            </div>

            <div className='flex w-full max-2xl:justify-end gap-2' >
                <div className='w-[296px] h-[427px] overflow-hidden'  >
                <Image src={'/assets/images/ourImg5.png'} width={500} height={500} alt='ourTeam' className='w-full h-full object-center block object-cover' />
                </div>
                <div className=' max-2xl:w-[825px] 2xl:w-[100%] h-[427px] overflow-hidden' >
                <Image src={'/assets/images/ourImg6.png'} width={500} height={500} alt='ourTeam' className='w-full block object-center h-full  object-cover' />
                </div>
            </div>
            <div className='flex gap-2  max-2xl:justify-end ' >
                <div className=' w-[100%] h-[364px]   overflow-hidden' >
                <Image src={'/assets/images/ourImg7.png'} width={500} height={500} alt='ourTeam' className='w-full block object-center h-full object-cover' />
                </div>
               
            </div>

        </div>

        <div className=' hidden  2xl:flex w-[20%] h-full  flex-col gap-2' >
            <div className='w-full h-[427px]  ' >
                <Image src={'/assets/images/ourImg1.png'} alt='ourTeam' width={500} height={500} className='w-full h-full block object-center object-cover' />
            </div>
            <div className='w-[387px] h-[619px]' > 

                <Image src={'/assets/images/ouImg2.png'} width={500} alt='ourTeam' height={500} className='w-full h-full block object-center object-cover' />
            </div>
        </div>

    </div>
  )
}

export default OurPic