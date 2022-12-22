// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAelCmdZAS12GWe-HKzl2-Bp0Q-UIHGmNE",
  authDomain: "waste-checker.firebaseapp.com",
  projectId: "waste-checker",
  storageBucket: "waste-checker.appspot.com",
  messagingSenderId: "765981280579",
  appId: "1:765981280579:web:c06e20f192fff0432547f6",
  measurementId: "G-V1V0QCZJQ8"
};

// Initialize Firebase
if (!getApps()?.length) {
    initializeApp(firebaseConfig);
}

export const storage = getStorage()
export const auth = getAuth()
export const functions = getFunctions()
export const db = getFirestore()