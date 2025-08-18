import React from "react";
import "./contact.css";
import FAQ from './faq'

export default function Contact() {
  return (
    <div className="contact-section">
      {/* Top Intro Section */}
      {/* <div className="contact-content">
        <button className="contact-btn">Contact Us</button>
        <p className="contact-text">
          Get in <span className="highlight">Touch</span> with us for Further Informations.
        </p>
      </div> */}

      {/* Contact Details + Form Section */}
      <div className="contact-wrapper">
        {/* Left Side */}
        <div className="contactform-left">
          <h2>
            Collaborate, create, or just <br />
            chat — <span className="highlight">we're listening.</span>
          </h2>

<div className="contact-info">
  <h3>Office</h3>

  <div className="info-row">
    <img src="/asset/destination.png" alt="Location" className="icon" />
    <p>
      US - 4520 W Oakeller Avenue <br />
      Tampa, FL 33611 Suite #13348
    </p>
  </div>

  <div className="info-row">
    <img src="/asset/destination.png" alt="Location" className="icon" />
    <p>
      Canada - PO Box 73553, <br />
      Vancouver RPO Downtown, BC, 
      V6E 4L9, Canada
    </p>
  </div>

  <h3>Mail</h3>
  <p>sc-support@consultcraftinc.com</p>
  <p>info@consultcraftinc.com</p>

  <h3>Contact</h3>
  <p>+1 (206) 457-6678</p>
  <p>+91-7070175888</p>
</div>

        </div>

        {/* Right Side */}
        <div className="contactform-right">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your First Name" />
              <input type="text" placeholder="Your Last Name" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Enter Your Phone Number" />
              <input type="email" placeholder="Enter Your Email" />
            </div>

            <textarea placeholder="I would like to get in touch with you..." />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <FAQ />
    </div>
  );
}
