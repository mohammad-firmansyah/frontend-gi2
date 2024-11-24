// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3rrYZ7pFwk8U5i3NhaUqsNwiQNI84JkQ",
  authDomain: "eco-route-green-journey.firebaseapp.com",
  projectId: "eco-route-green-journey",
  storageBucket: "eco-route-green-journey.appspot.com",
  messagingSenderId: "122385009688",
  appId: "1:122385009688:web:65ad54e518cd7424f5476d",
  measurementId: "G-NH3B0D7T9Z"
};

// Initialize Firebase
const app2 = initializeApp(firebaseConfig);
const analytics = getAnalytics(app2);

export {app2,firebaseConfig,analytics};