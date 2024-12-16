import React from 'react'
import MainPlayButton from '../MainPlayButton/MainPlayButton'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import { useQuery } from '@tanstack/react-query'

const FeaturedMovie = () => {

  const {data, error, isLoading} = useQuery({
    queryKey: ['featuredMovie'],
    queryFn: async () => {
      const res = await fetch('https://yts.mx/api/v2/movie_details.json?movie_id=1632')
      if (!res.ok) throw new Error('Could not fetch data')
      return res.json()
    }, 
  })

  if (isLoading) return <p>Loading data</p>
  if (error) return <p>Error: {error.message}</p> 

  return (
    <div className='h-4/5 flex flex-col justify-center px-10 relative overflow-hidden'>
        <div className='inset-0 absolute -z-10 bg-gradient-to-b from-black to-black'>
          <img src={data.data.movie.background_image} alt="" className='opacity-20 object-cover w-full h-full' />
          <div className='w-full h-40 absolute bottom-0 bg-gradient-to-b from-transparent to-primary-blue'></div>
        </div>

        <div className='lg:w-1/2 flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
                <h2 className='font-bold text-6xl lg:text-7xl'>{data.data.movie.title}</h2>
                <p className='lg:text-sm'>{data.data.movie.description_intro}
                </p>
            </div>
        
            <div className='flex gap-3'>
                <MainPlayButton label='Watch Now'/>
                <SecondaryButton label='Details' />
            </div>
        </div>
    </div>
  )
}

export default FeaturedMovie