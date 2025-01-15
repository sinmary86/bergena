import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { emptyCartAlert, purchaseSuccessAlert } from '../components/Alert';
import {
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from '../redux/cartSlice';
import "../styles/Cart.css";

const Cart = ({ address, deliveryDate }) => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  const handlePurchase = () => {
    if (items.length === 0) {
      emptyCartAlert();
      return;
    }

    purchaseSuccessAlert();
    dispatch(clearCart());
  };

  return (
    <div className="cart">

       <div className="heading-cart"> 
      <h5>Zusammenfassung</h5>
        </div>

   <div className="cart-content">      
      {address && (
        <div className="address-summary">
          <h4>Empfänger:</h4>
          <p>
            <strong>Name:</strong> {`${address.firstName} ${address.lastName}`}
          </p>
          <p>
            <strong>Adresse:</strong> {`${address.street} ${address.number}, ${address.plz} ${address.city}`}
          </p>
          {address.phone && (
            <p>
              <strong>Telefonnummer:</strong> {address.phone}
            </p>
          )}
        </div>
      )}

      {deliveryDate && (
        <div className="delivery-summary">
          <h4>Lieferdatum:</h4>
          <p>{deliveryDate}</p>
        </div>
      )}

      {items.length === 0 ? (
        <p>Ihr Warenkorb ist leer</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Produktname</th>
                <th>Preis pro Stück</th>
                <th>Menge</th>
                <th>Gesamtpreis</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price} €</td>
                  <td>
                    <button className="btn-quantity" onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                    {item.quantity}
                    <button className="btn-quantity" onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                  </td>
                  <td>{item.totalPrice} €</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Gesamtsumme: {totalAmount.toFixed(2)} €</h4>
          <button className="btn-buy checkout" onClick={handlePurchase}>
            Kaufen
          </button>
        </>
      )}
    </div>
    </div>
  );
};

export default Cart;
