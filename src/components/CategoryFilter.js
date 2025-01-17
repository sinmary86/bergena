import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../redux/catalogSlice";
import "../styles/CategoryFilter.css";

const CategoryFilter = () => {
  const categories = [
    "ALLE STRÄUßE", 
    "TAGES STRAUß",
    "FEIERLICHER STRAUß",
    "HOCHZEITS STRAUß",
  ];

  const selectedCategory = useSelector((state) => state.catalog.selectedCategory);
  const dispatch = useDispatch();

  const handleFilterClick = (category) => {
    dispatch(filterByCategory(category));
  };

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
          onClick={() => handleFilterClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
