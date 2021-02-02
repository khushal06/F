import firebase from 'firebase'
require("@firebase/firestore")


var firebaseConfig = {
  apiKey: "AIzaSyBCK_AGJDeULClfZ-2nCnOlucUsHEYHl7s",
  authDomain: "test-941d8.firebaseapp.com",
  databaseURL: "https://test-941d8-default-rtdb.firebaseio.com",
  projectId: "test-941d8",
  storageBucket: "test-941d8.appspot.com",
  messagingSenderId: "81657547238",
  appId: "1:81657547238:web:584e24389737c355112e27",
  measurementId: "G-Q9NF2H6531"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase.firestore()