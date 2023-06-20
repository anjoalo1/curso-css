

const asideLeft = document.getElementById('aside-left');
const botonBurger = document.getElementById('burger-icon');
const containerMain = document.getElementById('container-page-main');
const pagemain = document.getElementById('container-main');


botonBurger.addEventListener('click', ()=>{
    
    if((asideLeft.classList)=='aside-left'){
        console.log("tiene la clase aside-left");
        asideLeft.classList.replace('aside-left', 'remove-aside-left')
        containerMain.classList.replace('container-page-main', 'add-container-page-main')
        pagemain.classList.replace('container-main','add-container-main')
        botonBurger.style.transform="rotate(90deg)"
    }
    else{
        console.log("no tinene la clase");
        asideLeft.classList.replace('remove-aside-left', 'aside-left' )
        containerMain.classList.replace('add-container-page-main', 'container-page-main')
        pagemain.classList.replace('add-container-main', 'container-main')
        botonBurger.style.transform="rotate(0deg)"
    }
});


/* botonBurger.addEventListener('click', ()=>{

    console.log(asideLeft.contains('aside-left'));
    if(asideLeft.contains('aside-left')==true){

    }
}) */