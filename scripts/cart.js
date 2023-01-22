let gridEl=document.querySelector(".grid")
let ordertotal=document.getElementById("order-total")
let buyLS1=JSON.parse(localStorage.getItem("buy")) || [];
let ordertotalLS=JSON.parse(localStorage.getItem("ordertotal")) || '';
let checkout=document.getElementById("checkout")

checkout.addEventListener("click",()=>{
    alert('Redirect to Payment Page ?')
    localStorage.setItem("ordertotal",JSON.stringify(ordertotal.innerText))
    
    buyLS1=[];
    localStorage.setItem("buy",JSON.stringify(buyLS1))
    display(buyLS1);
    let text=document.createElement('h2');
    text.innerText="Order Sucess. Go to \'My Orders\' to Track Your Orders"
    gridEl.append(text)
    window.open('./paymentpage.html')
})




display(buyLS1);
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
        divEl2.setAttribute('class','carddiv')

        let IncrementBtn=document.createElement('button');
        IncrementBtn.textContent='+'

        let quantityEl=document.createElement('p');
        quantityEl.textContent=1

        let DecrementBtn=document.createElement('button');
        DecrementBtn.textContent='-'
        
        let remove=document.createElement("button");
        remove.textContent='Remove';
        remove.setAttribute('class','remove')


        remove.addEventListener("click",()=>{
            aftercanceled=buyLS1.filter((el,i)=>{
                if(index==i){
                  return false
                }else{
                  return true
                }
              })
              buyLS1=aftercanceled;
              localStorage.setItem('buy',JSON.stringify(buyLS1));
              display(buyLS1)
          })

          IncrementBtn.addEventListener("click",()=>{
            quantityEl.textContent=Number(quantityEl.textContent) + 1
            sum+=element.mrp
            ordertotal.textContent=sum
          })
          DecrementBtn.addEventListener("click",()=>{
            if(Number(quantityEl.textContent)>1){
            quantityEl.textContent=Number(quantityEl.textContent) - 1
            sum-=element.mrp
            ordertotal.textContent=sum
            }
          })
        divEl2.append(IncrementBtn,quantityEl,DecrementBtn,remove)
        divEl.append(imgEl,nameEl,mrpEl,divEl2)
        gridEl.append(divEl)
    });

    let sum=0;
      for(let i=0;i<data.length;i++){
        sum+=data[i].mrp
      }
      ordertotal.textContent=sum
}