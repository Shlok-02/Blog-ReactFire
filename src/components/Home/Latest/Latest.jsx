import React from 'react'
import "./latest.css"
import {useEffect,useState} from "react";
import { collection, getDocs} from "firebase/firestore";
import { query, orderBy, limit } from "firebase/firestore";  
import {db} from "../../../firebase-config";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Latest = () => {
    const[info,setInfo]=useState([]);

    const Fetchdata =async()=>{
        const querySnapshot = await getDocs(collection(db, "blogs"));

        let index=3;
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                let temp=doc.data();
                temp['ID']=doc.id
                setInfo(prev=>[...prev,temp])
                console.log(info)
                if(index<=0){
                    return false;
                }
                index--;
            });
             
       /*   */


    }

    useEffect(()=>{
        Fetchdata();
    },[])

  return (
    <>
        <div className="latest">
            <div className="latest-heading">
                <p><span>Our Latest </span>Blogs</p>
            </div>
               
                <div className="latest-underline"></div>

            <div className="latest-blogs">
                {
                    info.map(function(item){

                        return <Datas id={item.ID} Author={item.Author} desc={item.Description} img={item.ImageURL} title={item.Title} created={item.CreatedAt} />
                            
                    })
                }
                
		    </div>
            <div className="read-all">
		        <Link to="/blog" > <button>Read All Blogs</button></Link>
	        </div>
        </div>

    </>
  )
}

const Datas=(props)=>{
    let navigate=useNavigate();
    const handleClick=(e)=>{
        e.preventDefault();
        console.log("Clicked")
        let id=props.id;
        console.log(id);
        navigate(`/blog/blog?id=${id}`);
    }
	return(
		<>
			<div className="">
				<div className="blog">
					<div className="right-blog">
						<img src={props.img} alt="" />
					</div>
					<div className="left-blog">
						<h2>  <span>Title </span>{props.title}</h2>
						<h3> <span>Author </span>{props.Author}</h3>
						<p>  {props.desc.substring(0, 250)}...</p>
						<Link to="" onClick={handleClick}>Read More</Link>
					</div>
				</div>
			</div>
		</>
	)
}



export default Latest