import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'

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
    <div>
        <h2>{data.data.movie.title}</h2>
    </div>
  )
}

export default MoviePage