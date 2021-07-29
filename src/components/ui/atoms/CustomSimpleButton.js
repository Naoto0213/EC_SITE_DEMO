import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
  return {
    Button: {
      width: "220px",
      fontWeight: "bold",
    },
  };
});

const CustomSimpleButton = ({ label, color, onClick }) => {
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
