import React from 'react'

const MoviePoster = ({imgSrc, title}) => {
  return (
    <div className='flex flex-col gap-5'>
        <img src={imgSrc} alt="" className='w-full rounded-lg'/>
        <h4 className='text-md font-semibold'>{title}</h4>
    </div>
  )
}

export default MoviePoster