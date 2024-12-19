import React from 'react'
import { useQuery } from '@tanstack/react-query';
import MoviePoster from '../MoviePoster/MoviePoster';
import { Link } from 'react-router';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const MovieGallery = () => {

    

    const {data, error, isLoading} = useQuery({
        queryKey: ['movies'],
        queryFn: async () => {
          const res = await fetch('https://yts.mx/api/v2/list_movies.json?limit=30&page=500')
          if (!res.ok) throw new Error('Could not fetch data')
          return res.json()
        }, 
      })
    
      if (isLoading) return <LoadingScreen/>
      if (error) return <p>Error: {error.message}</p> 
      

  return (
    <div className='lg:p-20 p-5'>
      <h3 className='font-bold text-xl lg:text-2xl text-neutral-50 mb-10'>Recently Added</h3>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10'>
          {data.data.movies.map((movie, index) => (
              <Link to={'/movie/' + movie.id}>
                <MoviePoster key={index} title={movie.title} imgSrc={movie.medium_cover_image}/>
              </Link>
          ))}
      </div>
    </div>
  )
}

export default MovieGallery