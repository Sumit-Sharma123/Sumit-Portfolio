import React, { useRef } from "react";
import "./Navbar.css"; 
import logo from "../../assets/img11.png"; 
import wavy from "../../assets/main.png";
import { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from "../../assets/list.png";
import menu_close from "../../assets/close.png";
const Navbar = () => {
    const [menu , setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () =>{
        menuRef.current.style.right = "0";
    }
    const closeMenu = () =>{
        menuRef.current.style.right = "-350px";
    }
    return (
       <div className="navbar" >
         <img src={logo} alt=" " height={"120px"} width={"200px"} /> 
         <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" height={"20px"} width={"20px"}/>
         
         <div>
          <ul ref={menuRef} className="nav-menu">
             <img src={menu_close} alt="" onClick={closeMenu} className="nav-mob-close" height={"20px"} width={"20px"}/>
              <li ><AnchorLink className="anchor-link"  href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={wavy} alt=""  height={"25px"} width={"50px"}/>:<></> }</li>
              <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"?<img src={wavy} alt="" height={"25px"} width={"50px"}/>:<></>}</li>
              <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>setMenu("services")}>My Services</p></AnchorLink>{menu==="services"?<img src={wavy} alt="" height={"25px"} width={"50px"}/>:<></>}</li>
              <li><AnchorLink className="anchor-link" offset={50} href="#projects"><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu==="projects"?<img src={wavy} alt="" height={"25px"} width={"50px"}/>:<></>}</li>
              <li><AnchorLink className="anchor-link" offset={50} href="#socialservices"><p onClick={()=>setMenu("socialservices")}>Social Services</p></AnchorLink>{menu==="socialservices"?<img src={wavy} alt="" height={"25px"} width={"50px"}/>:<></>}</li>
              <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={wavy} alt="" height={"25px"} width={"50px"}/>:<></>}</li>
              
         </ul>
         </div>
        <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}></p>Connect with me</AnchorLink></div>
       </div>
    );
};

export default Navbar;