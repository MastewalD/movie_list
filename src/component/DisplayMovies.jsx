import React from 'react'
import "../App.css"
function DisplayMovies(props) {
    const {data}=props
  return (
    <div className='displaymovies'>
      {data}
    </div>
  )
}

export default DisplayMovies
