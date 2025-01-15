import React, { useState } from "react";
import CartHeader from "../components/CartHeader";
import Cart from "../components/Cart";
import Accordion from "../components/Accordion";
import RecipientAccordion from "../components/RecipientAccordion";
import DeliveryDateAccordion from "../components/DeliveryDateAccordion";
import "../styles/CartPage.css";
import Footer from "../components/Footer";

const CartPage = () => {

  const [address, setAddress] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(null);
   
    return (
      <div className="cart-page">
      <CartHeader />
      <div className="cart-container">
        <div className="left-section">
          <Accordion title="1. Empfänger">
            <RecipientAccordion setAddress={setAddress} />
          </Accordion>
          <Accordion title="2. Lieferdatum">
            <DeliveryDateAccordion setDeliveryDate={setDeliveryDate} />
          </Accordion>
        </div>
        <div className="right-section">
          <Cart address={address} deliveryDate={deliveryDate} />
        </div>
      </div> 
      <Footer />
    </div>
    );
};

export default CartPage;