import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyDuDvjT0PxsHVJ-6uZQFEZ3L6klWZlrJ64",
        authDomain: "proyecto-de-react.firebaseapp.com",
        projectId: "proyecto-de-react",
        storageBucket: "proyecto-de-react.appspot.com",
        messagingSenderId: "295559503796",
        appId: "1:295559503796:web:ea46daed9b421c0bed1ce1",
        measurementId: "G-E96CM5YXLR"
    }
);

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}
