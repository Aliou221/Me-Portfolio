let profil = document.querySelector('.me');

let Options = ["Etudiant","Designer" ,"HTML" , "CSS", "JS", "PHP"];
let colors = ["#fff","#ccc","#E34F26","#264DE4","#F7DF1E","#777BB4"];

let index = 0;
let indexCaractere = 0;

changeMot()

function changeMot(){

    indexCaractere++;
    
    profil.innerHTML = `<span style="color:#fff;">${Options[index].charAt(0) === "E" || Options[index].charAt(0) === "D" ? "" : " Dev "}</span> ${Options[index].slice(0,indexCaractere)}`
    profil.style.color = colors[index]
    
    if(indexCaractere === Options[index].length){
        indexCaractere = 0;
        index++
    }

    if(index === Options.length){
        index = 0;
    }

    setTimeout(changeMot , 400);
}

// Partie de propos


let paragNones = document.querySelectorAll(".parag-none");
let myArrows = document.querySelectorAll(".my-arrow");
let myGridParag = document.querySelectorAll(".grid-parag")


myArrows.forEach((arrow, index) =>{ 
    
    arrow.addEventListener("click", ()=>{ 

        myGridParag.forEach((parag,i) =>{

            if(i === index){ 

                parag.classList.toggle("grid-row-visible")

                if(parag.classList.contains("grid-row-visible")){
                    parag.style.height =`${myGridParag[index].scrollHeight}px`
                    myArrows[i].style.transform = "rotate(180deg)"
                }else{
                    parag.style.height =`0px`
                    myArrows[i].style.transform = "rotate(0deg)"
                }

            }else{
                parag.classList.remove("grid-row-visible")
                parag.style.height = `0px`
                myArrows[i].style.transform = "rotate(0deg)"
            }
            
        })
                
    })
})

