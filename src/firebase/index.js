import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyB5cblwGk-NPaxwtxuGcb3GANlD9hwjpbA",
  authDomain: "ecsitedemo-e9fb5.firebaseapp.com",
  projectId: "ecsitedemo-e9fb5",
  storageBucket: "ecsitedemo-e9fb5.appspot.com",
  messagingSenderId: "684585251436",
  appId: "1:684585251436:web:08b9ae17215a7cfc085e49",
  measurementId: "G-9EV07T7TS9",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firebaseStore = firebase.firestore();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();
