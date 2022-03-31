import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../firebase-config";
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./individual.css"
import Footer from '../Home/Footer/Footer';
const Individual = () => {
    const [info,setInfo]=useState([]);
    const[Id,setId]=useState('');
    
  const Fetchdata =async ()=>{



    const querySnapshot = await getDocs(collection(db, "blogs"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id)
      if(doc.id==Id){
        console.log("MAtch")
        let temp=doc.data();
        setInfo(temp)
      }
    }) 


}



  useEffect(()=>{

    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    console.log(id)
    setId(id)
    Fetchdata();

  },[Id])
  console.log(info)

  return (
    <>
      <Navbar/>
      <div className="main-blog">
		
		<div className="main-top-content">
			<div className="main-title">
				<h1>{info.Title}</h1>
			</div>

			<div className="main-auhtor">
				<h3> BY- {info.Author}</h3>
			</div>
		</div>
	  		

			<div className="main-img">
				<img src={info.ImageURL} alt="" />
			</div>

			<div className="main-content">
				<div className="main-content">
					<p>{info.Description}</p>
				</div>
			</div>
      </div>
	<Footer/>
    </>
  )
}

export default Individual