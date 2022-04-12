import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBnejUGfpppCcqdaJiuIqXuEJlEG7UnzuY",
    authDomain: "fir-reactapp1.firebaseapp.com",
    projectId: "fir-reactapp1",
    storageBucket: "fir-reactapp1.appspot.com",
    messagingSenderId: "522852136606",
    appId: "1:522852136606:web:133912c1d3645eed06ed8f",
    measurementId: "G-7KQMD9GPBC"
  };


  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)