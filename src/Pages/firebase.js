// src/Pages/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDw0HnZ04gY5IZHGR-Sgj53m6nZMVP0aJE",
  authDomain: "techtoves-1b740.firebaseapp.com",
  projectId: "techtoves-1b740",
  storageBucket: "techtoves-1b740.appspot.com",
  messagingSenderId: "278660089672",
  appId: "1:278660089672:web:8ccb69542cb668f686957d",
  measurementId: "G-X4K2XY37QQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
const analytics = getAnalytics(app);