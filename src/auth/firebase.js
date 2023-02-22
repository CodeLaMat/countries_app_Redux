import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBs2l0IfULMjU-3KONCNeqgqwCp8n0jl_A",
  authDomain: "countries-7a37f.firebaseapp.com",
  projectId: "countries-7a37f",
  storageBucket: "countries-7a37f.appspot.com",
  messagingSenderId: "132253502702",
  appId: "1:132253502702:web:fb8e86af6dfb4db9c6b7ff",
  measurementId: "G-2BCDFFG9EK",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

const registeredWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "users"), {
      uid: user.id,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registeredWithEmailAndPassword,
  logout,
};
