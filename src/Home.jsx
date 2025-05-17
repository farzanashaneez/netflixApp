import React from 'react'
import Hero from './components/Hero'
import MovieRow from './components/movieRow'
import endpoints from './services/movieServices'
import About from './components/About'
import Footer from './components/Footer'

const Home = () => {
  return (
   <> 
   <Hero/>
   <MovieRow title='upcoming' url={endpoints.upcoming} />
   <MovieRow title='trending' url={endpoints.trending}/>
   <MovieRow title='top rated' url={endpoints.toprated}/>
   <MovieRow title='comedy' url={endpoints.comedy}/>
   <MovieRow title='popular' url={endpoints.popular}/>
    <About/>
    <Footer/>
   </>
  )
}

export default Home
