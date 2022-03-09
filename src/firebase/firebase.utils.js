import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBIcrJir6pa5-7hPrDk9oxdP-ZSgBJBYTE",
    authDomain: "crwn-db-e12b7.firebaseapp.com",
    projectId: "crwn-db-e12b7",
    storageBucket: "crwn-db-e12b7.appspot.com",
    messagingSenderId: "286240375427",
    appId: "1:286240375427:web:fb79f4056dff39b8c391b6",
    measurementId: "G-XWQLGPY211"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.error('error creating user', error.message);
        }

    }
    return userRef;


}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google Sign in Provider

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;


