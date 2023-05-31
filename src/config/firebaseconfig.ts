import firebase from "firebase";
import "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCvSDc38u2m1cnhnKuENjMfgZQ8hQQiOac",
  authDomain: "task-8317c.firebaseapp.com",
  projectId: "task-8317c",
  storageBucket: "task-8317c.appspot.com",
  messagingSenderId: "605625185129",
  appId: "1:605625185129:web:0a07913279b21c3f2883f8"
};

const app = initializeApp(firebaseConfig);
const database = firebase.firestore();

export default database