let ordertotalLS=JSON.parse(localStorage.getItem("ordertotal")) || '';
    let ordertotal=document.getElementById("order-total")
    let youpay=document.getElementById("youpay")
    let discount=document.getElementById("discount")
    let Pay=document.getElementById("pay")
    
    
    Pay.addEventListener("submit",(e)=>{
        e.preventDefault();
        alert("Payment Success")
        window.close()
    })
    ordertotal.innerText=ordertotalLS
    youpay.innerText=Number(ordertotalLS)+10
    let flag=true;



    
    
    discount.addEventListener("submit",(e)=>{
        e.preventDefault();
        if(flag==true){
            if(discount.couponInp.value=='Masai30'){
            youpay.innerText=Math.floor(0.7*(Number(ordertotalLS)+10))
            
            }
        }
        flag=false
       
    })




