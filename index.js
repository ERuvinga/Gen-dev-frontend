
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

//FORMULAIRE

let nom = document.querySelector("#nom_postnom");
let prenom = document.querySelector("#prenom");
let num_tel = document.querySelector("#num_tel");
let num_parent = document.querySelector("#num_parent");
let adresse = document.querySelector("#adresse");
let formation = document.querySelector("#formation");
const BtnSend = document.querySelector("#send");

//Fetching datas

let AllDatas ={
    name:"",
    postName:"",
    lastName:"",
    telStudent:"",
    telTiteur:"",
    adress:"",
    fromationType:"PCB & Proteus (25$)"
};

const Url_to_Api = "https://gen-dev-api.onrender.com";


//Handles functions
nom.addEventListener("change", (event)=> {
    AllDatas = {
        ...AllDatas,
        name:event.target.value.split(" ")[0],
        postName:event.target.value.split(" ")[1]
    }
})

prenom.addEventListener("change", (event)=> {
    AllDatas = {
        ...AllDatas,
        lastName:event.target.value,
    }
})

num_tel.addEventListener("change", (event)=> {
    AllDatas = {
        ...AllDatas,
        telStudent:event.target.value,
    }
})

num_parent.addEventListener("change", (event)=> {
    AllDatas = {
        ...AllDatas,
        telTiteur:event.target.value,
    }
})

adresse.addEventListener("change", (event)=> {
    AllDatas = {
        ...AllDatas,
        adress:event.target.value,
    }
})

formation.addEventListener("change", (event)=> {
    console.log(event.target.value);
    AllDatas = {
        ...AllDatas,
        formation:event.target.value,
    }
})

const onSubmit = () =>{
    
    console.log(AllDatas);
    fetch(`${ Url_to_Api}/Users/New`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(AllDatas),
    })
    .then((response)=>{
        if(response.ok){
            response.json()
             .then(datas => console.log(datas));
        }
    })
    .catch(error => console.log(error))
}

// function to add Envents

BtnSend.addEventListener('click',onSubmit)
