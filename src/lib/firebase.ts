import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMSZADxN5XczVLBUXUN2HhORIZ-8-3Jds",
  authDomain: "cwrsocialmedia-f2575.firebaseapp.com",
  projectId: "cwrsocialmedia-f2575",
  storageBucket: "cwrsocialmedia-f2575.appspot.com",
  messagingSenderId: "675603979768",
  appId: "1:675603979768:web:363013339e800d8c76ca0d"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
export const db = getFirestore(app)
export const bucket = getStorage(app)




