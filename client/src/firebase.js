// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZwBZRXpLZBfuXNMp0DR9tVZkFv_j2MkI",
  authDomain: "podcast-e21a9.firebaseapp.com",
  projectId: "podcast-e21a9",
  storageBucket: "podcast-e21a9.appspot.com",
  messagingSenderId: "468866806398",
  appId: "1:468866806398:web:ed097b640453c8f01f5e2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;