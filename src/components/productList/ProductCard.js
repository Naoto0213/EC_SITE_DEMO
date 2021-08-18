import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/product/operation";

const useStyles = makeStyles({
  root: {
    minWidth: "245px",
    margin: "8px 16px",
  },
  media: {
    height: "300px",
  },
  typoBold: {
    fontWeight: "bold",
  },
});

const ProductCard = (props) => {
  const product = props.product;
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.images[0].path}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className={classes.typoBold}>{product.name}</Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.typoBold}
            >
              値段:{product.price} <br />
              在庫:{product.stock}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              dispatch(push(`product/edit/${product.id}`));
            }}
          >
            編集
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              dispatch(deleteProduct(product.id));
            }}
          >
            削除
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
