import React, { useState, useCallback } from "react";
import { makeStyles, MenuItem } from "@material-ui/core";
import { useDispatch } from "react-redux";
import CustomSimpleButton from "../ui/atoms/CustomSimpleButton";
import CustomTextInput from "../ui/atoms/CustomTextInput";
import {
  SELECT_STOCK_INPUT_ITEM,
  SELECT_TYPE_INPUT_ITEM,
} from "../../config/selectInputItem";
import { saveProduct } from "../../redux/product/operation";
import ImageArea from "./ImageArea";

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
    textAlign: "left",
  },
  Link: {
    textDecoration: "none",
  },
  ButtonContainer: {
    margin: "40px 0px",
  },
  MenuItem: {
    textAlign: "left",
  },
}));

const Form = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [stock, setStock] = useState("");
  const [detail, setDetail] = useState("");
  const [images, setImages] = useState("");

  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const inputPrice = useCallback(
    (event) => {
      setPrice(event.target.value);
    },
    [setPrice]
  );

  const inputType = useCallback(
    (event) => {
      setType(event.target.value);
    },
    [setType]
  );

  const inputStock = useCallback(
    (event) => {
      setStock(event.target.value);
    },
    [setStock]
  );

  const inputDetail = useCallback(
    (event) => {
      setDetail(event.target.value);
    },
    [setDetail]
  );

  return (
    <>
      <form className={classes.form} noValidate>
        <ImageArea images={images} setImages={setImages} />
        <div className={classes.TextInputMargin}>
          <CustomTextInput
            label={"名前"}
            fullWidth={true}
            value={name}
            onChange={inputName}
          />
        </div>
        <div className={classes.TextInputMargin}>
          <CustomTextInput
            label={"種類"}
            fullWidth={true}
            value={type}
            select={true}
            onChange={inputType}
          >
            {SELECT_TYPE_INPUT_ITEM.map((option) => {
              return <MenuItem value={option.value}>{option.label}</MenuItem>;
            })}
          </CustomTextInput>
        </div>
        <div className={classes.TextInputMargin}>
          <CustomTextInput
            label={"値段"}
            fullWidth={true}
            value={price}
            onChange={inputPrice}
          />
        </div>
        <div className={classes.TextInputMargin}>
          <CustomTextInput
            label={"在庫"}
            fullWidth={true}
            value={stock}
            select={true}
            onChange={inputStock}
          >
            {SELECT_STOCK_INPUT_ITEM.map((option) => {
              return <MenuItem value={option.value}>{option.label}</MenuItem>;
            })}
          </CustomTextInput>
        </div>
        <div className={classes.TextInputMargin}>
          <CustomTextInput
            label={"詳細"}
            fullWidth={true}
            value={detail}
            onChange={inputDetail}
            multiline={true}
            required={true}
            rows={3}
            select={false}
          />
        </div>
        <div className={classes.ButtonContainer}>
          <CustomSimpleButton
            label="追加する"
            onClick={() =>
              dispatch(saveProduct(name, price, type, detail, stock))
            }
          />
        </div>
      </form>
    </>
  );
};

export default Form;
