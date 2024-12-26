let section = document.querySelectorAll("section"); //Recuperation de tout mes sections
let navlinks = document.querySelectorAll("nav ul li a")//Recuperation de tous mes liens de navigation

window.addEventListener("scroll", ()=>{ //evenment scroll
    
    section.forEach(sec =>{ //Parcourir tous mes section

        let tete = window.scrollY; //Position actuel de mon fenetre par rapport en haut de page 
        let hauteur = sec.offsetHeight; //La hauteur de la section qui est en cours 
        let pos_section = sec.offsetTop - 150; //Position de mon section par rapport au haut de page
        let id = sec.getAttribute("id");  //id de la section utiliser pour voir le lien correspondant


        if(tete >= pos_section && tete < pos_section + hauteur){ //Verification si la section est visible ou pas
            
            navlinks.forEach(link =>{ //parcurir les liens 

                link.classList.remove("active")//suprime la class 'active' de tous les liens 

                document.querySelector('nav ul li a[href*='+id+']').classList.add("active") //Voir le lien qui a pour href l'id du section et on ajoute la class "active" sur cette lien
            
            })
        }
    })
})
