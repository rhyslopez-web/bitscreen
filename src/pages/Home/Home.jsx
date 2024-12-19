import React, { useEffect, useState } from 'react'
import FeaturedMovie from '../../components/FeaturedMovie/FeaturedMovie'
import MovieGallery from '../../components/MovieGallery/MovieGallery'
import SearchResults from '../../components/SearchResults/SearchResults'
import { useSearch } from '../../context/SearchContext'

const Home = () => {

  const { searchQuery } = useSearch(); 

  return (
    <div className='font-poppins  text-neutral-50'>
        {
          searchQuery 
          ?
          <SearchResults/>
          :
          <>
            <FeaturedMovie/>
            <MovieGallery/>
          </>
        }
    </div>
  )
}

export default Home