import React from 'react';
import './Hero.css'; 
import Profile_img from '../../assets/sst.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Sumit_resume from '../../assets/Sumit_Sharma.pdf';

const Hero = () => {
  return (
    <div  id='home' className='hero'>
      <img src={Profile_img} alt=""  width="200" height="200"  />
      <h1><span>I'm Sumit Sharma ,</span> Welcome to My Portfolio</h1>
      <p>
       A passionate web developer dedicated to crafting engaging and user-friendly online experiences
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}></p>Connect with me</AnchorLink></div>
       <div className="hero-resume">
          <a href={Sumit_resume} target="_blank" rel="noopener noreferrer">
            My Resume
         </a>
</div>
      </div>
    </div>
  );
}

export default Hero;