let sections = document.querySelectorAll("section"); 
let navlinks = document.querySelectorAll("nav ul li a")

window.addEventListener("scroll", ()=>{ 
    
    sections.forEach(section =>{ 

        let tete = window.scrollY; 
        let hauteur = section.offsetHeight; 
        let pos_section = section.offsetTop - 150; 
        let id = section.getAttribute("id");  


        if(tete >= pos_section && tete < pos_section + hauteur){ 
            
            navlinks.forEach(link =>{

                link.classList.remove("active")

                document.querySelector('nav ul li a[href*='+id+']').classList.add("active")
            
            })
        }
    })
})
