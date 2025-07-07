import React from "react";
import './About.css'; 
import profile_img from '../../assets/photos.jpg'; 
import logo from '../../assets/logo.jpg';

const About = () => {
    return (
        <div id="about" className="about">
           <div className="about-title">
              <h1>About me </h1>
              <img src={logo} alt="" height={"150px"} width={"250px"}/>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" style={{width: 350,height:600, borderRadius: "10px"}}/>

                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p >I specialize in building fast, responsive, and user-friendly websites.My core strength lies in creating visually appealing UIs .</p>
                        <p> I enjoy exploring new technologies and working on personal projects.Each project has taught me the value of user feedback and iteration. </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}></hr></div>
                        <div className="about-skill"><p>JAVA & JAVASCRIPT</p><hr style={{width:"70%"}}></hr></div>
                        <div className="about-skill"><p>React , Node.js & Express.js</p><hr style={{width:"50%"}}></hr></div>
                        <div className="about-skill"><p> Bootstrap, Tailwind CSS</p><hr style={{width:"60%"}}></hr></div>
                        <div className="about-skill"><p>OOPs & DOM</p><hr style={{width:"55%"}}></hr></div>
                        <div className="about-skill"><p>Git , Github</p><hr style={{width:"65%"}}></hr></div>
                    </div>
                </div>
            </div>
           
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>6+</h1>
                    <p>PROJECT COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                    <h1>95+</h1>
                    <p> Improving Mobile Usability Scores to 95+.</p>
            </div>
             <hr/>
            <div className="about-achievement">
                    <h1>70%</h1>
                    <p> Reducing Code Duplication.</p>
            </div>
        </div>
        </div>
    );
};

export default About;