import { push } from "connected-react-router";
import { db } from "../../firebase";
import { fetchProductsAction } from "./actions";

const productsRef = db.collection("products");

export const fetchProduct = () => {
  return async (dispatch) => {
    // firestoreのproductの中を"orderBy"メソッドで並び替えをする
    productsRef
      .orderBy("updated_at", "desc")
      .get()
      .then((snapshots) => {
        // 空の配列を作成
        const productList = [];
        snapshots.forEach((snapshot) => {
          const product = snapshot.data();
          // productのデータを送信
          productList.push(product);
        });
        dispatch(fetchProductsAction(productList));
      });
  };
};

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
    // 引数から受け取ったデータをdataに入力
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
