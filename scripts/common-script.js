let loader=document.getElementById("preloader");
    window.addEventListener("load",()=>{
        setTimeout(()=>{
            loader.style.display = "none";
        },1450)
    })
let dancingText=document.querySelector("#dancingText")
    setInterval(()=>{
        dancingText.style.opacity="0"
        setTimeout(()=>{
            dancingText.style.opacity="1"
        },1000)
    },3000)
    