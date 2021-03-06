import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
    apiKey: "AIzaSyCX-mEubf2uNSZjfH-36Xn5IoPkPbNZAAM",
    authDomain: "bootcamp-e-commerce.firebaseapp.com",
    projectId: "bootcamp-e-commerce",
    storageBucket: "bootcamp-e-commerce.appspot.com",
    messagingSenderId: "607575527265",
    appId: "1:607575527265:web:1c6b4e45c9dda4b9837f20",
    measurementId: "G-G4YNVGYWTV",
};
export const createUserProfileDocument = async (userAuth, data) => {
    if (userAuth) {
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();
        if (!snapShot.exists) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();
            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...data,
                });
            } catch (err) {
                console.log("error -->", err.message);
            }
        }
        return userRef;
    }
};

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    console.log(objectsToAdd);
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();

    objectsToAdd.forEach((o) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, o);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((d) => {
        const { title, items } = d.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: d.id,
            title,
            items,
        };
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
