import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyle = makeStyles((theme) => {
  return {
    Button: {
      width: "220px",
      fontWeight: "bold",
      margin: "10px 0px",
    },
  };
});

const CustomSimpleButton = ({ label, color, onClick, to }) => {
  const classes = useStyle();
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={onClick}
        className={classes.Button}
        component={Link}
        to={to}
      >
        {label}
      </Button>
    </>
  );
};

export default CustomSimpleButton;
