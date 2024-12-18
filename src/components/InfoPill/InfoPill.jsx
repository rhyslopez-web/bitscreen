import React from 'react'

const InfoPill = ({label}) => {
  return (
    <div className='bg-neutral-800 rounded-full px-10 py-1 flex justify-center items-center text-sm'>
        {label}
    </div>
  )
}

export default InfoPill