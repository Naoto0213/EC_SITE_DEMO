import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { DETAIL_LIST } from "../../config/detailList";
import BorderTitle from "../ui/atoms/BorderTitle";
import Slider from "../ui/molecules/Slider";
import Button from "@material-ui/core/Button";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import CustomSimpleButton from "../ui/atoms/CustomSimpleButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "1240px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    padding: "5% 8%",

    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
    },
  },
  buttonContainer: {
    display: "flex",
    gap: "0px 16px",
  },
  detailContainer: {
    display: "flex",

    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  detailListContainer: {
    marginLeft: "48px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "16px",
      marginLeft: "0",
    },
  },
  detailText: {
    width: "100%",
    marginBottom: "16px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#0A1931",
    [theme.breakpoints.down("xs")]: {
      width: "450px",
      fontSize: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      fontSize: "16px",
    },
  },
  detailSpanText: {
    fontSize: "16px",
    fontWeight: "normal",
    color: "#0A1931",
  },
}));

const Detail = (props) => {
  const classes = useStyles();
  const product = props.product;
  const images = product.images;
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes.root}>
        <BorderTitle label={product.name} />
        <div className={classes.detailContainer}>
          <Slider path={images} />
          <div className={classes.detailListContainer}>
            {DETAIL_LIST(product).map((items) => (
              <Typography className={classes.detailText}>
                {items.label}
                <span className={classes.detailSpanText}>{items.detail} </span>
              </Typography>
            ))}
            <Typography className={classes.detailText}>
              Amazon:
              {product.amazon ? (
                <a href={product.amazon}>
                  <span className={classes.detailSpanText}>こちら</span>
                </a>
              ) : (
                <span className={classes.detailSpanText}>なし</span>
              )}
            </Typography>
            <div className={classes.buttonContainer}>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={() => {
                  dispatch(push(`/product/edit/${product.id}`));
                }}
              >
                編集
              </Button>
            </div>
          </div>
        </div>
        <BorderTitle label="詳細" />
        <div className={classes.detailContainer}>
          <Typography className={classes.detailText}>
            <span className={classes.detailSpanText}>{product.detail}</span>
          </Typography>
        </div>
        <BorderTitle label="作品一覧" />
        <CustomSimpleButton label={"作品を登録"} />
      </div>
    </>
  );
};

export default Detail;
