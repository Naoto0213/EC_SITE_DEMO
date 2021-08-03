import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  makeStyles,
  Avatar,
  CssBaseline,
  Typography,
  Container,
} from "@material-ui/core";
import Form from "../components/signup/Form";
import { Link } from "react-router-dom";

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

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          アカウント作成
        </Typography>
        <Form />
        <Link to="/signin" className={classes.Link}>
          <Typography variant="body1" color="initial" align="center">
            アカウントをお持ちの方はこちら
          </Typography>
        </Link>
      </div>
    </Container>
  );
}
