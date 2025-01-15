import React from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductGrid.css";

const ProductGrid = ({ products }) => {

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          img={product.img}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
