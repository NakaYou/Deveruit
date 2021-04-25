import firebase from "firebase/app";
import "firebase/auth";

var provider = new firebase.auth.GithubAuthProvider();
(async () => {
  const res  = await firebase.auth().getRedirectResult()
})