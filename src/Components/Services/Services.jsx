import React from "react";
import './Services.css';
import Theme from '../../assets/logo.JPG';
import Services_Data from '../../assets/services_data.js'; 
import arrow_icon from '../../assets/arrow.svg';

const Services = () => {
    return (
        <div id="services" className="services">
            <div className="services-title">
                <h1>My Services</h1>
                <img src={Theme} alt="" />
            </div>
            <div className="services-container">
               {Services_Data.map((service, index) => {
                   return <div key = {index} className='service-format' >
                       <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" height={20} width={20} />
                        </div>
                    </div>
            })}
            </div>
        </div>
    );
};

export default Services;