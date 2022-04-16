import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navbar, Products } from "./components";

const App = () => {
  const theme = createTheme(); // components need to be wrapped by theme

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Products />
      </ThemeProvider>
    </div>
  );
};

export default App;