import React from 'react'

const PqartnershipCard = ({para  , title}) => {
  return (
  
    <div className='w-[426px] py-[50px] rounded-[20px] gap-y-[30px] bg-white shadow flex items-center justify-start flex-col ' >
        {title}
        {para}
    </div>

    )
}

export default PqartnershipCard