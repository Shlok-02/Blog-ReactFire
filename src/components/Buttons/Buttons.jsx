import React from 'react'
import "./buttons.css"

const Buttons = () => {
  return (
    <div className='centre'>
        <button onClick={()=>window.location.href='/login'}>Log In</button>
        <button onClick={()=>window.location.href='/sigin'}>Sign In</button>
    </div>
  )
}

export default Buttons