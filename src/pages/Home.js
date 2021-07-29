import { makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import CustomSimpleButton from "../components/ui/atoms/CustomSimpleButton";
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
      <CustomSimpleButton label="ログイン" to="/login" />
      <p>{uid}</p>
      <p>{username}</p>
      <p>{html_url}</p>
    </div>
  );
};

export default Home;
