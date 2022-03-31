import React from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const style=window.location.pathname;
    console.log(style);
    let navigate=useNavigate()
    return (
    <>
        <nav className="nav">
            <div className="right-navbar">
                <h1> <span>SG</span> Blogs  <i className='fas fa-circle ml-1' /> </h1>
            </div>
            <div className="left-navbar">
                <ul className="navbar-lists">
                    <li> <Link to="/home">Home</Link> </li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <button className='btn' onClick={(e)=>{
                        e.preventDefault();
                        navigate("/create");
                    }}>CREATE</button>
                </ul>
            </div>
        </nav>

    </>
  )
}

export default Navbar