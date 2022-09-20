import * as firebase from 'firebase/app';
import 'firebase/auth';
import Constants from 'expo-constants';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import { initializeFirestore } from 'firebase/firestore'


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

const app = firebase.initializeApp(firebaseConfig);

const auth = initializeAuth(app, {persistence: getReactNativePersistence(AsyncStorage)});
const firestore = initializeFirestore(app, {persistence: getReactNativePersistence(AsyncStorage)});

var Firebase = {
    auth: auth,
    firestore: firestore,
    signInWithEmailAndPassword: signInWithEmailAndPassword,
    createUserWithEmailAndPassword: createUserWithEmailAndPassword
    
}

export default Firebase;