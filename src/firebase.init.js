// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXpQ9B5ro7Yljdr34Q48uBAuyl44IrPNU",
  authDomain: "medico-healer.firebaseapp.com",
  projectId: "medico-healer",
  storageBucket: "medico-healer.appspot.com",
  messagingSenderId: "1033748900753",
  appId: "1:1033748900753:web:dd7b8a562fd393e74a4830",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;