import React, { useState } from 'react'
import "./create.css"
import Navbar from '../Navbar/Navbar';
import { collection, addDoc } from "firebase/firestore";
import {db} from "../../firebase-config";


export const Create = () => {

    const[Title,setTitle]=useState('');
    const [Author,setAuthor]=useState('');
    const [desc,setDesc]=useState('');
    const[img,setImage]=useState('')

    const logo=require('../Images/logo.webp');

    const BlogsCollections = collection(db, 'blogs');


    function handleClick(e){
        e.preventDefault();
        var  time = new Date();
        alert("Successfull Submit");
        addDoc(BlogsCollections,{Title:Title,Author:Author,Description:desc,ImageURL:img,CreatedAt:time});
        setAuthor('');
        setDesc('');
        setImage('');
        setTitle('');
        window.location.href="/home"
    }

  return (
    <>  
       <Navbar/>
        <div className="create-form">
            <form className=''>
                    <h3>Create Your Own Blog</h3>

                    <div className="form-group">
                            <label>Author's Name</label>
                            <input type="text" value={Author} name='Name' onChange={(e)=>{setAuthor(e.target.value)}} className="form-control" placeholder="Name" />
                    </div>

                    <div className="form-group">
                            <label>Title for the Blog</label>
                            <input type="text" name='Title'value={Title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" placeholder="Title"  />
                    </div>

                    <div className="form-group">
                            <label>Description</label>
                            <textarea  rows={10} cols={20} type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} name='Description' className="form-control" placeholder="Enter Conetent here...." />
                    </div>

                    <div className="form-group">
                            <label>Paste the Link for the Image Here</label>
                            <input type="" name='Image' className="form-control" value={img} onChange={(e)=>{setImage(e.target.value)}} placeholder="Image URL" />
                    </div>

                   <button style={{display:"block",marginBottom:"10px"}} type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleClick} >Submit</button>
             </form>
        </div>
    </>
  )
}
