import { push } from "connected-react-router";
import { db } from "../../firebase";
import { deleteProductAction, fetchProductsAction } from "./actions";

// firestoreのproductsを記述
const productsRef = db.collection("products");

export const fetchProducts = () => {
  return async (dispatch) => {
    // firestoreのproductの中を"orderBy"メソッドで並び替えをする
    productsRef.get().then((snapshots) => {
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
      id = ref.id;
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

export const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    // productの中の名前(id)をdelete関数で削除して、stateを初期に戻す
    productsRef
      .doc(id)
      .delete()
      .then(() => {
        const prevProducts = getState().products.list;
        const nextProducts = prevProducts.filter(
          (product) => product.id !== id
        );
        dispatch(deleteProductAction(nextProducts));
        window.location.reload();
      });
  };
};
