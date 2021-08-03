import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  makeStyles,
  Avatar,
  CssBaseline,
  Typography,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Form from "../components/reset/Form";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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

export default function Reset() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          リセットする
        </Typography>
        <Form />
        <Link to="/signin" className={classes.Link}>
          <Typography variant="body1" color="initial" align="center">
            ログイン画面に戻る
          </Typography>
        </Link>
      </div>
    </Container>
  );
}
