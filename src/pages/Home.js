import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ProductList from "../components/productList/ProductList";
import CustomSimpleButton from "../components/ui/atoms/CustomSimpleButton";
import Gundam from "../img/Gundam.png";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const useStyles = makeStyles(() => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: "0xp 120px",
    },
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "300px",
      background: "#fff",
    },
    containerText: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#0A1931",
      marginBottom: "16px",
    },
    containerSubText: {
      fontSize: "16px",
      color: "#185ADB",
    },
    borderTitle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "120px",
      margin: "30px 0px",
      fontSize: "24px",
      fontWeight: "bold",
      color: "#0A1931",
      borderBottom: "2px solid #185ADB",
    },
    img: {
      width: "60px",
      height: "60px",
      margin: "10px 0px",
    },
  };
});

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <img src={Gundam} alt="" className={classes.img} />
        <Typography className={classes.containerText}>
          GUNPLA CRATE SITE
        </Typography>
        <CustomSimpleButton
          label="ガンプラを作成する"
          onClick={() => {
            dispatch(push("/product/edit"));
          }}
        />
      </main>
      <Typography className={classes.borderTitle}>GUNPLA</Typography>

      <ProductList />
    </div>
  );
};

export default Home;
