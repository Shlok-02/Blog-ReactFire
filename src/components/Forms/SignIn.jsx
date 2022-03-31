import React from 'react'
import "./style.css"
import {auth,db} from "../../firebase-config";
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';

const SignIn = () => {
    const signin=require('../Images/Signin.jpg');
    const logo=require('../Images/logo.webp');
    const usersCollectionRef = collection(db, 'users');


    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    function handleChange(e){
        if(e.target.name=='fname'){
            setFname(e.target.value);
        }else if(e.target.name=='lname'){
            setLname(e.target.value);
        }else if(e.target.name=='email'){
            setEmail(e.target.value);
        }else if(e.target.name=='password'){
            setPassword(e.target.value);
        }
    }

    function createUser(){
        addDoc(usersCollectionRef,{FirstName:fname,LastName:lname,Email:email,Password:password})
    }

    let navigate=useNavigate();
    function handleClick(e){
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            createUser();
           navigate("/home");
            
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode,errorMessage);
            // ..
        });

        
    }

  return (
    <>  
        

        <div className="signin-wrap">
            
            <form className='signin-form'>
                <h3>Register</h3>
                <div className="form-group">
                        <label>First name</label>
                        <input type="text" name='fname' className="form-control" placeholder="First name" onChange={handleChange} />
                </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" name='lname' className="form-control" placeholder="Last name" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name='email' className="form-control" placeholder="Enter email" onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name='password' className="form-control" placeholder="Enter password" onChange={handleChange}/>
                    </div>

                    <button style={{display:"block",marginBottom:"10px"}} type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleClick}>Register</button>
                    
                    <Link to="/login">Already a user?? Login</Link>
                    
                </form>
            </div>

    </>
  )
}

export default SignIn