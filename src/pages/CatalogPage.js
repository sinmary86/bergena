import React from "react";
import CatalogHeader from "../components/CatalogHeader";
import CategoryFilter from "../components/CategoryFilter";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import "../styles/CatalogPage.css";

const CatalogPage = () => {
    const filteredItems = useSelector((state) => state.catalog.filteredItems);
  

  return (
    <div className="catalog-page">
    
      <CatalogHeader />
      <CategoryFilter />
      <ProductGrid products={filteredItems} />

      <Footer />
    </div>
  );
};

export default CatalogPage;


