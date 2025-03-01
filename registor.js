function submit(){
    var name=document.getElementById("name").value
    var cast=document.getElementById("cast").value
    var email=document.getElementById("email").value
    var password=document.getElementById("pass").value

  if(name==""||password==""|| cast==""||email==""){

    if(name==""){
        document.getElementById("first_name").innerHTML="name is required"
        document.getElementById("first_name").style.color="red"
        document.getElementById("name").style.border="2px solid red"
    }
    else{
        document.getElementById("first_name").innerHTML=""
        document.getElementById("name").style.border=""
    }

    
    if(email==""){
        document.getElementById("email_error").innerHTML="email is required"
        document.getElementById("email_error").style.color="red"
        document.getElementById("email").style.border="2px solid red"
    }
    else{
        document.getElementById("email_error").innerHTML=""
        document.getElementById("email").style.border=""
    }
    if(password==""){
        document.getElementById("password_error").innerHTML="password is required"
        document.getElementById("password_error").style.color="red"
        document.getElementById("pass").style.border="2px solid red"
    }
    else{
        document.getElementById("password_error").innerHTML=""
        document.getElementById("pass").style.border=""
       
    }

    if(cast==""){
        document.getElementById("cast_name").innerHTML="cast is required"
        document.getElementById("cast_name").style.color="red"
        document.getElementById("cast").style.border="2px solid red"
    }
    else{
        document.getElementById("cast_name").innerHTML=""
        document.getElementById("cast").style.border=""
       
    }


  }else{
    document.getElementById("cast_name").innerHTML=""
        document.getElementById("cast").style.border=""
        document.getElementById("password_error").innerHTML=""
        document.getElementById("pass").style.border=""
        document.getElementById("email_error").innerHTML=""
        document.getElementById("email").style.border=""
        document.getElementById("first_name").innerHTML=""
        document.getElementById("name").style.border=""


        var PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/;
if (PasswordRegex.test(password)) {
  document.getElementById("result").innerHTML="strong password"

  
} else {
  document.getElementById("result").innerHTML = "Password must contain at least one lowercase letter, one uppercase letter, one number, and be between 8-16 characters long.";
}

alert("registration successful")

  }

}