import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import MainPlayButton from '../../components/MainPlayButton/MainPlayButton'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'
import StarRating from '../../components/StarRating/StarRating'
import InfoPill from '../../components/InfoPill/InfoPill'
import DownloadButton from '../../components/DownloadButton/DownloadButton'
import MovieSuggestions from '../../components/MovieSuggestions/MovieSuggestions'


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
    <div className=' relative flex flex-col justify-center py-10 p-5 lg:px-20'>
      {/* Movie Banner */}
        <div className='inset-0 absolute -z-10 bg-gradient-to-b from-black to-black h-screen'>
            <img src={data.data.movie.background_image} alt="" className='opacity-50 object-cover w-full h-full' />
            <div className='w-full h-40 absolute bottom-0 bg-gradient-to-b from-transparent to-primary-blue'></div>
        </div>

      {/* Movie Details */}
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-5 mb-10'>

          {/*Movie Info  */}
          <div className='flex flex-col gap-5 flex-wrap lg:w-full'>
              <div className='flex flex-col gap-5 text-neutral-50'>
                  <h2 className='font-bold text-5xl lg:text-7xl'>{data.data.movie.title}</h2>
                  <p className=''>{data.data.movie.description_intro ? data.data.movie.description_intro : "Description not available"}</p>
              </div>
          
              <div className='flex gap-3'>
                  <MainPlayButton label='Watch Now'/>
                  {/* <SecondaryButton label='Download Options' /> */}
              </div>

              <div className='flex flex-col gap-5 lg:gap-5 items-start '>
                {/* Rating */}
                <StarRating rating={data.data.movie.rating}/>
                {/* Genre */}
                <div className='grid grid-cols-4 lg:grid-cols-5 gap-2'>
                  {data.data.movie.genres.map((genre,index) => (
                    <InfoPill key={index} label={genre} />
                  ))}
                </div>
              </div>
          </div>

          {/*Movie Poster */}
          <div className='flex justify-center lg:justify-end order-first lg:order-last'>
            <img src={data.data.movie.large_cover_image} alt="" className='shadow-2xl w-5/6 lg:w-1/2' />
          </div>
        
        </div>


        {/* Download Options */}
        <h3 className='font-bold text-xl lg:text-2xl text-neutral-50 mb-10'>Download Options</h3>
        <div className='flex gap-3 mb-20'>
          {data.data.movie.torrents.map((torrent, index) => (
            <DownloadButton key={index} quality={torrent.quality} type={torrent.type} link={torrent.url}/>
          ))}
        </div>

        {/* Suggested Movies */}
        <h3 className='font-bold text-xl lg:text-2xl text-neutral-50 mb-10'>Suggested Movies</h3>
        <MovieSuggestions id={params.id} />


    </div>
  )
}

export default MoviePage