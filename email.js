let emailval= document.getElementById("email");
let baton=document.getElementById("submit");
let errordiv=document.getElementById("error");
let tick=document.getElementById("correct");
let exclamation=document.getElementById("excla")
function validity(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(emailRegex.test(emailval.value)){
        baton.style.display="block";
        tick.style.display="block";
        emailval.classList.add("correct");
        exclamation.style.display="none";
        errordiv.style.display="none";

    }
    else{
       errordiv.style.display="block";
        exclamation.style.display="block";
        emailval.classList.add("makosa");

    }
};
emailval.addEventListener("keyup",validity)
