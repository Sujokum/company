import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className="w-full relative  h-[86vh] flex items-center justify-center HomeBg" >
                    <div className='absolute bottom-0 -z-10' >
                    <Image src={'/assets/images/bannerIcon.png'} width={300} height={300} className="xl:w-[100%] 2xl:w-[40rem] " />
                    </div>
                    <div className='absolute  bottom-0  -z-20' >
                    <Image src={'/assets/images/bgWhiteShade.png'} width={300} height={300} className="xl:w-[60rem] 2xl:w-[80rem] " />
                    </div>
                    <div className='flex uppercase  font-steelfish flex-col gap-3' >
                        <h1 className='text-blue font-bold max-md:text-6xl md:text-6xl xl:text-7xl 2xl:text-9xl' >Empowering</h1>
                        <h1 className='text-blue font-bold max-md:text-6xl md:text-6xl xl:text-7xl 2xl:text-9xl ' >Innovation</h1>
                        <h1 className='text-gray font-bold max-md:text-6xl md:text-6xl xl:text-7xl 2xl:text-9xl ' >transforming</h1>
                        <h1 className='text-gray font-bold max-md:text-6xl md:text-6xl xl:text-7xl 2xl:text-9xl' >lives</h1>
                    </div>
    </div>
  )
}

export default Banner