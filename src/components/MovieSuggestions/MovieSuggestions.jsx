import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'
import MoviePoster from '../MoviePoster/MoviePoster';


const MovieSuggestions = ({id}) => {

    const {data, error, isLoading} = useQuery({
        queryKey: ['suggestedMovies', id],
        queryFn: async () => {
          const res = await fetch('https://yts.mx/api/v2/movie_suggestions.json?movie_id=' + `${id}`)
          if (!res.ok) throw new Error('Could not fetch data')
          return res.json()
        }, 
        enabled: !!id
      })
    
      if (isLoading) return <p>Loading data</p>
      if (error) return <p>Error: {error.message}</p> 

      console.log('these are your suggestions' + data.data)

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10'>
        {data.data.movies.map((movie, index) => (
            <Link to={'/movie/' + movie.id}>
                <MoviePoster key={index} title={movie.title} imgSrc={movie.medium_cover_image}/>
            </Link>
        ))}
    </div>
  )
}

export default MovieSuggestions