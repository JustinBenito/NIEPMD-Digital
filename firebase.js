// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbHErivTTt2_TrlYl9s_i_skXv5oBbCX8",
  authDomain: "niepmd-e41b9.firebaseapp.com",
  projectId: "niepmd-e41b9",
  storageBucket: "niepmd-e41b9.appspot.com",
  messagingSenderId: "124419308685",
  appId: "1:124419308685:web:076a282995e914d1b6f6c4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db=getFirestore();
export const auth=getAuth();