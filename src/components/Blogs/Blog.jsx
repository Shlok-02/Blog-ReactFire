import React from 'react'
import { collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";
import { useState,useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { async } from '@firebase/util';
import "./Blog.css"
import { useNavigate } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
const Blog = () => {
        const [info,setInfo]=useState([]);

        const Fetchdata =async ()=>{


          const querySnapshot = await getDocs(collection(db, "blogs"));
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id);
            let temp=doc.data();
			temp['ID']=doc.id;
            setInfo(prev=>[...prev,temp])
            console.log(info)
          });


      }
    
    
	
    useEffect(()=>{
      Fetchdata();
    },[])



   

  return (
    <>
		<Navbar/>
		<div className="blogs">
			{
				info.map(function(item){

					return <Datas id={item.ID} Author={item.Author} desc={item.Description} img={item.ImageURL} title={item.Title} created={item.CreatedAt} />
						
				})
			}
		</div>
		<Footer/>
    </>
  )
}


const Datas=(props)=>{
	let navigate=useNavigate();
	function handleClick(e){
		e.preventDefault();
		let id=props.id;
		/* window.localStorage.setItem('Blog Id',id) */
	
		navigate(`blog?id=${id}`);
		
		console.log(props.id)
	}
	return(
		<>
			<div className="">
				<div className="blog">
					<div className="right-blog">
						<img src={props.img} alt="" />
					</div>
					<div className="left-blog">
						<h2> <span>Title </span>{props.title}</h2>
						<h3> <span>Author </span>{props.Author}</h3>
						<p>  {props.desc.substring(0, 250)}...</p>
						<a href=''  onClick={handleClick}>Read More</a>
					</div> 	
				</div>
			</div>
		</>
	)
}
  

export default Blog