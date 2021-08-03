import { makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CustomSimpleButton from "../components/ui/atoms/CustomSimpleButton";
import { signOut } from "../redux/users/operation";
import { getHtmlUrl, getUserId, getUserName } from "../redux/users/selectors";

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
  const uid = getUserId(selector);
  const username = getUserName(selector);
  const html_url = getHtmlUrl(selector);

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
      <CustomSimpleButton label="ガンプラを追加" to="/productsEdit" />
      <p>{uid}</p>
      <p>{username}</p>
      <p>{html_url}</p>
    </div>
  );
};

export default Home;
