import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ScrollDownArrow.css';

const CatalogSectionArrow = () => {
  return (
    <Link to="/catalog" className="catalog-button"> 
      <p className="catalog-text">ZUM EINKAUFEN</p>
      <div className="arrow">
        <span>&#8595;</span>
      </div>
    </Link>
  );
};

export default CatalogSectionArrow;

