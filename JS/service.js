let header = document.querySelector("header");

document.addEventListener("scroll",()=>{
    if(window.scrollY >= header.scrollHeight){
        header.style.backgroundColor = "var(--bg-primary)"
    }else{
        header.style.backgroundColor = "transparent"
    }
})