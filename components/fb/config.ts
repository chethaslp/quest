import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUak_CiEoa_nR3M8cdLUtBCFYghJAlrEU",
  authDomain: "quest-th.firebaseapp.com",
  projectId: "quest-th",
  storageBucket: "quest-th.appspot.com",
  messagingSenderId: "371781335465",
  appId: "1:371781335465:web:dc02d3030dbf3a2ee2ecb8"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
