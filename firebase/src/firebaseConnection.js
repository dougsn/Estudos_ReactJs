// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB0aOXRhG8nBq_AK1FOH6xc9d7GFXdwBGM",
  authDomain: "curso-9cd79.firebaseapp.com",
  projectId: "curso-9cd79",
  storageBucket: "curso-9cd79.appspot.com",
  messagingSenderId: "1011585869389",
  appId: "1:1011585869389:web:7c047bdc92d3964fe35e04",
  measurementId: "G-WP8Y0KZT2Y"
};

// Initialize Firebase
if(!firebase){
    firebase.initializeApp(firebaseConfig);
}



export default firebase;
