import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app= firebase.initializeApp({
        apiKey: "AIzaSyBu1tK3_pJAhUmLfcMyb1BenzhpmBmFqGk",
        authDomain: "e-commerce-ilgusto.firebaseapp.com",
        databaseURL: "https://e-commerce-ilgusto.firebaseio.com",
        projectId: "e-commerce-ilgusto",
        storageBucket: "e-commerce-ilgusto.appspot.com",
        messagingSenderId: "132699142828",
        appId: "1:132699142828:web:7de94224e392f116d3bd09"
}) 

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}