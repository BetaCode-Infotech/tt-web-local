import React from "react";
import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Send from "../../assets/right nav.svg";
import Mail from "../../assets/email_img.png";
import Location from "../../assets/location_img.png";
import Call from "../../assets/call_img.png";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="center-field">
          <h2 className="listening-text">We are listening</h2>
          <p className="suggestion-text">
            Write us in case you wish to share feedback, suggestions or wish{" "}
            <br />
            to add value to the project Truetalent.
          </p>
          <h3 className="message-text">Send us a message</h3>
          <div className="message-block">
            <div className="message-input-wrapper">
              <input
                type="text"
                placeholder="Enter email address"
                className="message-input"
              />
              <img
                src={Send}
                alt="Send"
                className="send-icon"
                // onClick={handleSend}
              />
            </div>
            <p className="validation-text">
              {" "}
              Please fill the field before continuing
            </p>
          </div>
          <p className="reach-text"> Reach out to us</p>
        </div>
        <div className="reach-image-section">
          <img
            src={Mail}
            alt="Mail"
            className="contact-icon"
            // onClick={handleSend}
          />
          <p className="contact-icon-text">info@truetalent.io</p>
          <img
            src={Call}
            alt="Call"
            className="contact-icon"
            // onClick={handleSend}
          />
          <p className="contact-icon-text">+919090690936 </p>
          <img
            src={Location}
            alt="Location"
            className="contact-icon"
            // onClick={handleSend}
          />
          <p className="contact-icon-text">
            #88 Borewell Road, Whitefield,
            <br /> Bangalore, 560066, Karnataka{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
