// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKE,
  authDomain: import.meta.env.VITE_AUTHDOMAI,
  projectId: import.meta.env.VITE_PROJECTI,
  storageBucket: import.meta.env.VITE_STORAGEBUCKE,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERI,
  appId: import.meta.env.VITE_APPI
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;