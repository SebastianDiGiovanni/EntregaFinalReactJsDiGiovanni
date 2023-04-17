import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAG6DwQUY2Bf9Utn_XiLoankhzLADdAqEc",
    authDomain: "entregafinalreactjscoderhouse.firebaseapp.com",
    projectId: "entregafinalreactjscoderhouse",
    storageBucket: "entregafinalreactjscoderhouse.appspot.com",
    messagingSenderId: "471183867181",
    appId: "1:471183867181:web:71ea71c0986ce7cb6327a4"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
