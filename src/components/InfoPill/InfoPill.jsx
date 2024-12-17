import React from 'react'

const InfoPill = ({label}) => {
  return (
    <div className='bg-neutral-800 rounded-full px-3 flex justify-center items-center'>
        {label}
    </div>
  )
}

export default InfoPill