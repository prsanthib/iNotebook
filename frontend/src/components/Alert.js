import React from 'react'

export default function Alert(props) {
    
  const capitalize = (word) =>
    {
        let p = word;
        return p.charAt(0).toUpperCase()+p.slice(1);
    }

  return (
    <div>
   <div className="alert alert-success" role="alert">
         <strong>{capitalize(props.alert)}</strong>! 
    </div>

    </div>
  )
}