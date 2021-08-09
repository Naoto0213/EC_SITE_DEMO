import { push } from "connected-react-router";
import { db } from "../../firebase";

const productsRef = db.collection("products");

export const saveProduct = (id, images, name, price, type, stock, detail) => {
  return async (dispatch) => {
    if (
      images === "" ||
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
      images: images,
      name: name,
      price: price,
      type: type,
      stock: stock,
      detail: detail,
    };

    // product/editの時だけこの処理を回す
    if (id === "") {
      const ref = productsRef.doc();
      const id = ref.id;
      data.id = id;
    }

    // 商品情報を更新
    return productsRef
      .doc(id)
      .set(data, { merge: true })
      .then(() => {
        dispatch(push("/"));
      });
  };
};
