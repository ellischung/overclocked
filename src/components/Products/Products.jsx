import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "GPU",
    description: "Nvidia RTX 3080 Founders Edition",
    price: "$1000",
  },
  {
    id: 2,
    name: "CPU",
    description: "Intel Core i9-12900k",
    price: "$500",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;