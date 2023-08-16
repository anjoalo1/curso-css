const asideLeft = document.getElementById('aside-left');
const botonBurger = document.getElementById('burger-icon');
const containerMain = document.getElementById('container-page-main');
const pagemain = document.getElementById('container-main');
const imgclick = document.getElementsByTagName('img');
const modal = document.getElementById('modal');
const imagemodal = document.getElementById('image-modal');
const closemodal = document.getElementById('close-modal');

const div = document.createElement('div');

 containerMain.addEventListener('click', (e)=>{
    if(e.target.hasAttribute('src')){
        let mysrce= e.target.getAttribute("src");
        imagemodal.setAttribute('src', mysrce);
        modal.classList.replace('modal', 'modal-visible')
    }
})

closemodal.addEventListener('click', ()=>{
    modal.classList.replace('modal-visible', 'modal');
})


botonBurger.addEventListener('click', ()=>{
    
    if((asideLeft.classList)=='aside-left'){
        asideLeft.classList.replace('aside-left', 'remove-aside-left')
        containerMain.classList.replace('container-page-main', 'add-container-page-main')
        pagemain.classList.replace('container-main','add-container-main')
        botonBurger.style.transform="rotate(90deg)"
    }
    else{
        asideLeft.classList.replace('remove-aside-left', 'aside-left' )
        containerMain.classList.replace('add-container-page-main', 'container-page-main')
        pagemain.classList.replace('add-container-main', 'container-main')
        botonBurger.style.transform="rotate(0deg)"
    }
});


