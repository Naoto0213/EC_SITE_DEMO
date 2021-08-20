import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  vertical: {
    borderLeft: "6px solid #444",
    height: "20px",
    marginRight: "16px",
    [theme.breakpoints.down("xs")]: {
      borderLeft: "4px solid #444",
      marginRight: "8px",
      height: "16px",
    },
  },
  borderTitle: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    margin: "30px 0px",
    borderBottom: "1px solid #999",
    [theme.breakpoints.down("sm")]: {
      width: "450px",
      fontSize: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      fontSize: "16px",
    },
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#0A1931",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
}));

const BorderTitle = (props) => {
  const classes = useStyles();
  const label = props.label;
  return (
    <div className={classes.borderTitle}>
      <div className={classes.vertical}></div>
      <Typography className={classes.title}>{label}</Typography>
    </div>
  );
};

export default BorderTitle;
