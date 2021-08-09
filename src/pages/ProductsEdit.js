import React from "react";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import {
  makeStyles,
  Avatar,
  CssBaseline,
  Typography,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Form from "../components/productsEdit/Form";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.light,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  TextInputMargin: {
    margin: "16px",
  },
  Link: {
    textDecoration: "none",
  },
}));

const ProductsEdit = () => {
  const classes = useStyles();
  const id = window.location.pathname.split("/product/edit")[1];
  console.log("before spiluit /", id);

  if (id !== "") {
    id = id.split("/")[1];
    console.log("After Spilit");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <BorderColorIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ガンプラを作成する
        </Typography>
        <Form />
        <Link to="/signin" className={classes.Link}>
          <Typography variant="body1" color="initial" align="center">
            ホームに戻る
          </Typography>
        </Link>
      </div>
    </Container>
  );
};

export default ProductsEdit;
