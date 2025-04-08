import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { errorAlert } from "../components/Alert";

export const CheckoutForm = ( { onPaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });
  
      if (!error) {
        console.log("Stripe 23 | token generated!", paymentMethod);
        try {
          const { id } = paymentMethod;
          const response = await axios.post(
            "http://localhost:8080/stripe/charge",
            {
              amount: 999,
              id: id,
            }
          );
  
          console.log("Stripe 35 | data", response.data.success);
          if (response.data.success) {
            console.log("CheckoutForm.js 25 | payment successful!");
            if (onPaymentSuccess) {
              onPaymentSuccess(); 
            }
          }
        } catch (error) {
          console.log("CheckoutForm.js 28 | ", error);
          errorAlert("Fehler bei der Zahlung.");
        }
      } else {
        console.log(error.message);
        errorAlert(error.message);
      }
    };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className="btn-buy checkout">
        Kaufen
      </button>
    </form>
  );
};
