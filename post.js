// Firestore-firebase connection
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

import { getFirestore, collection, addDoc, getDocs, query, where, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyCy3touPHwSykuxsyX6o9dOEMzCH_ur1_c",
  authDomain: "opportunity-hub-878c4.firebaseapp.com",
  projectId: "opportunity-hub-878c4",
  storageBucket: "opportunity-hub-878c4.appspot.com",
  messagingSenderId: "112158870984",
  appId: "1:112158870984:web:69a433a3225161ee1fc4fd",
  measurementId: "G-PK7QGYGW0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

