import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwPQWt0zxe5Oub4v42DQjxZe7GbkzdNFM",
  authDomain: "auth2-57073.firebaseapp.com",
  projectId: "auth2-57073",
  storageBucket: "auth2-57073.appspot.com",
  messagingSenderId: "45430366227",
  appId: "1:45430366227:web:e6db4f446e55d843e1dfe6",
  measurementId: "G-L6GC24TQFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


