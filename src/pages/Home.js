import { makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CustomSimpleButton from "../components/ui/atoms/CustomSimpleButton";
import { signOut } from "../redux/users/operation";

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
  const selector = useSelector((state) => state);
  return (
    <div className={classes.container}>
      <h2>ホーム</h2>
      <CustomSimpleButton label="ホーム" to="/" />
      <CustomSimpleButton label="アカウントを作成" to="/signup" />
      <CustomSimpleButton label="ログイン" to="/signin" />
      <CustomSimpleButton
        label="サインアウト"
        onClick={() => dispatch(signOut())}
      />
      <CustomSimpleButton label="ガンプラを追加" to="/product/edit" />
    </div>
  );
};

export default Home;
