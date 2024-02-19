import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyApyRkBf7kbc4MTvM3Evhp0ocOq6XnBIKI",
  authDomain: "sphurti-2024.firebaseapp.com",
  projectId: "sphurti-2024",
  storageBucket: "sphurti-2024.appspot.com",
  messagingSenderId: "244261493366",
  appId: "1:244261493366:web:51b0fe842dcfeee7089d57"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {app, db};