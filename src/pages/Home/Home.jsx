import React from 'react'
import FeaturedMovie from '../../components/FeaturedMovie/FeaturedMovie'
import MovieGallery from '../../components/MovieGallery/MovieGallery'

const Home = () => {
  return (
    <div className='font-poppins h-screen text-neutral-50'>
        <FeaturedMovie/>
        <MovieGallery/>
    </div>
  )
}

export default Home