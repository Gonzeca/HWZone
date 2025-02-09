import React from 'react';
import ReactDOM from 'react-dom/client';
import HWZone from './HWZone';
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCfhaMis5QAVTJctNvJxH1k7TirPaQJv-Y",
  authDomain: "hwzone-a3a23.firebaseapp.com",
  projectId: "hwzone-a3a23",
  storageBucket: "hwzone-a3a23.firebasestorage.app",
  messagingSenderId: "935369431549",
  appId: "1:935369431549:web:6dbcdfd3406799c98e6194",
  measurementId: "G-4NCNFWS2VH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HWZone />
  </React.StrictMode>
);