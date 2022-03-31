import React from 'react'
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Service from './Services/Service';
import Footer from './Footer/Footer';
import Latest from './Latest/Latest';

const Home = () => {
	
  return (
    <>
       <Navbar/>
       <div className="home-cover">
		   <div className="color">
				<h1>WELCOME</h1>
				<div className="content">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur obcaecati molestiae libero velit consectetur, dolorem necessitatibus iste maiores quo quae.
				</div>
			</div>
       </div>
	   {/* <Service/> */}
	   {/* <Facts/> */}
	   <Latest/>
	   
	   <Footer/>
    </>
  )
}

export default Home