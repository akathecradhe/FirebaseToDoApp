import firebase from "firebase/app";
import "firebase/firestore";



// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDn39k2C4HAp6-mo1r_Vi951X_aFv37pnU",

  authDomain: "to-do-app-5e869.firebaseapp.com",

  projectId: "to-do-app-5e869",

  storageBucket: "to-do-app-5e869.appspot.com",

  messagingSenderId: "703085203732",

  appId: "1:703085203732:web:d7407ba154a9b2af197201",

  measurementId: "G-LPSE7D3M5J"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();



export {db};
