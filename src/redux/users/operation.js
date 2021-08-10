import { push } from "connected-react-router";
import { auth, db } from "../../firebase";
import { signInAction, signOutAction } from "./actions";

export const listenAuthState = () => {
  return async (dispatch) => {
    // onAuthStateChangedで現在ログインしているのか判別
    return auth.onAuthStateChanged((user) => {
      // もしユーザーがあるなら処理を実行
      if (user) {
        const uid = user.uid;

        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(
              // Actionの値を変更
              signInAction({
                isSignedIn: true,
                uid: uid,
                role: data.role,
                username: data.username,
              })
            );
          });
      } else {
        // そうじゃない場合はログインページに向かう
        dispatch(push("/signin"));
      }
    });
  };
};

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    // 全て入力しないと処理を実行させないようにする
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("必須項目があります。");
      return false;
    }
    // passwordが一致しないと登録させないようにする
    if (password !== confirmPassword) {
      alert("パスワードが一致しません。もう一度お試しください。");
      return false;
    }
    // createUserWithEmailAndPasswordで引数にemailとパスワードを入れる
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          const uid = user.uid;

          const userInicialData = {
            email: email,
            role: "customer",
            username: username,
          };

          // dbのuserにuserInicailDataを入力
          db.collection("users")
            .doc(uid)
            .set(userInicialData)
            .then(() => {
              dispatch(push("/"));
            });
        }
      });
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    if (email === "" || password === "") {
      alert("必須項目があります。");
      return false;
    }
    return auth.signInWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;
      if (user) {
        const uid = user.uid;

        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(
              signInAction({
                isSignedIn: true,
                uid: uid,
                role: data.role,
                username: data.username,
              })
            );
            dispatch(push("/"));
          });
      }
    });
  };
};

export const signOut = () => {
  return async (dispatch) => {
    return auth.signOut().then(() => {
      // actionでstateをsignoutにする
      dispatch(signOutAction());
      dispatch(push("/signin"));
    });
  };
};

export const resetPassword = (email) => {
  return async (dispatch) => {
    if (email === "") {
      alert("必須項目があります");
      return false;
    } else {
      auth.sendPasswordResetEmail(email).then(() => {
        alert("パスワードリセットのメールを送信しました");
        dispatch(push("/signin"));
      });
    }
  };
};
