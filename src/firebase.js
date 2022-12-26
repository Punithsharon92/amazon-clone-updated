// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd8oIvmKYc4YAveKRDbjPbvnWx0KW1LQY",
  authDomain: "clone-b1ff0.firebaseapp.com",
  projectId: "clone-b1ff0",
  storageBucket: "clone-b1ff0.appspot.com",
  messagingSenderId: "210290680759",
  appId: "1:210290680759:web:e9f1b4555841870dd67e32",
  measurementId: "G-4PHSLD8GC2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
