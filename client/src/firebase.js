import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOH9q9jOWVXeGI077NH91UiD8d3RpK2yY",
  authDomain: "hackathon-3-2c4c1.firebaseapp.com",
  projectId: "hackathon-3-2c4c1",
  storageBucket: "hackathon-3-2c4c1.appspot.com",
  messagingSenderId: "826772622544",
  appId: "1:826772622544:web:908b3037adb7c69eef62d5",
  measurementId: "G-T4ZMXYM09H"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app);

export { db, auth, storage };
