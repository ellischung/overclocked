import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "GPU",
    description: "Nvidia RTX 3080 Founders Edition",
    price: "$1000",
    image:
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ARUXS211015278F9.jpg",
  },
  {
    id: 2,
    name: "CPU",
    description: "Intel Core i9-12900k",
    price: "$500",
    image: "https://m.media-amazon.com/images/I/61RnzuOIOoL._AC_SS450_.jpg",
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
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