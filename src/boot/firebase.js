import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCxCdNB9nCQseSSljSFy2WtSMd3MFFRNHM",
  authDomain: "qwitter-7b946.firebaseapp.com",
  projectId: "qwitter-7b946",
  storageBucket: "qwitter-7b946.appspot.com",
  messagingSenderId: "92589642377",
  appId: "1:92589642377:web:d49cf05128cdbf6d93ec58"
}

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default db 