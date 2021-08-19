import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../redux/product/operation";
import { getProducts } from "../../redux/product/selectors";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "0px 130px",
    [theme.breakpoints.down("md")]: {
      padding: "0px 40px",
      margin: "0 auto",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      padding: "0px 0px",
    },
  },
}));

const ProductList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getProducts(selector);
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Grid className={classes.container} container>
        {products.map((product, i) => {
          return (
            <Grid item lg={3} md={4} sm={6}>
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductList;
