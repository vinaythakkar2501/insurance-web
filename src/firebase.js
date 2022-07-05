import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import { getFirestore } from 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyClGDTbBuZLs0PeAsQbXjDmULvrL628T_E",
  authDomain: "insurance-project-1c37c.firebaseapp.com",
  projectId: "insurance-project-1c37c",
  storageBucket: "insurance-project-1c37c.appspot.com",
  messagingSenderId: "835226519991",
  appId: "1:835226519991:web:62b89017b1a35900c08032"
});

export const auth = app.auth(); 
export const gprovider = new firebase.auth.GoogleAuthProvider();
export const db = getFirestore(app)
export default app;