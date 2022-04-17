import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navbar, Products } from "./components";
import { commerce } from "./lib/commerce";

const App = () => {
  const theme = createTheme(); // components need to be wrapped by theme
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar totalItems={cart.total_items} />
        <Products products={products} onAddToCart={handleAddToCart} />
      </ThemeProvider>
    </div>
  );
};

export default App;