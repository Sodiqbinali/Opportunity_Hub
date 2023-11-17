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

const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signup = document.querySelector("#signup"),
  login = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

  formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
      let getPwInput = icon.parentElement.querySelector("input");
      if (getPwInput.type === "password") {
        getPwInput.type = "text";
        icon.classList.replace("uil-eye-slash", "uil-eye");
      } else {
        getPwInput.type = "password";
        icon.classList.replace("uil-eye", "uil-eye-slash");
      }
    });
  });
  
  signup.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
  });
  login.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
  });

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

//sign up function

const sign_up = async (fullname,username,password) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        fullname,
        username,
        password,  
      })
      .then(()=>{
      alert('Signup done wait few minutes then sign in');
      formContainer.classList.remove("active");
      })
    } catch (e) {
      console.error("Error signing up: ", e);
    }
  }

  //sign in function
  const sign_in = async (username, password) =>{
    try {
      const check = query(collection(db, "users"), where('username','==',username), where('password', '==', password));
     const querySnapshot = await getDocs(check);
    
      if(!querySnapshot.empty){
        querySnapshot.forEach((doc) => {
          localStorage.setItem("fullname", doc.data().fullname);
          localStorage.setItem("userId", doc.id);
        });
        window.location.href = "./main.html";
      } else{
          signinError.style.display = 'block';
      }
    } catch (error) {
      console.log("Error can't signin", error);
    }
  }
  
  