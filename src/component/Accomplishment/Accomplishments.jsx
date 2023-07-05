import React from 'react'

const Accomplishments = () => {
  return (
    <div className='w-full flex flex-col items-center max-md:px-[20px]  2xl:px-[63px] min-h-[484px] max-md:pb-10 bg-gradient-to-b from-[#00B9AD] to-[#026861]' >
            <div className='my-5 flex h-fit gap-2 ' >
                <h1 className='max-md:text-5xl md:text-6xl text-white font-steelfish font-bold' >Accomplishments</h1>
                <h1 className='max-md:text-2xl md:text-4xl  text-white mt-auto font-steelfish font-bold' >in last 6 years</h1>
            </div>
            <div className='text-white max-xl:px-[40px] text-center font-poppins text-xl h-full flex flex-col justify-center items-center gap-5 ' >
            <p>Earned around <span className =  'font-zuka max-md:text-5xl text-6xl' >200k plus</span> only from upwork with a success score of 100% </p>
            <p>Working with the same clients since the beginning of our career on Upwork. </p>
            <p>Delivered <span className =  'font-zuka max-md:text-5xl text-6xl' >45 plus</span> Projects </p>
            <p>Worked with <span className =  'font-zuka max-md:text-5xl text-6xl' >50 plus</span> people from around the world </p>
            <p>Created a warm and welcoming office space </p>
            </div>
    </div>
  )
}

export default Accomplishments