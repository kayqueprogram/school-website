import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc,collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB376x4XGMwBAJ-n5Ov4It4VRShv6-MCBE",
  authDomain: "omardonatobassani-c3633.firebaseapp.com",
  projectId: "omardonatobassani-c3633",
  storageBucket: "omardonatobassani-c3633.appspot.com",
  messagingSenderId: "679823851464",
  appId: "1:679823851464:web:8ab1dadb7b48044aeb0afd",
  measurementId: "G-8DNJHR1WQ6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

