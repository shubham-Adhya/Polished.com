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


document.addEventListener("click", (e)=>{
    const isDropDownButton=e.target.matches("[data-dropdown-button]")
    if(!isDropDownButton && e.target.closest(`[data-dropdown]`) != null) return

    let currentDropDown
    if (isDropDownButton){
        currentDropDown=e.target.closest(`[data-dropdown]`)
        currentDropDown.classList.toggle('active')
    }
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown=>{
        if(dropdown===currentDropDown) return
        dropdown.classList.remove('active')
    })
})
function hrefFunction(){
    window.location.href="./signINPage.html"
}
function hrefFunctionHome(){
    window.location.href="./index.html"
}

let counter=1;
setInterval(()=>{
    document.getElementById("radio"+counter).checked=true;
    counter++;
    if(counter>4){
        counter=1
    }
},4000)


    