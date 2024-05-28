
//theme html
const html = document.getElementsByTagName('html')[0];
const themeSwitch = document.getElementById('theme');
const moon = document.getElementById('bb');

themeSwitch.addEventListener('click', () => {
    html.classList.toggle('nuit');

    if(html.classList.contains('nuit')){
        themeSwitch.innerHTML = '&#9789;';
    }else {
        themeSwitch.innerHTML = '&#9788;';
    }
})

//MENU
const menuHamburger = document.querySelector("#bar")
const navLinks = document.querySelector(".sous-indication")
const mobileNav = document.querySelector("#mobileNav");
let stateNav = true;

const AnimMenu = () =>{
    if(stateNav){
        mobileNav.classList.remove("display_Nav");
        mobileNav.classList.add("hidde_Nav");
    }

    else{
        mobileNav.classList.remove("hidde_Nav");
        mobileNav.classList.add("display_Nav");
    }
};

menuHamburger.addEventListener('click',()=>{
    stateNav = !stateNav;
    AnimMenu();
})


//retour menu
const retour = document.querySelector(".nav_list")
const exit = document.querySelector(".sous-mobile_Nav2")

retour.addEventListener('click',()=>{
    mobileNav.classList.remove("display_Nav");
    mobileNav.classList.add("hidde_Nav");
})

exit.addEventListener('click',()=>{
    mobileNav.classList.remove("display_Nav");
    mobileNav.classList.add("hidde_Nav");
})

//image formation
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

//FORMULAIRE

let nom = document.querySelector("#nom_postnom");
let prenom = document.querySelector("#prenon");
let num_tel = document.querySelector("#num_tel");
let num_parent = document.querySelector("#num_parent");
let adresse = document.querySelector("#adresse");
let formation = document.querySelector("#formtion");



