import React,{useState} from 'react'
import AddMovie from './AddMovie'
import DisplayMovies from './DisplayMovies'
import "../App.css"
function Movie() {
  const [data,setData]=useState([])
  return (
    <div className='movie'>
      <AddMovie  setData={setData}/>
      <DisplayMovies data={data}/>
    </div>
  )
}

export default Movie
