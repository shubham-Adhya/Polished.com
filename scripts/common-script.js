let loader=document.getElementById("preloader");
    window.addEventListener("load",()=>{
        setTimeout(()=>{
            loader.style.display = "none";
        },1325)
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


let products=[
    {
        name:'Polished Cosmetics Black Magic Kajal of 2',
        mrp:289,
        img: './product-img/1.avif'        
    },
    {
        name:'Maybelline New York Colossal Bold Kajal-Pack of 2',
        mrp:301,
        img: './product-img/2.avif'
    },
    {
        name:'SUGAR Kohl of Honour Intense Kajal',
        mrp:212,
        img: './product-img/3.avif'
    },
    {
        name:'Kay Beauty Waterproof 24 Hour Kajal-Spade-Black ',
        mrp:299,
        img: './product-img/4.avif'
    },
    {
        name:'Faces Canada Fresh Eyes Kajal',
        mrp:169,
        img: './product-img/5.avif'
    },
    {
        name:'MAC in Extreme Dimension 24hr Kajal Liner',
        mrp:675,
        img: './product-img/6.avif'
    },
    {
        name:'SUGAR POP 24Hr Kajal-Black',
        mrp:206,
        img: './product-img/7.avif'
    },
    {
        name:'Insight Cosmetics Intense Kohl Kajal',
        mrp:99,
        img: './product-img/8.avif'
    },
    {
        name:'Colorbar Intense Rich Kajal',
        mrp:136,
        img: './product-img/9.avif'
    },
    {
        name:'Maybelline New York The Colosssal kajal 24 Hr Smudge',
        mrp:170,
        img: './product-img/10.avif'
    },
    {
        name:'Lakme Eyeconic Kajal-Twin Pack',
        mrp:281,
        img: './product-img/11.avif'
    },
    {
        name:'Kay Beauty Gel Eye Pencil',
        mrp:509,
        img: './product-img/12.avif'
    },
    {
        name:'Faces Canada Magneteyes Kajal-Intense Black',
        mrp:142,
        img: './product-img/13.avif'
    },
    {
        name:'Sugar POP Longwear Kajal',
        mrp:179,
        img: './product-img/14.avif'
    },
    {
        name:'Mamaearth Charcoal Black Long Stay Kajal',
        mrp:263,
        img: './product-img/15.avif'
    },
]

let searchform=document.getElementById("searchform")
let searchResult=JSON.parse(localStorage.getItem('searchresult'))


function redirect(){
    window.location.href="./product.html"
}
searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    
      let input=searchform.search.value;
      filtered=products.filter(element=>{
        if(element.name.toUpperCase().includes(input.toUpperCase())==true){
          return true
        }else{
          return false
        }
      })
      searchResult=filtered;
      localStorage.setItem("searchresult",JSON.stringify(searchResult))
      redirect()
})


    