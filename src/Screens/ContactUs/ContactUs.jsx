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
        <div className="map-container">
          <iframe
            title="TrueTalent Location"
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.203493897393!2d77.74798747493678!3d12.972157587352601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12223a91d1a5%3A0xf82b90fc0ec97a7e!2s88%2C%20Borewell%20Rd%2C%20Whitefield%2C%20Bengaluru%2C%20Karnataka%20560066!5e0!3m2!1sen!2sin!4v1714544830249!5m2!1sen!2sin"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7776.129189576888!2d77.73835293778653!3d12.967718454646182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%2388%20Borewell%20Road%2C%20Whitefield%2C%20Bangalore%2C%20560066!5e0!3m2!1sen!2sin!4v1746425255288!5m2!1sen!2sin"
            width="80%"
            height="350"
            style={{ border: 0 }}
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
