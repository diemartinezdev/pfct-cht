// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByozkou5FlMJHK9Smijx-Gn_3JpvgoRHA",
  authDomain: "perfect-cht.firebaseapp.com",
  projectId: "perfect-cht",
  storageBucket: "perfect-cht.appspot.com",
  messagingSenderId: "782588640349",
  appId: "1:782588640349:web:343b4156483d7e8df8a1b4",
  measurementId: "G-94Z18NCGCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);