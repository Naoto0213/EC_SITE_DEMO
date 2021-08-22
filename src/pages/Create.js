import React from "react";
import BorderTitle from "../components/ui/atoms/BorderTitle";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "1240px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    padding: "5% 8%",

    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
    },
  },
}));

const Create = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderTitle label={"投稿した作品"} />
    </div>
  );
};

export default Create;
