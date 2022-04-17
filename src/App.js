import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navbar, Products } from "./components";
import { commerce } from "./lib/commerce";

const App = () => {
  const theme = createTheme(); // components need to be wrapped by theme
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Products products={products} />
      </ThemeProvider>
    </div>
  );
};

export default App;