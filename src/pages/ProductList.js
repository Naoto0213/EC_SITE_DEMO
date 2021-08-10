import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/productList/ProductCard";
import { fetchProduct } from "../redux/product/operation";
import { getProducts } from "../redux/product/selectors";

const ProductList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getProducts(selector);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default ProductList;
