import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { SearchProvider } from '../context/SearchContext'
import { useSearch } from '../context/SearchContext'
import SearchResults from './SearchResults/SearchResults'

const Layout = () => {

  const { searchQuery } = useSearch(); 

  return (
    <>
        <Header/>
        {searchQuery ? <SearchResults/> : <Outlet/>}
        <Footer/>
    </>
  )
}

export default Layout