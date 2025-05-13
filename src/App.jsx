import React from "react";
import { ShopProvider } from "./context/ShopContext";
import Cart from "./components/Cart";
import ConteinerProducts from "./components/ConteinerProducts";

function App() {
  return (
    <ShopProvider>
      <div className="app-main-content">
        <ConteinerProducts />
      </div>
      <Cart />
    </ShopProvider>
  );
}

export default App;
