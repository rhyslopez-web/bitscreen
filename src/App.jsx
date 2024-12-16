import './App.css'
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie'
import Header from './components/Header/Header'
import MovieGallery from './components/MovieGallery/MovieGallery'

function App() {

  return (
    <>
      <Header/>

      <div className='font-poppins h-screen text-neutral-50'>
        <FeaturedMovie/>
        <MovieGallery/>
      </div>
    </>
  )
}

export default App
