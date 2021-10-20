// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
     apiKey: "AIzaSyCgomrpwigPBdBwgN9xNBXO7xuavhNuDe0",
     authDomain: "farmer-buddy-system.firebaseapp.com",
     projectId: "farmer-buddy-system",
     storageBucket: "farmer-buddy-system.appspot.com",
     messagingSenderId: "767907510619",
     appId: "1:767907510619:web:9f0b34fbd70095e5d3427e",
     measurementId: "G-NPQ5MTH3QC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };