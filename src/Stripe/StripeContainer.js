import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51RAo4iB4Gxz6w6aJrQWoGc9XhGycWlb1S63CjvPZtQOmVCeRZb2r0PMu2w8OZ8iBZzR1Ly3YTcMFQUbWC1mpEIXr00wlFyKtAH";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = ({ onPaymentSuccess }) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm onPaymentSuccess={onPaymentSuccess}/>
    </Elements>
  );
};

export default Stripe;