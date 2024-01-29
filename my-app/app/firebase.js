// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCigbVP-8AkhCvXcBG-MUhI_MVb3su54aY",
  authDomain: "narrowcaster-b4ef8.firebaseapp.com",
  projectId: "narrowcaster-b4ef8",
  storageBucket: "narrowcaster-b4ef8.appspot.com",
  messagingSenderId: "215412552050",
  appId: "1:215412552050:web:16040441093d612cc16deb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
