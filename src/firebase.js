// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWmUDV04QkLnKwOItzXJYa7V_73HM7PZA",
  authDomain: "pensieve-f3da2.firebaseapp.com",
  projectId: "pensieve-f3da2",
  storageBucket: "pensieve-f3da2.appspot.com",
  messagingSenderId: "890886075531",
  appId: "1:890886075531:web:de40dbf74ec7ade877108e",
  measurementId: "G-XB911JHZ8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);