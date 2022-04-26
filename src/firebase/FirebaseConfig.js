// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getDatabase} from "firebase/database"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4dIcCnPIh02IQXWVEQ2ldDyyMqYhSPpI",
  authDomain: "mzansi-sports.firebaseapp.com",
  projectId: "mzansi-sports",
  storageBucket: "mzansi-sports.appspot.com",
  messagingSenderId: "102767321292",
  appId: "1:102767321292:web:46cd167c773971d6a82269"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP)
export const FIREBASE_REALTIME_DB = getDatabase(FIREBASE_APP)
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP)