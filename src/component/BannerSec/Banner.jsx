import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className="w-full relative  h-[86vh] flex items-center justify-center HomeBg" >
                    <div className='absolute top-auto -z-10' >
                    <Image src={'/assets/images/bannerIcon.png'} width={300} height={300} className="max-xl:w-[100%] xl:w-[40rem] " />
                    </div>
                    <div className='absolute top-auto -z-20' >
                    <Image src={'/assets/images/bgWhiteShade.png'} width={300} height={300} className="max-xl:w-[100%] xl:w-[80rem] " />
                    </div>
                    <div className='flex uppercase font-steelfish flex-col gap-3' >
                        <h1 className='text-blue font-bold text-9xl' >Empowering</h1>
                        <h1 className='text-blue font-bold text-9xl ' >Innovation</h1>
                        <h1 className='text-gray font-bold text-9xl ' >transforming</h1>
                        <h1 className='text-gray font-bold text-9xl' >lives</h1>
                    </div>
    </div>
  )
}

export default Banner