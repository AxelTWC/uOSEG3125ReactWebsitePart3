import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";

import "./checkout.css"; 

export const Checkout = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const progressBarStyle = {
    width: totalAmount > 0 ? "50%" : "0%",
  };

  const renderCartItem = (itemId) => {
    const itemInfo = PRODUCTS.find((product) => product.id === Number(itemId));
    const quantity = cartItems[itemId];
    return (
      <div className="cart-item" key={itemId}>
        <h4>{itemInfo.name}</h4>
        <p>Price: ${itemInfo.price}</p>
        <p>Quantity: {quantity}</p>
        <p>Subtotal: ${itemInfo.price * quantity}</p>
      </div>
    );
  };

  const cartItemIds = Object.keys(cartItems).filter(
    (itemId) => cartItems[itemId] > 0
  );

  return (
    <div className="container">
      <h2>Checkout</h2>
      {cartItemIds.map(renderCartItem)}
      <div className="line"></div>
      <h3 className="total">Total: ${getTotalCartAmount()}</h3>
      <button>Confirm Order</button>
        Step 2: Confirm
        <div className="progress-bar1">
            <div className="progress-bar-fill1" style={progressBarStyle}></div>
          </div>
    </div>
    
  );
};
