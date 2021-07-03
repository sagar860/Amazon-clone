import firebase from "firebase/";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIEP0EMpwdvWLFL4ZMUNY43Aa0nLL_a3o",
    authDomain: "challenge-44338.firebaseapp.com",
    projectId: "challenge-44338",
    storageBucket: "challenge-44338.appspot.com",
    messagingSenderId: "385323172019",
    appId: "1:385323172019:web:9775debfe0751dd5cb30c6",
    measurementId: "G-Z1ZZ3VD6H3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};