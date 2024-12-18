import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { SearchProvider } from '../context/SearchContext'

const Layout = () => {
  return (
    <>
        <SearchProvider>
          <Header/>
          <Outlet/>
          <Footer/>
        </SearchProvider>
    </>
  )
}

export default Layout