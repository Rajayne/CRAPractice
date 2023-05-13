import React from "react";
import "./cartItem.css";

const CartItem = ({ name, price, quantity }) => (
  <div className="CartItem">
    <h4 className="CartItem-header">{name}</h4>
    <ul className="CartItem-content">
      <li>Price: ${price}</li>
      <li>Quantity: {quantity}</li>
    </ul>
  </div>
);

export default CartItem;
