import React from 'react'
import MainPlayButton from '../MainPlayButton/MainPlayButton'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import { useQuery } from '@tanstack/react-query'
import MoviePoster from '../MoviePoster/MoviePoster'
import { Link } from 'react-router'
import LoadingScreen from '../LoadingScreen/LoadingScreen'

const FeaturedMovie = () => {

  const {data, error, isLoading} = useQuery({
    queryKey: ['featuredMovie'],
    queryFn: async () => {
      const res = await fetch('https://yts.mx/api/v2/movie_details.json?movie_id=1632')
      if (!res.ok) throw new Error('Could not fetch data')
      return res.json()
    }, 
  })

  if (isLoading) return <LoadingScreen/>
  if (error) return <p>Error: {error.message}</p> 

  return (
    <div className='flex flex-col justify-center lg:px-20 px-5 relative overflow-hidden py-10'>
        <div className='inset-0 absolute -z-10 bg-gradient-to-b from-black to-black'>
          <img src={data.data.movie.background_image} alt="" className='opacity-20 object-cover w-full h-full' />
          <div className='w-full h-40 absolute bottom-0 bg-gradient-to-b from-transparent to-primary-blue'></div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10'>
          <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-5'>
                  <h2 className='font-bold text-5xl lg:text-7xl'>{data.data.movie.title}</h2>
                  <p className='md:text-md lg:text-sm'>{data.data.movie.description_intro}
                  </p>
              </div>
          
              <div className='flex gap-3'>
                  <MainPlayButton label='Watch Now'/>
                  <Link to={'/movie/' + data.data.movie.id}>
                    <SecondaryButton label='Details' />
                  </Link>
              </div>
          </div>

          <div className='flex justify-center lg:justify-end order-first lg:order-last'>
            <img src={data.data.movie.large_cover_image} alt="" className='shadow-2xl w-1/2 lg:w-1/2' />
          </div>
        </div>
    </div>
  )
}

export default FeaturedMovie