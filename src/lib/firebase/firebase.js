// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics"; // Google tutorial recommend that 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbVE15iXq1jI9LCQ0erqwr_DwJwaXMD2Q",
    authDomain: "my-awesome-project-72740.firebaseapp.com",
    projectId: "my-awesome-project-72740",
    storageBucket: "my-awesome-project-72740.appspot.com",
    messagingSenderId: "246633447823",
    appId: "1:246633447823:web:8e9a60d3ad581198c50bfa",
    measurementId: "G-XDLVY72EVN"
  };

// Initialize Firebase
// Gooogle tutorial way:
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Forked way:
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig)
} else {
    firebaseApp = getApp()
    deleteApp(firebaseApp)
    firebaseApp = initializeApp(firebaseConfig)
}

export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)