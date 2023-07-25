import React from 'react'

const PqartnershipCard = ({para  , title}) => {
  return (
  
    <div className='xl:w-[350px] lg:w-[300px] max-lg:w-[426px] 2xl:w-[426px] py-[50px] rounded-[20px] gap-y-[30px] bg-white shadow flex items-center justify-start flex-col ' >
        {title}
        {para}
    </div>

    )
}

export default PqartnershipCard