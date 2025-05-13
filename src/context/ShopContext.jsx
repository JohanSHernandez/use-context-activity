import React, { createContext, useState } from "react";
import productsData from '../data/products.json';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products] = useState(productsData);

  const addToCart = (id, qty = 1) => {
    const product = products.find(p => p.id === id);
    if (!product) return;
    setCart(prev => {
      const found = prev.find(item => item.id === id);
      if (found) {
        return prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + qty } : item
        );
      } else {
        return [...prev, { ...product, quantity: qty }];
      }
    });
  };

  const removeFromCart = (id, qty = 1) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - qty }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  return (
    <ShopContext.Provider value={{ products, cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </ShopContext.Provider>
  );
};