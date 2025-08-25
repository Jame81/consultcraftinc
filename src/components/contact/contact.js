import React, { useState } from "react";
import "./contact.css";
import FAQ from './faq';

export default function Contact() {
  // State to hold the data from the form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });
  
  // State to manage the form's submission status (e.g., "Sending...", "Success!")
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  // This function updates the state whenever a user types in an input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // This function is called when the user clicks the "Send Message" button
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default browser refresh on form submission
    setIsSubmitting(true);
    setSubmissionMessage("");

    // ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ //
    // ▼▼▼▼▼   THIS IS THE ONLY LINE YOU NEED TO EDIT   ▼▼▼▼ //
    // Paste the URL you got from deploying your Google Apps Script here.
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzZcROi6j4lr0okdFfnb6S7OFPbrqIaL_g9A1C5mys6Cx7v8c7kSOayX9BPHlIbA85g/exec'; 
    
    // ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ //
    // ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ //

    // Sends the form data to your Google Script
    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        setSubmissionMessage("Success! Your message has been sent.");
        // Clear the form fields after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: ""
        });
      } else {
        // Handle errors returned from the script
        throw new Error(data.message || 'An unknown error occurred.');
      }
    })
    .catch(error => {
      // Handle network errors or errors from the .then() block
      setSubmissionMessage(`Error: ${error.message}`);
      console.error('Error!', error.message);
    })
    .finally(() => {
      // Re-enable the submit button
      setIsSubmitting(false);
    });
  };

  return (
    <div className="contact-section">
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
          {/* We connect the handleSubmit function to the form's onSubmit event */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              {/* Each input is now controlled by React state */}
              <input 
                type="text" 
                name="firstName" 
                placeholder="Your First Name" 
                value={formData.firstName} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="text" 
                name="lastName" 
                placeholder="Your Last Name" 
                value={formData.lastName} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-row">
              <input 
                type="tel"
                name="phone" 
                placeholder="Enter Your Phone Number" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Enter Your Email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <textarea 
              name="message" 
              placeholder="I would like to get in touch with you..." 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
            {/* The button is disabled during submission to prevent multiple clicks */}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {/* This paragraph displays the success or error message */}
            {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
          </form>
        </div>
      </div>
      <FAQ />
    </div>
  );
}