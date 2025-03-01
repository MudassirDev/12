function check(){
    var check=document.getElementById("password")
    if(check.type==="password"){
        check.type="text"
    }else{
        check.type="password"
    }
}
function login(){
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-!@#$%^&*()_+=[\]{};':"\\|,.<>?]).{8,16}$/
    var goodRegex = /^[a-zA-Z0-9]{8,16}$/;
    var weakRegex =/^[a-z]{1,9}$/;

    if(emailRegex.test(email) && (strongRegex.test(password) || goodRegex.test(password) || weakRegex.test(password))){
        alert("login successful")
            
    
     } else{
    if(emailRegex.test(email)){

document.getElementById("check").innerHTML="email is valid"
document.getElementById("check").style.color="green"
    }
    else{
        document.getElementById("check").innerHTML="email is invalid"
        document.getElementById("check").style.color="red"
    }
    if(strongRegex.test(password)){
        document.getElementById("result").innerHTML="strong password"
        document.getElementById("result").style.color="green"
      } else if(goodRegex.test(password)){
        document.getElementById("result").innerHTML="good password"
        document.getElementById("result").style.color="green"
      } else if(weakRegex.test(password)){
        document.getElementById("result").innerHTML="weak password"
        document.getElementById("result").style.color="red"
      }

else {
    document.getElementById("result").innerHTML="invalid password password must contain capital latter<br>small latter special charactor and number between 8 to 16 charactor"
  document.getElementById("result").style.color="red"
}
  
}

}
