import React from "react";
import "./MyWork.css";
import Theme from "../../assets/logo.jpg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow.svg";

const MyWork = () => {
  return (
    <div id="socialservices" className="mywork">
       <div className="mywork-title">
          <h1>Social Services</h1>
          <img src={Theme} alt="" height={"150px"} width={"250px"} />
       </div>
       <div className="mywork-container">
           {mywork_data.map((work, index) => {
              return <img key={index}  src={work.w_image} alt=""  height={"250px"} width={"250px"} />;
           })}
           
       </div>
       <div className="mywork-showmore">
              <p>Show More</p>
              <img src={arrow_icon} alt="" height={20} width={20} />
       </div>
    </div>
  );
};

export default MyWork;