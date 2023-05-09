import React from "react";
import CartItem from "./cartItem";
import "./cart.css";

const ShoppingCart = ({ items, username }) => {
  const total = items.reduce((acc, i) => {
    return acc + i.price * i.quantity;
  }, 0);
  return (
    <div className="Cart">
      <h1 className="Cart-header">{username}'s Shopping Cart</h1>
      <div className="Cart-content">
        {items.map((i) => (
          <CartItem name={i.name} price={i.price} quantity={i.quantity} />
        ))}
      </div>
      <b className="Cart-total">Cart Total: ${total}</b>
    </div>
  );
};

export default ShoppingCart;
