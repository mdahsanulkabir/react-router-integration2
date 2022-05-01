// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7zt_xiR9K_hPNVsemY2AWIMvrQIMB5-Y",
  authDomain: "react-firebase-integration2.firebaseapp.com",
  projectId: "react-firebase-integration2",
  storageBucket: "react-firebase-integration2.appspot.com",
  messagingSenderId: "252613483968",
  appId: "1:252613483968:web:7c8d6c937151b23017fc25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;