import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ScrollDownArrow.css';

const CatalogSectionArrow = () => {

  const navigate = useNavigate(); 

  const goToCatalog = () => {
    navigate('/catalog'); 
  };

  return (
    <div className="catalog-button" onClick={goToCatalog}> 
      <p className="catalog-text">ZUM EINKAUFEN</p>
      <div className="arrow">
        <span>&#8595;</span>
      </div>
    </div>
  );
};

export default CatalogSectionArrow;

