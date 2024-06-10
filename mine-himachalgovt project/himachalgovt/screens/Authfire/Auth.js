// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6LybhAhUU79F_VQgldSKXj7_VkaeFprk",
  authDomain: "himachalgovt-b31d4.firebaseapp.com",
  projectId: "himachalgovt-b31d4",
  storageBucket: "himachalgovt-b31d4.appspot.com",
  messagingSenderId: "804469977767",
  appId: "1:804469977767:web:7c87cf783588a3402c2182",
  measurementId: "G-3MKRXYNZ18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);