let header = document.querySelector("header");

document.addEventListener("scroll",()=>{
    if(window.scrollY >= header.offsetHeight){
        header.style.backgroundColor = "var(--bg-primary)"
    }else{
        header.style.backgroundColor = "transparent"
    }
})

let imgNones = document.querySelectorAll(".img-none")
let btnImg = document.querySelector(".btn-img")

let cont = 0;


btnImg.onclick = function(){

    if(cont < 3){
        imgNones.forEach((img,i) =>{
            if(cont === 0){
                if(i>=0 && i < 5){
                    img.classList.add("img-visible")
                }
            }

            if(cont === 1){
                if(i>=5 && i < 10){
                    img.classList.add("img-visible")
                }
            }

            if(cont === 2){
                if(i>=10 && i < 17){
                    btnImg.innerText = "Voir moins"
                    img.classList.add("img-visible")
                }
            }
        })

        cont++;

    }else{

        cont = -1

        if(cont === -1){

            imgNones.forEach((img,i) =>{
    
                if(i>=0 && i < 17){
                    
                    btnImg.innerText = "Voir plus"
                    img.classList.remove("img-visible")
                }
            })
        }
    }
}
