import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAmZ98HpZGirpwYQ1B5HJ5odyg4FYgdqUI",
  authDomain: "nivikaasperapp.firebaseapp.com",
  databaseURL: "https://nivikaasperapp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nivikaasperapp",
  storageBucket: "nivikaasperapp.appspot.com",
  messagingSenderId: "320888211353",
  appId: "1:320888211353:web:9df214fa8417899da17508",
  measurementId: "G-CYX1ERGEBJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
