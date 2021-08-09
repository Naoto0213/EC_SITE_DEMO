import { push } from "connected-react-router";
import { db } from "../../firebase";

const productsRef = db.collection("products");

export const saveProduct = (name, price, type, stock, detail) => {
  return async (dispatch) => {
    if (
      name === "" ||
      price === "" ||
      type === "" ||
      stock === "" ||
      detail === ""
    ) {
      alert("全て入力してください");
      return false;
    }

    const data = {
      name: name,
      price: price,
      type: type,
      stock: stock,
      detail: detail,
    };

    const ref = productsRef.doc();
    const id = ref.id;
    data.id = id;

    return productsRef
      .doc(id)
      .set(data, { merge: true })
      .then(() => {
        dispatch(push("/"));
      });
  };
};
