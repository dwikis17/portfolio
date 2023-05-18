import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABX8iJuj9T8WimX5G2oKnNtNe9nZScKEQ",
  authDomain: "portfolio-6f30e.firebaseapp.com",
  projectId: "portfolio-6f30e",
  storageBucket: "portfolio-6f30e.appspot.com",
  messagingSenderId: "380614377307",
  appId: "1:380614377307:web:088f6972e7ef36b6cf247e",
  measurementId: "G-QTJ2BCYN0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

