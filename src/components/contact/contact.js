import React, { useState } from "react";
import "./contact.css";
import FAQ from "./faq";

export default function Contact() {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage("");

    // ✅ Your deployed Google Apps Script URL
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxngzPm8b5Ets9arEXc5uHb7bhZpy2LUgw3NyXQYtU52ffpPb44x_6gp5JTTblPLh0l/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new URLSearchParams(formData), // 👈 Google Sheets prefers form-encoded
      });

      if (response.ok) {
        setSubmissionMessage("✅ Success! Your message has been sent.");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setSubmissionMessage("❌ Error: Failed to send message.");
      }
    } catch (error) {
      console.error("Error!", error);
      setSubmissionMessage(`❌ Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-section">
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
              <img
                src="/asset/destination.png"
                alt="Location"
                className="icon"
              />
              <p>
                US - 4520 W Oakeller Avenue <br />
                Tampa, FL 33611 Suite #13348
              </p>
            </div>
            <div className="info-row">
              <img
                src="/asset/destination.png"
                alt="Location"
                className="icon"
              />
              <p>
                Canada - PO Box 73553, <br />
                Vancouver RPO Downtown, BC, V6E 4L9, Canada
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
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
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
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {submissionMessage && (
              <p className="submission-message">{submissionMessage}</p>
            )}
          </form>
        </div>
      </div>
      <FAQ />
    </div>
  );
}
