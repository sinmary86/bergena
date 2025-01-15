import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/ProductCard.css";

const ProductCard = ({ id, img, name, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price }));
  };

  return (
    <div className="product-card">
      <img src={require(`../assets/${img}`)} alt={name} className="product-image" />
      <h3 className="product-title">{name}</h3>
      <div className="product-info">
        <span className="product-price">{price} €</span>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
