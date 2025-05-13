import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useContext(ShopContext);

  if (!item) return null;

  return (
    <div className="cart-item">
      <img src={item.imgURL} alt={item.name} className="cart-item-img" />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p><b>Marca:</b> {item.brand}</p>
        <div className="cart-item-actions">
          <button onClick={() => removeFromCart(item.id, 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => addToCart(item.id, 1)}>+</button>
        </div>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem; 