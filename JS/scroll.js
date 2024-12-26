let section = document.querySelectorAll("section"); 
let navlinks = document.querySelectorAll("nav ul li a")

window.addEventListener("scroll", ()=>{ 
    
    section.forEach(sec =>{ 

        let tete = window.scrollY; 
        let hauteur = sec.offsetHeight; 
        let pos_section = sec.offsetTop - 150; 
        let id = sec.getAttribute("id");  


        if(tete >= pos_section && tete < pos_section + hauteur){ 
            
            navlinks.forEach(link =>{

                link.classList.remove("active")

                document.querySelector('nav ul li a[href*='+id+']').classList.add("active")
            
            })
        }
    })
})
