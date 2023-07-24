import React from 'react'
import ourImg1 from '../../../public/images/ourImg1.png'
import ourImg2 from '../../../public/images/ouImg2.png'
import ourImg3 from '../../../public/images/ourImg3.png'
import ourImg4 from '../../../public/images/ourImg4.png'
import ourImg5 from '../../../public/images/ourImg5.png'
import ExportedImage from "next-image-export-optimizer";
// import Image from 'next/image'

import ourImg6 from '../../../public/images/ourImg6.png'
import ourImg7 from '../../../public/images/ourImg7.png'
const OurPic = () => {
  return (
    <div className='h-[1070px] flex gap-2    justify-between overflow-x-hidden  bg-blue w-full' >
        <div className='flex max-sm:hidden max-2xl:w-[25%]   2xl:w-[20%] h-full  flex-col gap-2 overflow-x-hidden' >
            <div className='w-[387px] h-[427px] overflow-hidden ' >
                <ExportedImage src={ourImg1} alt='ourTeam' className='w-full saturate-0 hover:saturate-100 h-full block object-center object-cover' />
            </div>
            <div className='w-[387px] h-[619px] overflow-hidden ' > 

                <ExportedImage src={ourImg2}  alt='ourTeam'  className='w-full h-full block object-center saturate-0 hover:saturate-100  object-cover' />
            </div>
        </div>


        <div className='flex max-2xl:w-[75%] max-sm:w-[100%]  2xl:w-[60%]   flex-col gap-2' >
            <div className='flex w-full max-2xl:justify-end  gap-2' >
                <div className='  max-2xl:w-[780px]  2xl:w-[50%] h-[248px]  overflow-hidden ' >
                <ExportedImage src={ourImg3} alt='ourTeam' className='w-full h-full block saturate-0 hover:saturate-100 object-center object-cover' />
                </div>
                <div className='max-2xl:w-[356px] 2xl:w-[50%] h-[248px]  overflow-hidden ' >
                <ExportedImage src={ourImg4} alt='ourTeam' className='w-full h-full saturate-0 hover:saturate-100 object-cover' />
                </div>
            </div>

            <div className='flex w-full max-2xl:justify-end gap-2' >
                <div className='w-[296px] h-[427px] overflow-hidden'  >
                <ExportedImage src={ourImg5} alt='ourTeam' className='w-full h-full object-center block saturate-0 hover:saturate-100 object-cover' />
                </div>
                <div className=' max-2xl:w-[825px] 2xl:w-[100%] h-[427px] overflow-hidden' >
                <ExportedImage src={ourImg6} alt='ourTeam' className='w-full block object-center h-full saturate-0 hover:saturate-100  object-cover' />
                </div>
            </div>
            <div className='flex gap-2  max-2xl:justify-end ' >
                <div className=' w-[100%] h-[364px]   overflow-hidden' >
                <ExportedImage src={ourImg7} alt='ourTeam' className='w-full block object-center h-full saturate-0 hover:saturate-100 object-cover' />
                </div>
               
            </div>

        </div>

        <div className=' hidden  2xl:flex w-[20%] h-full  flex-col gap-2' >
            <div className='w-full h-[427px]  ' >
                <ExportedImage src={ourImg1} alt='ourTeam' className='w-full h-full block object-center saturate-0 hover:saturate-100 object-cover' />
            </div>
            <div className='w-[387px] h-[619px]' > 

                <ExportedImage src={ourImg2}  alt='ourTeam'  className='w-full h-full block object-center saturate-0 hover:saturate-100 object-cover' />
            </div>
        </div>

    </div>
  )
}

export default OurPic