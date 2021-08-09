import React from "react";
import { makeStyles, Button } from "@material-ui/core";
const useStyle = makeStyles((theme) => {
  return {
    Button: {
      width: "220px",
      fontWeight: "bold",
      margin: "10px 0px",
    },
  };
});

const CustomSimpleButton = ({ label, onClick }) => {
  const classes = useStyle();
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={onClick}
        className={classes.Button}
      >
        {label}
      </Button>
    </>
  );
};

export default CustomSimpleButton;
