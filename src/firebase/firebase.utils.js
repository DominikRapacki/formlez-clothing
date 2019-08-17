import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC-D8m57EQIZHh9CuK19enoOX_Ax7p2ggk",
  authDomain: "formlez-db.firebaseapp.com",
  databaseURL: "https://formlez-db.firebaseio.com",
  projectId: "formlez-db",
  storageBucket: "",
  messagingSenderId: "1052570986640",
  appId: "1:1052570986640:web:4681780eb2f4cf74"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
