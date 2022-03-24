// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiZz65ZuP-eDSJglkgFjLyfmUI3RkCIc0",
  authDomain: "login-d4dde.firebaseapp.com",
  databaseURL: "https://login-d4dde-default-rtdb.firebaseio.com",
  projectId: "login-d4dde",
  storageBucket: "login-d4dde.appspot.com",
  messagingSenderId: "99120856004",
  appId: "1:99120856004:web:054b2d534dcab6d5c68291",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
