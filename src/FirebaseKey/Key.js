// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPX-N9GV_dCh9ysFgu7DDp_mE_8zhBKWY",
  authDomain: "photo-grapier.firebaseapp.com",
  projectId: "photo-grapier",
  storageBucket: "photo-grapier.appspot.com",
  messagingSenderId: "864419493042",
  appId: "1:864419493042:web:a4fb0b3f6b46866fbc85ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth