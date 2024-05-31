// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeHjwRpZlQEDa4bP4GRq6_K86CAGtT1zw",
  authDomain: "parking-3693f.firebaseapp.com",
  databaseURL: "https://parking-3693f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "parking-3693f",
  storageBucket: "parking-3693f.appspot.com",
  messagingSenderId: "527166989594",
  appId: "1:527166989594:web:76257dcb29a3dcce2a78a3",
  measurementId: "G-3F989XMD2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

