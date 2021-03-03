import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
const config = {
    apiKey: "AIzaSyCX-mEubf2uNSZjfH-36Xn5IoPkPbNZAAM",
    authDomain: "bootcamp-e-commerce.firebaseapp.com",
    projectId: "bootcamp-e-commerce",
    storageBucket: "bootcamp-e-commerce.appspot.com",
    messagingSenderId: "607575527265",
    appId: "1:607575527265:web:1c6b4e45c9dda4b9837f20",
    measurementId: "G-G4YNVGYWTV"
};
firebase.initializeApp(config);

export const auth = firebase.auth();

export const firesotre = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;