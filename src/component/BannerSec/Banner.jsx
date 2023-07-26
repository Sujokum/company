import React from 'react'
import ExportedImage from "next-image-export-optimizer";
// import Image from 'next/image';
import img1 from '../../../public/images/bannerIcon.png';
import img2 from '../../../public/images/bgWhiteShade.png';
const Banner = () => {
  return (
    <div className="HomeBg w-full relative  h-[86vh] flex items-center justify-center " >
                    
                    <div className='absolute bottom-0 -z-10' >
                    <ExportedImage  src={img1}  className=" max-md:h-[700px] w-[35rem]  xs:w-[37rem]  sm:w-[40rem]  md:w-[40rem]   lg:w-[30rem]  max-xl:w-[30rem] xl:w-[30rem] max-2xl:w-[40rem] 2xl:w-[47rem] " />
                    </div>
                    <div className='absolute  bottom-0  -z-20' >
                    <ExportedImage src={img2}  className="  xl:w-[60rem] 2xl:w-[90rem] " />
                    </div>
                    <div className='flex uppercase  font-steelfish flex-col gap-3' >
                        <h1 className='text-blue font-bold max-md:text-6xl md:text-6xl xl:text-6xl max-2xl:text-8xl 2xl:text-9xl' >Empowering</h1>
                        <h1 className='text-blue font-bold max-md:text-6xl md:text-6xl xl:text-6xl max-2xl:text-8xl 2xl:text-9xl ' >Innovation</h1>
                        <h1 className='text-gray font-bold max-md:text-6xl md:text-6xl xl:text-6xl max-2xl:text-8xl 2xl:text-9xl ' >transforming</h1>
                        <h1 className='text-gray font-bold max-md:text-6xl md:text-6xl xl:text-6xl max-2xl:text-8xl 2xl:text-9xl' >lives</h1>
                    </div>
    </div>
  )
}

export default Banner