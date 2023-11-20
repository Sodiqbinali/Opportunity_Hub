const theme = document.querySelector('.theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color span');
var root = document.querySelector(':root');
const priColor = document.querySelectorAll('.choose-bg div');
const createBtn = document.querySelector('.create .btn');
const creatPost = document.querySelector('.newPost');
const signout = document.querySelector('.signoutBtn');

//Create Post
createBtn.addEventListener('click', () => {
    creatPost.style.display = 'flex';
})

//Signout
signout.addEventListener('click',()=>{
    localStorage.removeItem("fullname");
    localStorage.removeItem("Userid");
    window.location.href = "./index.html";
})
// close Modal
themeModal.addEventListener('click', e =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = "none";
    }
})
//open Modal
theme.addEventListener('click', () => {
    themeModal.style.display = 'grid';
});
