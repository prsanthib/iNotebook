import React from 'react'

const Noteitem = (props) => {
  return (

    <div className='col-md-3'>
    <div className="card">
  <div className="card-body">
    <div className="d-flex text-center">
    <h5 className="card-title">{props.title}</h5>
    <i className="fa-regular fa-pen-to-square mx-2"></i>
    <i className="fa-solid fa-trash mx-2"></i>
    </div>
    <p className="card-text">{props.description}</p>
  </div>
</div>
    </div>
  )
}

export default Noteitem
