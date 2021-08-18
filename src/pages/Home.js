import { makeStyles } from "@material-ui/core";
import { push } from "connected-react-router";
import React from "react";
import { useDispatch } from "react-redux";
import CustomSimpleButton from "../components/ui/atoms/CustomSimpleButton";
import { signOut } from "../redux/users/operation";
import ProductList from "../components/productList/ProductList";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  };
});

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h2>ホーム</h2>
      <CustomSimpleButton
        label="ホーム"
        onClick={() => {
          dispatch(push("/"));
        }}
      />
      <CustomSimpleButton
        label="アカウントを作成"
        onClick={() => {
          dispatch(push("/signup"));
        }}
      />
      <CustomSimpleButton
        label="ログイン"
        onClick={() => {
          dispatch(push("/signin"));
        }}
      />
      <CustomSimpleButton
        label="サインアウト"
        onClick={() => dispatch(signOut())}
      />
      <CustomSimpleButton
        label="ガンプラを追加"
        onClick={() => {
          dispatch(push("/product/edit"));
        }}
      />

      <ProductList />
    </div>
  );
};

export default Home;
