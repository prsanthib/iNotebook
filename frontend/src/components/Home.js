import React from 'react'
import Notes from './Notes'
import AddNotes from './AddNotes'

const Home = () => {
  return (

    <div className='container my-3'>
        <h1 className='my-3' style={{textAlign:'center'}}>INoteBook - Note on cloud</h1>
        <AddNotes/>
        <Notes/>
    </div>
  )
}

export default Home
