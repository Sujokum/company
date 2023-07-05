import React from 'react'

const Accomplishments = () => {
  return (
    <div className='w-full flex flex-col items-center h-[484px] bg-gradient-to-b from-[#00B9AD] to-[#008980]' >
            <div className='my-5 flex h-fit gap-2 ' >
                <h1 className='max-md:text-5xl md:text-6xl text-white font-steelfish font-bold' >Accomplishments</h1>
                <h1 className='max-md:text-2xl md:text-4xl  text-white mt-auto font-steelfish font-bold' >in last 6 years</h1>
            </div>
            <div className='text-white text-center font-poppins text-xl h-full flex flex-col justify-center items-center gap-5 ' >
            <p>Earned around <span className =  'text-4xl' >200k+</span> only from upwork with a success score of 100% </p>
            <p>Working with the same clients since the beginning of our career on Upwork. </p>
            <p>Delivered <span className =  'text-4xl' >45+</span> Projects </p>
            <p>Worked with <span className =  'text-4xl' >50+</span> people from around the world </p>
            <p>Created a warm and welcoming office space </p>
            </div>
    </div>
  )
}

export default Accomplishments