let signInForm=document.getElementById("signinPageForm")

signInForm.addEventListener("submit",e=>{
    e.preventDefault();
    if(signInForm.f.value=='shubhamadhya@gmail.com' && signInForm.f1.value=='12345'){
        alert("Welcome Shubham")
        window.location.href="./PageAfterLogin.html"
    }else{
        alert("Credential Didn\'t match" )
    }
})