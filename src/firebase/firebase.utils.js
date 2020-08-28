import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyChRFTlh-vHos2GMkFCRtFgLEsUB140zi4",
    authDomain: "crwn-db-16c55.firebaseapp.com",
    databaseURL: "https://crwn-db-16c55.firebaseio.com",
    projectId: "crwn-db-16c55",
    storageBucket: "crwn-db-16c55.appspot.com",
    messagingSenderId: "1085891035545",
    appId: "1:1085891035545:web:2f5e98f2d9749d74731308",
    measurementId: "G-72QJWSB8H5"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

