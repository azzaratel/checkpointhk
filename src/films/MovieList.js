import React from 'react'
import MoviieCard from './MoviieCard'
import Admovie from './Admovie'

function MovieList({movies , setmovies, text, rate}) {
  return (
    <div> 
 <div className='add'>
  <Admovie movies={movies} setmovies={setmovies} />
 </div>
    <div className='container' >
      {movies
      .filter((el)=>el.name.toLowerCase().includes(text.toLowerCase()) && el.rating>=rate)
      .map ((el)=><MoviieCard el= {el}/> )
      .reverse() 
       }
    </div>
    </div>
  )
}

export default MovieList