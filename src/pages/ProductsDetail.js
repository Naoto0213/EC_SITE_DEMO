import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Detail from "../components/detail/Detail";
import { db } from "../firebase";

const ProductsDetail = () => {
  const [product, setProduct] = useState(null);
  const selector = useSelector((state) => state);
  const path = selector.router.location.pathname;
  const id = path.split("/product/detail")[1];

  useEffect(() => {
    db.collection("products")
      .doc(id)
      .get()
      .then((doc) => {
        const data = doc.data();
        setProduct(data);
      });
  }, [id]);

  return <div>{product && <Detail product={product} />}</div>;
};

export default ProductsDetail;
