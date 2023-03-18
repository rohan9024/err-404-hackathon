// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);