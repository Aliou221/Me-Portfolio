let menu = document.querySelector(".menu")
let barHaut = document.querySelector(".bar1");
let barMi = document.querySelector(".bar2");
let barBas = document.querySelector(".bar3");

let navigation = document.querySelector("nav ul");


menu.addEventListener("click", (e)=>{

    navigation.classList.toggle("nav-active");

    if(navigation.classList.contains("nav-active")){

        barHaut.style.transform = "rotate(135deg)"
        barHaut.style.top = "3px"
        barMi.style.opacity = "0"
        barBas.style.transform = "rotate(-135deg)"
        barBas.style.top = "-3px"

    }else{
        barHaut.style.transform = "translateY(-9px)"
        barHaut.style.top = ""
        barMi.style.opacity = "1"
        barBas.style.transform = "translateY(9px)"
        barBas.style.top = ""
    }

})

let navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link =>{
    link.addEventListener("click",()=>{
        
        navigation.classList.remove("nav-active"); 

        barHaut.style.transform = "translateY(-9px)"
        barHaut.style.top = ""

        barMi.style.opacity = "1"
        
        barBas.style.transform = "translateY(9px)"
        barBas.style.top = ""

    })
})

//Chargement de notre page

let loading = document.querySelector(".loading")

loading.innerHTML = `
        <span>C</span><span>H</span>
        <span>A</span><span>R</span>
        <span>G</span><span>E</span>
        <span>M</span><span>E</span>
        <span>N</span><span>T</span>
        <span>.</span><span>.</span>
        <span>.</span>
        `

window.addEventListener("load",()=>{
    loading.style.opacity = "0"
    loading.style.visibility = "hidden"
})
