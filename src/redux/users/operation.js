import { push } from "connected-react-router";
import { auth, db, FirebaseTimeStamp } from "../../firebase";
import { signInAction } from "./actions";

export const signIn = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      const url = "https://api.github.com/users/Naoto0213";

      const response = await fetch(url)
        .then((res) => res.json())
        .catch(() => null);

      const username = response.login;
      const html_url = response.html_url;
      const uid = response.id;

      dispatch(
        signInAction({
          isSignedIn: true,
          uid: uid,
          username: username,
          html_url: html_url,
        })
      );
      dispatch(push("/"));
      console.log(response.html_url);
    }
  };
};

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("必須項目があります。");
      return false;
    }
    if (password !== confirmPassword) {
      alert("パスワードが一致しません。もう一度お試しください。");
      return false;
    }
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          const uid = user.uid;
          const timestamp = FirebaseTimeStamp.now();

          const userInicialData = {
            crated_at: timestamp,
            email: email,
            role: "customer",
            update_at: timestamp,
            username: username,
          };

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
