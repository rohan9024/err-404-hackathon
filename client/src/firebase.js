import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxm4UG08auxmhXRDkIYD2wCAyfJpg_EhY",
  authDomain: "error-63c7b.firebaseapp.com",
  projectId: "error-63c7b",
  storageBucket: "error-63c7b.appspot.com",
  messagingSenderId: "795923421104",
  appId: "1:795923421104:web:728570780f08f7bf202875",
  measurementId: "G-Q9K097BG7M"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app);

export { db, auth, storage };
