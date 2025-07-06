import React from "react";
import "./Footer.css";
import logo from "../../assets/inputs.JPG"; 
import user from "../../assets/user.png"; // Assuming you have a user icon for the email input

const Footer = () => {
  return (
   <div className="footer">
    <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo} alt=" "  height={"100px"} width={"100px"}/>
             <p> I enjoy exploring new technologies and working on personal projects.Each project has taught me the value of user feedback and iteration. </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user} alt="" height={"20px"} width={"20px"}/>
                <input type="email" placeholder="Enter your email"/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
    </div>
    <hr/>
    <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Sumit Sharma. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
    </div>
   </div>
  );
};

export default Footer;
