import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, clearCart, addToCart } = useContext(ShopContext);

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const handleAddTestProduct = () => {
    addToCart(1, 1);
  };

  const handleAddSecondProduct = () => {
    addToCart(2, 1);
  };

  return (
    <div className="cart-container">
      <h2>Mi Carrito ({cart.length})</h2>
      <div className="cart-container-content">
        {cart.length === 0 ? (
          <p>Su carrito esta vacio</p>
        ) : (
          <>
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </>
        )}
      </div>
      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button onClick={clearCart}>Limpiar Carrito</button>
      </div>
    </div>
  );
};

export default Cart; 