import React from "react";
import "../styles/AboutHeader.css";
import Navbar from "../components/Navbar";

const AboutHeader = () => {
  return (
    <div className="about-header">
      <div className="navbar-container">
        <Navbar />
      </div>
      <h3>Über uns</h3>
    </div>
  );
};

export default AboutHeader;