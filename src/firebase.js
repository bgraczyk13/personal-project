import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAqbE4_uq8bVea0bSH_TOfsIRhbw0er8YI",
    authDomain: "clone-17eb9.firebaseapp.com",
    projectId: "clone-17eb9",
    storageBucket: "clone-17eb9.appspot.com",
    messagingSenderId: "549098500788",
    appId: "1:549098500788:web:8ed49c9dfc3549c8121de1",
    measurementId: "G-KVJHGD4VCR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };