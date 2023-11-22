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

const creatPost = document.querySelector('.newPost');
const link = document.querySelector("#link");
const linkDesc = document.querySelector("#linkDesc");
const postBtn = document.querySelector(".newPost");
const feeds = document.querySelector('.feeds');

//create new post
const addPost = async (userId,fullname) => {
    try {
        const docRef = await addDoc(collection(db, "posts"), {
          link: link.value,
          desc: linkDesc.value,
          userId,
          fullname,
          approved: false,
          timestamp: serverTimestamp()
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

 //submit new post
postBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    const fullname = localStorage.getItem("fullname");
    addPost(userId, fullname);
    creatPost.style.display = 'none';
    link.value = "";
    linkDesc.value = "";
    alert('Post Successful: Kindly wait for approval');
})

//display all post in feed area
const addpost = (doc)=>{
    let post = `
    <div class="feed">
    <div class="head">
        <div class="user">
            <div class="info">
                <h3>${doc.fullname}</h3>
                <small>${doc.timestamp.toDate()}</small>
            </div>
        </div>    
    </div>
    <div class="post">
        <div class="link">
            ${doc.link}
        </div><br><br><br>
        <div class="desc">
         ${doc.desc}
        </div>
    </div>
    </div>
  `
    feeds.innerHTML += post;
  }

  // to display only approve post
  const check = query(collection(db, "posts"), where('approved','==',true));
  
  async ()=>{
    const snapshot = await getDocs(check);    
    snapshot.docs.forEach((doc)=>{
    addpost(doc.data());
})
  }
