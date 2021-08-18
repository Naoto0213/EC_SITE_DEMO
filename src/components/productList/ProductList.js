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
    justifyContent: "center",
    padding: "0px 160px",
    [theme.breakpoints.down("md")]: {
      padding: "0px 90px",
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
            <Grid item>
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductList;
