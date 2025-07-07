import React from "react";
import "./Project.css";
import theme_pattern from "../../assets/logo.jpg"; 
import arrow from "../../assets/arror.png"; // Assuming you have an arrow image for navigation

const Project = () => {
  return (
    <div id="projects" className="project">
       <div className="project-title">
        <h1>My Projects</h1>
         <img src={theme_pattern} alt="Project Theme" />
       </div>
        <div className="project-list">
            <div className="project-item">
               <h2><u>Wimdu</u> </h2>
                <p><strong>Description :- </strong> Wimdu has over 350,000 vacation rentals located in the some of the best 
                spots around the globe, booking your vacation with Wimdu allows you to avoid overpriced and overcrowded Hotel accommodation. </p>
                <nbsp/> <nbsp/>
                <h3>Here's a more detailed breakdown :</h3>
                <img src={arrow} alt=""  height={"20px"} width={"20px"}  /> 
                <p><strong>Platform for Hosts:-</strong> Wimdu provides a platform for individuals to list their properties, manage bookings, and communicate with guests. </p>
                
                <p><strong>Platform for Guests:-</strong>
                 Guests can search for and book accommodations based on location, price, amenities, and other preferences. </p>
                <p><strong>Types of Listings:-</strong>
                Wimdu offers a wide range of lodging options, including entire homes, private rooms, and shared spaces. </p>
                <p><strong>Community-Based:-</strong>
                It's built on the idea of a sharing economy, connecting hosts and guests through a community-driven approach. 
                </p>
                <p><strong>Global Reach:-</strong>
                Wimdu operates in numerous countries and regions, offering a vast selection of listings worldwide. </p>
                <a href="https://www.wimdu.com/" >Visit Wimdu Website</a>

            </div>
           
        </div>
      
    </div>
  );
};

export default Project;
