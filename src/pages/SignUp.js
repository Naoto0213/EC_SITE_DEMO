import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CustomTextInput from "../components/ui/atoms/CustomTextInput";
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

  const [username, setUsername] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState("");

  const SIGN_UP = [
    {
      label: "ユーザー名",
      fullWidth: true,
      value: username,
      onChange: "",
      multiline: false,
      required: false,
      rows: false,
      type: "usename",
    },
    {
      label: "メールアドレス",
      fullWidth: true,
      value: email,
      onChange: "",
      multiline: false,
      required: false,
      rows: false,
      type: "",
    },
    {
      label: "パスワード",
      fullWidth: true,
      value: password,
      onChange: "",
      multiline: false,
      required: false,
      rows: false,
      type: "",
    },
    {
      label: "パスワード(再確認)",
      fullWidth: true,
      value: confirmPassword,
      onChange: "",
      multiline: false,
      required: false,
      rows: false,
      type: "confirmPassword",
    },
  ];

  const inputUsername = useCallback(() => {}, [input]);

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
        <form className={classes.form} noValidate>
          {SIGN_UP.map((signUpData) => {
            return (
              <div className={classes.TextInputMargin}>
                <CustomTextInput
                  label={signUpData.label}
                  fullWidth={signUpData.fullWidth}
                  value={signUpData.value}
                  onChange={signUpData.onChange}
                  multiline={signUpData.multiline}
                  required={signUpData.required}
                  rows={signUpData.rows}
                  type={signUpData.type}
                />
              </div>
            );
          })}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            アカウントを作成する
          </Button>
          <Link to="/login" className={classes.Link}>
            <Typography variant="body1" color="initial" align="center">
              アカウントをお持ちの方はこちら
            </Typography>
          </Link>
        </form>
      </div>
    </Container>
  );
}
