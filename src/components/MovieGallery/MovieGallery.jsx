import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query';
import MoviePoster from '../MoviePoster/MoviePoster';

const MovieGallery = () => {

    const {data, error, isLoading} = useQuery({
        queryKey: ['movies'],
        queryFn: async () => {
          const res = await fetch('https://yts.mx/api/v2/list_movies.json?limit=30')
          if (!res.ok) throw new Error('Could not fetch data')
          return res.json()
        }, 
      })
    
      if (isLoading) return <p>Loading data</p>
      if (error) return <p>Error: {error.message}</p> 
      

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 p-10 '>
        {data.data.movies.map((movie, index) => (
            <MoviePoster key={index} title={movie.title} imgSrc={movie.medium_cover_image}/>
        ))}
    </div>
  )
}

export default MovieGallery