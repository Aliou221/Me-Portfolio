let prenom = document.querySelector("#first_name");
let nom = document.querySelector("#last_name");
let mail = document.querySelector("#mail");
let phone = document.querySelector("#phone");
let message = document.querySelector("#message");

let form = document.querySelector("#my_form");

let mesErr = document.querySelectorAll(".text-error")
let inputValues = document.querySelectorAll(".input-value")

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/

    if(prenom.value   !== "" && 
        nom.value     !== "" && 
        mail.value    !== "" &&  
        phone.value   !== "" && 
        message.value !== "" &&
        !!mail.value.match(mailRegex)){
        
        Swal.fire({
            title: "Merci!",
            text: "votre formulaire a été soumis avec succès !",
            icon: "success"
        });

        form.reset()
        return; 

    }else if(prenom.value !== "" && 
        nom.value     !== "" && 
        mail.value    !== "" &&  
        phone.value   !== "" && 
        message.value !== "" &&
        !mail.value.match(mailRegex)){

        document.querySelector(".mailVerif").style.display = "block"
        document.querySelector(".mailVerif").innerHTML = "Veuillez saisir un e.mail valide"
        mail.classList.add("error-mess")

        mail.addEventListener("keydown", ()=>{
            document.querySelector(".mailVerif").style.display = "none"
            document.querySelector(".mailVerif").innerHTML = ""
            mail.classList.remove("error-mess")
        })

    }else{   
            
        inputValues.forEach((input, index) =>{

            if(input.value === ""){

                mesErr[index].style.display = "block"
                input.classList.add("error-mess")
    
                input.addEventListener("keydown", ()=>{
                    mesErr[index].style.display = "none"
                    input.classList.remove("error-mess")
                })
            }else{
                mesErr[index].style.display = "none"
                input.classList.remove("error-mess")
            }
        })
    }

})
