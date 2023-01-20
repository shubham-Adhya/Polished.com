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

let gridEl=document.querySelector(".grid")


display(products);
function display(data){
    gridEl.innerHTML='';
    data.forEach((element,index) => {
        let divEl=document.createElement('div')
        divEl.setAttribute('class','card')

        let imgEl=document.createElement('img')
        imgEl.setAttribute("src",element.img)
        let nameEl=document.createElement('h4')
        nameEl.textContent=element.name
        let mrpEl=document.createElement('p')
        mrpEl.innerText='MRP:₹'+element.mrp

        let divEl2=document.createElement('div')
        let img2El=document.createElement('img')
        img2El.setAttribute('src','./icons/icons8-heart-48.png')
        let addToCart=document.createElement("button");
        addToCart.textContent='Add To Cart';
        addToCart.setAttribute('class','addToCartBtn')

        divEl2.append(img2El,addToCart)
        divEl.append(imgEl,nameEl,mrpEl,divEl2)
        gridEl.append(divEl)
    });
}