 // Firestore-firebase connection
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

 import { getFirestore, collection, addDoc, getDocs, query, where } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';

 
 const firebaseConfig = {
    apiKey: "AIzaSyA91MjIYNNAiImaEMawINNxhqxg1feo2FQ",
    authDomain: "opportunityhub-2c5a4.firebaseapp.com",
    projectId: "opportunityhub-2c5a4",
    storageBucket: "opportunityhub-2c5a4.appspot.com",
    messagingSenderId: "981392837619",
    appId: "1:981392837619:web:0a3db889886bf14e70e086",
    measurementId: "G-XDFGY5R3CC"
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

  //function call
  
  signinForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    sign_in(signinUser.value, signinPass.value);
  })
  
  signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (pass.value === conPass.value){
      sign_up(fullname.value,username.value,pass.value);
      signupForm.reset();
    } else {
      signupError.style.display = 'block';
    }
  })
  
  