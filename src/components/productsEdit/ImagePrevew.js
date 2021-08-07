import { makeStyles } from "@material-ui/core";
import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
  },
  image: {
    width: "300px",
    height: "300px",
  },
  clearButton: {
    textAlign: "top",
  },
}));

const ImagePrevew = ({ path, id, deletes }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ClearIcon className={classes.clearButton} onClick={() => deletes(id)} />
      <img
        src={path}
        alt="プレビュー
      画像"
        id={id}
        className={classes.image}
      />
    </div>
  );
};

export default ImagePrevew;
