// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// import { initializeApp } from 'firebase/app';



const firebaseConfig = {
    apiKey: "AIzaSyARvRy8ydpGzfn2eq2WUwiPOirnExt2LuU",
    authDomain: "netflix-clone-749f0.firebaseapp.com",
    projectId: "netflix-clone-749f0",
    storageBucket: "netflix-clone-749f0.appspot.com",
    messagingSenderId: "480714465259",
    appId: "1:480714465259:web:692fe6f7b55459dbea83ae",
    measurementId: "G-H4996P2D2M"
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {auth}
  export default db ;