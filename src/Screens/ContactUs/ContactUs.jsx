import React, { useEffect } from "react";
import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Send from "../../assets/right nav.svg";
import Mail from "../../assets/email_img.png";
import Location from "../../assets/location_img.png";
import Call from "../../assets/call_img.png";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <span className="reach-text"> Reach out to us</span>
        </div>
        <div className="reach-image-section">
          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <img src={Mail} alt="Mail" className="contact-icon" />
            </div>
            <div className="contact-icon-text-wrapper">
              <p className="contact-icon-text">info@truetalent.io</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <img src={Call} alt="Call" className="contact-icon" />
            </div>

            <div className="contact-icon-text-wrapper">
              <p className="contact-icon-text">+919090690936 </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <img src={Location} alt="Location" className="contact-icon" />
            </div>

            <div className="contact-icon-text-wrapper">
              <p className="contact-icon-text">
                #88 Borewell Road, Whitefield,
                <br /> Bangalore, 560066, Karnataka{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="map-container">
          <iframe
            title="TrueTalent Location"
            src="https://www.google.com/maps?q=12.9721576,77.7505628&z=16&output=embed"
            className="true-talent-map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
