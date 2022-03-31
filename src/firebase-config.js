// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHQ9X-TPRE_tXkcAqhi9RS0GYRVy-hsec",
  authDomain: "blog-app-664e7.firebaseapp.com",
  projectId: "blog-app-664e7",
  storageBucket: "blog-app-664e7.appspot.com",
  messagingSenderId: "400246799468",
  appId: "1:400246799468:web:8c7a3075e36cef2875ec49",
  measurementId: "G-SSB8HV2XXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth=getAuth(app);

