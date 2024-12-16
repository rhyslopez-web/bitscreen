import React from 'react'

const MoviePoster = ({imgSrc, title}) => {
  return (
    <div className='flex flex-col gap-5'>
        <img src={imgSrc} alt="" className='w-full rounded-lg hover:opacity-35 transition ease-in-out'/>
        <h4 className='text-md font-semibold'>{title}</h4>
    </div>
  )
}

export default MoviePoster