import React, { useState, useCallback } from "react";
import CustomTextInput from "../ui/atoms/CustomTextInput";
import { makeStyles } from "@material-ui/core";
import CustomSimpleButton from "../ui/atoms/CustomSimpleButton";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/users/operation";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    textAlign: "center",
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
  ButtonContainer: {
    margin: "40px 0px",
  },
}));

const Form = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [username, setUsername] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState("");

  const inputUsername = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const inputConfirmPassword = useCallback(
    (event) => {
      setConfirmPassword(event.target.value);
    },
    [setConfirmPassword]
  );

  const SIGN_UP = [
    {
      label: "メールアドレス",
      fullWidth: true,
      value: email,
      onChange: inputEmail,
      multiline: false,
      required: false,
      rows: 1,
      type: "email",
    },
    {
      label: "パスワード",
      fullWidth: true,
      value: password,
      onChange: inputPassword,
      multiline: false,
      required: false,
      rows: 1,
      type: "password",
    },
  ];

  return (
    <>
      <form className={classes.form} noValidate>
        {SIGN_UP.map((signUpData, index) => {
          return (
            <div className={classes.TextInputMargin} key={index}>
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
        <div className={classes.ButtonContainer}>
          <CustomSimpleButton
            label="ログインする"
            onClick={() => dispatch(signIn(email, password))}
          />
        </div>
      </form>
    </>
  );
};

export default Form;
