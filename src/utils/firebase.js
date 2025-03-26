// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjRF6qsO1KmAYTenfjjg-RMNnC-DD4JKQ",
  authDomain: "netflixgpt-dc909.firebaseapp.com",
  projectId: "netflixgpt-dc909",
  storageBucket: "netflixgpt-dc909.firebasestorage.app",
  messagingSenderId: "966549110595",
  appId: "1:966549110595:web:2326df11a63fbf08c6f9f6",
  measurementId: "G-SRRFS6446V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
