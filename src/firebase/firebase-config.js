import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXVfSLQ7uCbU_NFgEdC3go_20uAGCqJnk",
    authDomain: "react-apps-learning-361b0.firebaseapp.com",
    projectId: "react-apps-learning-361b0",
    storageBucket: "react-apps-learning-361b0.appspot.com",
    messagingSenderId: "799019611136",
    appId: "1:799019611136:web:31f65ec076e5dfc19f54e5"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}
