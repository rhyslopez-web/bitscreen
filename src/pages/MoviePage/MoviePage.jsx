import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import MainPlayButton from '../../components/MainPlayButton/MainPlayButton'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'
import StarRating from '../../components/StarRating/StarRating'
import InfoPill from '../../components/InfoPill/InfoPill'


const MoviePage = () => {

    const params = useParams()

    
  const {data, error, isLoading} = useQuery({
    queryKey: ['featuredMovie', params.id],
    queryFn: async () => {
      const res = await fetch('https://yts.mx/api/v2/movie_details.json?movie_id=' + `${params.id}`)
      if (!res.ok) throw new Error('Could not fetch data')
      return res.json()
    }, 
    enabled: !!params.id
  })

  if (isLoading) return <p>Loading data</p>
  if (error) return <p>Error: {error.message}</p> 

  return (
    <div className='h-screen relative flex flex-col justify-center px-5 lg:px-20'>
      {/* Movie Banner */}
        <div className='inset-0 absolute -z-10 bg-gradient-to-b from-black to-black'>
            <img src={data.data.movie.background_image} alt="" className='opacity-50 object-cover w-full h-full' />
            <div className='w-full h-40 absolute bottom-0 bg-gradient-to-b from-transparent to-primary-blue'></div>
        </div>

      {/* Movie Details */}
        <div className='lg:w-1/2 flex flex-col gap-10'>
            <div className='flex flex-col gap-5 text-neutral-50'>
                <h2 className='font-bold text-5xl lg:text-7xl'>{data.data.movie.title}</h2>
                <p>{data.data.movie.description_full ? data.data.movie.description_full : "Description not available"}</p>
            </div>
        
            <div className='flex gap-3'>
                <MainPlayButton label='Watch Now'/>
                <SecondaryButton label='Details' />
            </div>

            <div className='flex gap-3 items-center'>
              <StarRating rating={data.data.movie.rating}/>
              •
              <InfoPill label={data.data.movie.year} />
              •
              {data.data.movie.genres.map((genre,index) => (
                <InfoPill label={genre} />
              ))}
            </div>
        </div>
    </div>
  )
}

export default MoviePage