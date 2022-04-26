import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useStyles from "./styles";

const Products = ({ products, onAddToCart }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Carousel responsive={responsive} infinite={true} autoPlay={true}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <div className={classes.spacing}>
              <Product product={product} onAddToCart={onAddToCart} />
            </div>
          </Grid>
        ))}
      </Carousel>
    </main>
  );
};

export default Products;