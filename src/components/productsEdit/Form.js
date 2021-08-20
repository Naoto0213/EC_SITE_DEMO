import React, { useState, useCallback, useEffect } from "react";
import { makeStyles, MenuItem } from "@material-ui/core";
import { useDispatch } from "react-redux";
import CustomSimpleButton from "../ui/atoms/CustomSimpleButton";
import CustomTextInput from "../ui/atoms/CustomTextInput";
import {
  SELECT_SERIES_INPUT_ITEM,
  SELECT_STOCK_INPUT_ITEM,
  SELECT_TYPE_INPUT_ITEM,
} from "../../config/selectInputItem";
import { saveProduct } from "../../redux/product/operation";
import ImageArea from "./ImageArea";
import { db } from "../../firebase";

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
  const [series, setSeries] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [stock, setStock] = useState("");
  const [amazon, setAmazon] = useState("");
  const [detail, setDetail] = useState("");
  const [images, setImages] = useState("");

  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const inputSeries = useCallback(
    (event) => {
      setSeries(event.target.value);
    },
    [setSeries]
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

  const inputAmazon = useCallback(
    (event) => {
      setAmazon(event.target.value);
    },
    [setAmazon]
  );

  const inputDetail = useCallback(
    (event) => {
      setDetail(event.target.value);
    },
    [setDetail]
  );

  let id = window.location.pathname.split("/product/edit")[1];

  if (id !== "") {
    id = id.split("/")[1];
  }

  useEffect(() => {
    if (id !== "") {
      // firestoreのproductsからidをgetする
      db.collection("products")
        .doc(id)
        .get()
        .then((snapshot) => {
          // dataの内容をsetStateに代入
          const data = snapshot.data();
          setImages(data.images);
          setSeries(data.series);
          setName(data.name);
          setPrice(data.price);
          setType(data.type);
          setStock(data.stock);
          setAmazon(data.amazon);
          setDetail(data.detail);
        });
    }
  }, [id]);

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
            label={"シリーズ"}
            fullWidth={true}
            value={series}
            select={true}
            onChange={inputSeries}
          >
            {SELECT_SERIES_INPUT_ITEM.map((option, index) => {
              return (
                <MenuItem value={option.value} key={index}>
                  {option.label}
                </MenuItem>
              );
            })}
          </CustomTextInput>
        </div>
        <div className={classes.TextInputMargin}>
          <CustomTextInput
            label={"種類"}
            fullWidth={true}
            value={type}
            select={true}
            onChange={inputType}
          >
            {SELECT_TYPE_INPUT_ITEM.map((option, index) => {
              return (
                <MenuItem value={option.value} key={index}>
                  {option.label}
                </MenuItem>
              );
            })}
          </CustomTextInput>
        </div>
        <div className={classes.TextInputMargin}>
          <CustomTextInput
            label={"定価価格"}
            fullWidth={true}
            value={price}
            onChange={inputPrice}
            type="number"
          />
        </div>
        <div className={classes.TextInputMargin}>
          <CustomTextInput
            label={"在庫(Amazon)"}
            fullWidth={true}
            value={stock}
            select={true}
            onChange={inputStock}
          >
            {SELECT_STOCK_INPUT_ITEM.map((option, index) => {
              return (
                <MenuItem value={option.value} key={index}>
                  {option.label}
                </MenuItem>
              );
            })}
          </CustomTextInput>
        </div>
        <div className={classes.TextInputMargin}>
          <CustomTextInput
            label={"Amazonリンク"}
            fullWidth={true}
            value={amazon}
            onChange={inputAmazon}
            multiline={false}
            select={false}
          />
        </div>
        <div className={classes.TextInputMargin}>
          <CustomTextInput
            label={"詳細"}
            fullWidth={true}
            value={detail}
            onChange={inputDetail}
            multiline={true}
            rows={9}
            select={false}
          />
        </div>
        <div className={classes.ButtonContainer}>
          <CustomSimpleButton
            label="追加する"
            onClick={() =>
              dispatch(
                saveProduct(
                  id,
                  images,
                  name,
                  series,
                  price,
                  type,
                  stock,
                  amazon,
                  detail
                )
              )
            }
          />
        </div>
      </form>
    </>
  );
};

export default Form;
