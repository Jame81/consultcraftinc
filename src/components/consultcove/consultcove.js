import React from "react";
import { Helmet } from 'react-helmet-async';
import "./consultcove.css";
// import logo from "/asset/logo.png"; // Use your logo path here

const ConsultCove = () => {
  return (
    <div className="cc-container">
      <Helmet>
        <title>ConsultCove | Launching Soon</title>
        <meta name="description" content="ConsultCove by ConsultCraft Inc. is launching soon. Stay tuned for our innovative platform connecting experts and clients in business and education." />
      </Helmet>
      {/* <a href="/" className="home-button">Home</a> */}
      <div className="cc-content">
        <img src="/asset/logo.png" alt="ConsultCove Logo" className="cc-logo" />
        <h1 className="coming-soon-text">Launching Soon: Stay Tuned</h1>
      </div>
    </div>
  );
};

export default ConsultCove;
