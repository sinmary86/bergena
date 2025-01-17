import React from "react";
import Navbar from "../components/Navbar";
import "../styles/PageHeader.css";

const PageHeader = ({ title, className }) => {
  return (
    <div className={`page-header ${className}`}>
      <div className="navbar-container">
        <Navbar />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default PageHeader;
