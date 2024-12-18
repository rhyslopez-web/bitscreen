import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter,createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Route } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import MoviePage from './pages/MoviePage/MoviePage.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>} />
    <Route path='/movie/:id' element={<MoviePage/>} />
  </Route>
))
const client = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </StrictMode>,
)
