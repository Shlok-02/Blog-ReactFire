import React from 'react'
import "./About.css"
import Navbar from '../../Navbar/Navbar'
import Footer from '../Footer/Footer';
const About = () => {
    const goal=require("../../Images/Goal.jpg");
    const achieve=require("../../Images/Success.jpg");
    const plan=require("../../Images/2953998.jpg");

    return (
        <>
            <Navbar/>
            <div className="about-landing">
                <div className="goal">
                    <div className="goal-content">
                        <h2> <span>Our </span>Goal</h2>
                        <p>There's this notion that to grow a business,
                             you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. 
                             We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an 
                             ecosystem uniting software, education, and community to help businesses grow better every day.</p>
                    </div>
                    <div className="goal-img">
                        <img src={goal} alt="" />
                    </div>
                </div>
            </div>
            <div className="about-landing">
                <div className="goal ">
                    <div className="goal-img achieve">
                        <img src={achieve} alt="" />
                    </div>
                    <div className="goal-content">
                        <h2> <span>Our </span>Achievements</h2>
                        <p>We are CATCHING UP WITH THE WHO’S WHO OF THE WORLD OF ADVERTISING AND BRAND COMMUNICATION. Find out the titles that have been CONFERRED TO US by different agencies.</p>
                    </div>
                    
                </div>
            </div>
            <div className="about-landing">
                <div className="goal">
                    <div className="goal-content">
                        <h2> <span>Our </span>Furture Plan</h2>
                        <p>There's this notion that to grow a business,
                             you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. 
                             We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an 
                             ecosystem uniting software, education, and community to help businesses grow better every day.</p>
                    </div>
                    <div className="goal-img">
                        <img src={plan} alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About