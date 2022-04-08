// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3VnuZi7Iu_UjQ6c24vqSBescSE4VQgUw",
    authDomain: "email-password-auth-aa2ba.firebaseapp.com",
    projectId: "email-password-auth-aa2ba",
    storageBucket: "email-password-auth-aa2ba.appspot.com",
    messagingSenderId: "1002680032233",
    appId: "1:1002680032233:web:bc911c6f76eda528084978"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app