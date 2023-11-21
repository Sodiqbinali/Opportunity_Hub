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

// changing size

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    let fontSize;
    
    size.addEventListener('click', () => {
        removeSizeSelector();
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
        }
        // change the font size
        document.querySelector('html').style.fontSize = fontSize;
    })   
})
// change primary color
const removePalatteSelector = () => {
    colorPalette.forEach(color => {
        color.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        removePalatteSelector();
        color.classList.toggle('active');
        if (color.classList.contains('color-1')){
                primary = 252;
        } else if (color.classList.contains('color-2')){
                primary = 52;
        } else if (color.classList.contains('color-3')){
                primary = 352;
        } else if (color.classList.contains('color-4')){
                primary = 152;
        } else if (color.classList.contains('color-5')){
                primary = 202;
        }
        root.style.setProperty('--primary-color-hue', primary);
    })
})
