import React from 'react'
import "../App.css"
function AddMovie(props) {
    const {setData}=props
  return (
    <div className='addmovies'>
        <form action="onSubmit" className='form'>
            <label htmlFor="" >Movie Name</label>
            <input type="text" onChange={(e)=>{setData(e.target.value)}} />
            <label htmlFor="">Reating</label>
            <input type="text"  onChange={(e)=>{setData(e.target.value)}}/>
            <label htmlFor="">Duration</label>
            <input type="text" onChange={(e)=>{setData(e.target.value)}}/>
            <button  className='button'>Add Movie</button>
        </form>
      
    </div>
  )
}

export default AddMovie
