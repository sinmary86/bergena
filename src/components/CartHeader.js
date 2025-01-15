import React from "react";
import "../styles/CartHeader.css";
import Navbar from "../components/Navbar";

const CartHeader = () => {
  return (
    <div className="cart-header">
      <div className="navbar-container">
        <Navbar />
      </div>
      <h3>Warenkorb</h3>
    </div>
  );
};

export default CartHeader;