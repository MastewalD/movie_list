import React from 'react'
import "../App.css"
function AddMovie() {
  return (
    <div className='addmovies'>
        <form action="onSubmit" className='form'>
            <label htmlFor="">Movie Name</label>
            <input type="text" />
            <label htmlFor="">Reating</label>
            <input type="text" />
            <label htmlFor="">Duration</label>
            <input type="text" />
            <button type='submit' className='button'>Add Movie</button>
        </form>
      
    </div>
  )
}

export default AddMovie
