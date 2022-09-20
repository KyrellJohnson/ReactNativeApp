import * as firebase from 'firebase/app';
import 'firebase/auth';
import Constants from 'expo-constants';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
    apiKey: Constants.manifest.extra.apiKey,
    authDomain: Constants.manifest.extra.authDomain,
    projectId: Constants.manifest.extra.projectId,
    storageBucket: Constants.manifest.extra.storageBucket,
    messagingSenderId: Constants.manifest.extra.messagingSenderId,
    appId: Constants.manifest.extra.appId,
    measurementId: Constants.manifest.extra.measurementId
};

var app = firebase.initializeApp(firebaseConfig);

var auth = getAuth(app);

var Firebase = {
    auth: auth,
    signInWithEmailAndPassword: signInWithEmailAndPassword,
    createUserWithEmailAndPassword: createUserWithEmailAndPassword
    
}

export default Firebase;