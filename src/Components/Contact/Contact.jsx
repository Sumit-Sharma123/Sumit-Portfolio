import React from "react";
import "./Contact.css"; 
import theme_pattern from "../../assets/logo.jpg";
import mail_icon from "../../assets/mail_icon.png";
import location_icon from "../../assets/location_icon.png";
import call_icon from "../../assets/call_icon.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "cee51b06-b664-4cf6-885f-daf2fc2ffbde");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");
    }
  };

  return (
    <div  id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch </h1>
        <img src={theme_pattern} alt=""  />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Website visitors will typically also leave feedback or ask general questions through a contact page. These pieces of information are valuable </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt=""  height={"35px"} width={"35px"}/><p>sumits89843@gmail.com</p>
            </div>
            <div className="contact-detail">
            <img src={call_icon} alt="" height={"35px"} width={"35px"}/><p>+91 98-1797-2462</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" height={"35px"} width={"35px"}/><p>Main Road Haryana(HR) ,India </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email"/>
          <label htmlFor="">Write Your Message here</label>
          <textarea name="message" rows="8" placeholder="Enter Your Message"></textarea>
          <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
     
    </div>
  );
};

export default Contact;