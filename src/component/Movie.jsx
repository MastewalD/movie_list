import React from 'react'
import AddMovie from './AddMovie'
import DisplayMovies from './DisplayMovies'
import "../App.css"
function Movie() {
  return (
    <div className='movie'>
      <AddMovie/>
      <DisplayMovies/>
    </div>
  )
}

export default Movie
