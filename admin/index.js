import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

 import { getFirestore, collection, deleteDoc, getDocs, query, doc, where, updateDoc } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';

 
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

const feeds = document.querySelector('.feeds');

const openlink = (link)=>{
    window.location.href = link;
}

const addpost = (doc, id)=>{
    let post = `
    <div class="feed" id="${id}">
    <div class="head">
        <div class="user">
            <div class="info">
                <h3>${doc.fullname}</h3>
                <small>${doc.timestamp.toDate()}</small>
            </div>
        </div>    
    </div>
    <div class="post">
        <a href='${doc.link}'>
            ${doc.link}
        </a><br><br><br>
        <div class="desc">
         ${doc.desc}
        </div>
    </div>
    <div id="${id}">
        <button class="approve">Approve</button>
        <button class="delete">Delete</button>
    </div>
    </div>
`
    feeds.innerHTML += post;
}

    const check = query(collection(db, "posts"), where('approved','==',false));
    
   const getPost = async()=>{
     const snapshot = await getDocs(check);    
                snapshot.docs.forEach((doc)=>{
                addpost(doc.data(), doc.id);
            })
        if(snapshot.docs.empty){
            feeds.textContent = "End of Posts";
        }
   }
   getPost();
           
 

    feeds.addEventListener('click', (e)=>{
        if(e.target.classList.contains('delete')){
            const id = e.target.parentElement.getAttribute('id');
                const deletePost = async() =>{
              await deleteDoc(doc(db, "posts", id)).then(()=>{alert('Post deleted, Refreash this Page to see Change');});
                }
                deletePost();
                
                
                
        }else if(e.target.classList.contains('approve')){
            const id = e.target.parentElement.getAttribute('id');
                const approvePost = async() =>{
                    await updateDoc(doc(db, "posts", id), {
                        approved: true
                      }).then(()=>{alert('Post Approved');});
                }
                approvePost();
                
        }
    })
