// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuEML7-q593GPnlcMW5zjriPS34RSuHRI",
  authDomain: "fir-auth-bcd0a.firebaseapp.com",
  projectId: "fir-auth-bcd0a",
  storageBucket: "fir-auth-bcd0a.appspot.com",
  messagingSenderId: "999977353880",
  appId: "1:999977353880:web:286051cd147db6926b46ed",
  measurementId: "G-BPFZZWT5ZC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
