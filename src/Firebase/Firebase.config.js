// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEV1K1tAS7XRN7tTK6HFbnm-vW-otLXpE",
  authDomain: "hobyhub-by-ratul.firebaseapp.com",
  projectId: "hobyhub-by-ratul",
  storageBucket: "hobyhub-by-ratul.firebasestorage.app",
  messagingSenderId: "129255697462",
  appId: "1:129255697462:web:5334386ec1113e5f1cfc97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);