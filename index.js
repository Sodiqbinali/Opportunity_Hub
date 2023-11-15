 // Firestore-firebase connection
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

 import { getFirestore, collection, addDoc, getDocs, query, where } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';

 
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

//form data
const fullname = document.querySelector(".signupFullname"),
username = document.querySelector('.signupUsername'),
pass = document.querySelector('.signupPass'),
signinUser = document.querySelector('.signinUser'),
signinPass = document.querySelector('.signinPass'),
conPass = document.querySelector('.signupConPass'),
signinForm = document.querySelector('.signinForm'),
signupForm = document.querySelector('.signupForm'),
signupError = document.querySelector('.signupError'),
signinError = document.querySelector('.signinError');



//main
const formContainer = document.querySelector(".form_container");

// clear signin&signup error
pass.addEventListener('keyup', ()=>{
  signupError.style.display='none';
})

conPass.addEventListener('keyup', ()=>{
  signupError.style.display='none';
})

signinUser.addEventListener('keyup', ()=>{
  signinError.style.display='none';
})

signinPass.addEventListener('keyup', ()=>{
  signinError.style.display='none';
})