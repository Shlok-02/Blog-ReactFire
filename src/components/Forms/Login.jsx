import React from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase-config";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {
  const login=require('../Images/Login.jpg');
  const logo=require('../Images/logo.webp');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    function handleChange(e){
      if(e.target.name=='email'){
        setEmail(e.target.value);
      }else if(e.target.name=='password'){
        setPassword(e.target.value);
      }
    }

    let navigate=useNavigate();
    function handleClick(e){
      e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      navigate("/home");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode,errorMessage);
    });
    }
    
  return (
   
    <>
	  <div className="logo">
        <img src={logo} alt="" />
    </div>
    <div className="login-wrap">
        <div className="login-image">
            <img src={login} alt="" />
        </div>
        <form className='login-form'>
            <h3>Log in</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" name='email' className="form-control" placeholder="Enter email" onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" name='password' className="form-control" placeholder="Enter password" onChange={handleChange}/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button style={{display:"block",marginBottom:"10px"}} type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleClick}>Log In</button>
			<Link to="/">Don't have a account?? Sign Up</Link>
        </form>
      </div>
    </>
  )
}

export default Login