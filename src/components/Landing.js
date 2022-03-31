import React from 'react'
import Navbar from "./Navbar/Navbar"
import "./Landing.css"
import Buttons from "./Buttons/Buttons.jsx"
import SignIn from "./Forms/SignIn";

const Landing = () => {
  const img=require('./Images/Landing.jpg');
  const logo=require('./Images/logo.webp')
  return (
    <>  
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="wrap">

        <div className="landing-image">
          <img src={img} alt="" />
        </div>
        <div className='landing-form'>
          <SignIn/>
        </div>

      </div>
       {/*  <Navbar/>
       
        <div className="content">
            <h1>Welcome to, Superfast Blog App with all Latest information present at your finger tips</h1>
        </div>
        <Buttons/> */}
        
        
    </>
  )
}

export default Landing