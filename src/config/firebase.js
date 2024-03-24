// Import the functions you need from the SDKs you need:
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use (Check link below for more info).
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration.
// For Firebase JS SDK v7.20.0 and later, measurementId is optional.
const firebaseConfig = {
  apiKey: "AIzaSyDgskMzt-xsHwiOlengm8nmc0mjJewTEks",
  authDomain: "portugo-c7f05.firebaseapp.com",
  databaseURL: "https://portugo-c7f05-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portugo-c7f05",
  storageBucket: "portugo-c7f05.appspot.com",
  messagingSenderId: "455303617152",
  appId: "1:455303617152:web:af1bb8d51e1ebc4bdae465",
  measurementId: "G-HXCG8QQPM5"
};

// Initializing Firebase:
const app = initializeApp(firebaseConfig); // Connect this project with Firebase's products.
const database = getDatabase(app); // Connect this project to the Realtime Database service.
const analytics = getAnalytics(app); // Connect this project with Google Analytics.

// Exporting Firebase variables:
export { app, database };