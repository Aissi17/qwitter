import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "API KEY",
  authDomain: "YOURDOMAIN.firebaseapp.com",
  projectId: "ID",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
}

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default db 