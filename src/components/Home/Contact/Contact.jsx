import React, { useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import "./contact.css"
import { collection, addDoc } from "firebase/firestore";
import {db} from "../../../firebase-config";

const Contact = () => {

  const[email,setEmail]=useState('');
  const [Name,setName]=useState('');
  const [query,setQuery]=useState('');
  

  const handleChange=()=>{
    
  }

  const conatct = collection(db, 'contact');

  const handleClick=(e)=>{
    e.preventDefault();

    var  time = new Date();
    alert("Successfull Submit");
    addDoc(conatct,
      {
        Email:email,
        Name:Name,
        Query:query,
        EnteredAt:time
      });
    setEmail('');
    setName('');
    setQuery('');
	window.location.href="/home";
  }

  const contact=require('../../Images/Contact.jpg')

  return (
    <>
      <Navbar/>
        <div className="contact-wrap">
            <div className="contact-image">
                <img src={contact} alt="" />
            </div>
            <form className='contact-form'>
                <h3>Contact Us</h3>
				
                <div className="form-group">
                        <label>Enter Your Name</label>
                        <input type="text" value={Name} name='Name' className="form-control" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}} />
                </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name='email' value={email} className="form-control" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>

                    <div className="form-group">
                        <label>Query/Message</label>
                        <textarea type="text" name='query' value={query} className="form-control" col={20} rows={10} placeholder="Enter Message" onChange={(e)=>{setQuery(e.target.value)}}/>
                    </div>

                    <button style={{display:"block",marginBottom:"10px"}} type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleClick}>Submit</button>
                </form>
            </div>
    </>
  )
}

export default Contact