import React from "react";
import "../styles/CatalogHeader.css";
import Navbar from "../components/Navbar";

const CatalogHeader = () => {
  return (
    <div className="catalog-header">
      <div className="navbar-container">
        <Navbar />
      </div>
      <h3>Katalog</h3>
    </div>
  );
};

export default CatalogHeader;