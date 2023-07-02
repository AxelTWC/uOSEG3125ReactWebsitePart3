import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { Link } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const progressBarStyle = {
    width: totalAmount > 0 ? "50%" : "0%",
  };

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div>
          Step 1: Checkout
          <div className="progress-bar">
            <div className="progress-bar-fill" style={progressBarStyle}></div>
          </div>
          
          <div className="buttonsCHECKOUT">
            <Link to="/shop" className="buttonCHECKOUT">
              Continue
            </Link>
            <Link to="/checkout" className="buttonCHECKOUT">
              Checkout
            </Link>
          </div>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
