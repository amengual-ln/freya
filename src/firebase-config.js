import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDSClnId3HUiKLXcC9Dp5O6JuHMzVz22iw",
  authDomain: "freya-42.firebaseapp.com",
  projectId: "freya-42",
  storageBucket: "freya-42.appspot.com",
  messagingSenderId: "699910490921",
  appId: "1:699910490921:web:066a52e87dd0dce463c538"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
