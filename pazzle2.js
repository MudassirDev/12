// function btn1(){

function btn2(){
    var btn2=document.getElementById("btn2").innerHTML
    var btn1=document.getElementById("btn1").innerHTML
    var btn3=document.getElementById("btn3").innerHTML
    var btn5=document.getElementById("btn5").innerHTML
    
    if(btn2==""){
    
    } else if(btn1==""){
        document.getElementById("btn1").innerHTML=btn2
        document.getElementById("btn2").innerHTML=""
    }
    else if(btn3==""){
        document.getElementById("btn3").innerHTML=btn2
        document.getElementById("btn2").innerHTML=""
    }else if(btn5==""){
        document.getElementById("btn5").innerHTML=btn2
        document.getElementById("btn2").innerHTML=""
    }
    
    
    
    }
    function btn1(){
        var btn1= document.getElementById("btn1").innerHTML
        var btn2= document.getElementById("btn2").innerHTML
        var btn4=document.getElementById("btn4").innerHTML
    
    
        if(btn1==""){
    
        }
        else if( btn2==""){
            document.getElementById("btn2").innerHTML=btn1
            document.getElementById("btn1").innerHTML=""
        }else if(btn4==""){
           document.getElementById("btn4").innerHTML=btn1
           document.getElementById("btn1").innerHTML=""
        }
    }
    function btn3(){
        var btn3=document.getElementById("btn3").innerHTML
        var btn2=document.getElementById("btn2").innerHTML
        var btn6=document.getElementById("btn6").innerHTML
    
        if(btn3==""){
    
        }else if(btn2==""){
            document.getElementById("btn2").innerHTML=btn3
            document.getElementById("btn3").innerHTML=""
        }else if(btn6==""){
            document.getElementById("btn6").innerHTML=btn3
            document.getElementById("btn3").innerHTML=""
        }
    }
    function btn4(){
        var btn1=document.getElementById("btn1").innerHTML
        var btn4= document.getElementById("btn4").innerHTML
        var btn5= document.getElementById("btn5").innerHTML
        var btn7=document.getElementById("btn7").innerHTML
    
        if(btn4==""){
    
        }else if(btn1==""){
            document.getElementById("btn1").innerHTML=btn4
            document.getElementById("btn4").innerHTML=""
        }else if(btn5==""){
            document.getElementById("btn5").innerHTML=btn4
            document.getElementById("btn4").innerHTML=""
    
        }else if(btn7==""){
            document.getElementById("btn7").innerHTML=btn4
            document.getElementById("btn4").innerHTML=""
        }
    
    }
    function btn5(){
        var btn5=document.getElementById("btn5").innerHTML
        var btn4=document.getElementById("btn4").innerHTML
        var btn2=document.getElementById("btn2").innerHTML
        var btn6=document.getElementById("btn6").innerHTML
        var btn8=document.getElementById("btn8").innerHTML
    
        if(btn5==""){
    
        }else if(btn4==""){
        document.getElementById("btn4").innerHTML=btn5
        document.getElementById("btn5").innerHTML=""
        }else if(btn2==""){
            document.getElementById("btn2").innerHTML=btn5
            document.getElementById("btn5").innerHTML=""
        }else if(btn6==""){
            document.getElementById("btn6").innerHTML=btn5
            document.getElementById("btn5").innerHTML=""
        }else if(btn8==""){
            document.getElementById("btn8").innerHTML=btn5
            document.getElementById("btn5").innerHTML=""
        }
    }
    function btn6(){
        var btn6=document.getElementById("btn6").innerHTML
        var btn5=document.getElementById("btn5").innerHTML
        var btn3=document.getElementById("btn3").innerHTML
        var btn9=document.getElementById("btn9").innerHTML
    
        if(btn6==""){
    
        }else if(btn5==""){
            document.getElementById("btn5").innerHTML=btn6
            document.getElementById("btn6").innerHTML=""
        }
        else if(btn3==""){
         document.getElementById("btn3").innerHTML=btn6
         document.getElementById("btn6").innerHTML=""
        }else if(btn9==""){
            document.getElementById("btn9").innerHTML=btn6
            document.getElementById("btn6").innerHTML=""
        }
    }
    function btn7(){
        var btn7=document.getElementById("btn7").innerHTML
        var  btn4=document.getElementById("btn4").innerHTML
        var btn8=document.getElementById("btn8").innerHTML
    
        if(btn7==""){
        
        }else if(btn4==""){
            document.getElementById("btn4").innerHTML=btn7
            document.getElementById("btn7").innerHTML=""
        }else if(btn8==""){
            document.getElementById("btn8").innerHTML=btn7
            document.getElementById("btn7").innerHTML=""
        }
    }
    function btn8(){
        var btn8=document.getElementById("btn8").innerHTML
        var btn7=document.getElementById("btn7").innerHTML
        var btn9=document.getElementById("btn9").innerHTML
        var btn5=document.getElementById("btn5").innerHTML
    
    
        if(btn8==""){
    
        }else if(btn7==""){
            document.getElementById("btn7").innerHTML=btn8
            document.getElementById("btn8").innerHTML=""
        }else if(btn5==""){
            document.getElementById("btn5").innerHTML=btn8
            document.getElementById("btn8").innerHTML=""
        }else if(btn9==""){
            document.getElementById("btn9").innerHTML=btn8
            document.getElementById("btn8").innerHTML=""
        }
    }
    function btn9(){
        var btn9=document.getElementById("btn9").innerHTML
        var btn8=document.getElementById("btn8").innerHTML
        var btn6=document.getElementById("btn6").innerHTML
    
        if(btn9==""){
    
        }else if(btn6==""){
            document.getElementById("btn6").innerHTML=btn9
            document.getElementById("btn9").innerHTML=""
        }else if(btn8==""){
            document.getElementById("btn8").innerHTML=btn9
            document.getElementById("btn9").innerHTML=""
    
        }
    }
    function check(){
        var btn1=document.getElementById("btn1").innerHTML
        var btn2=document.getElementById("btn2").innerHTML
        var btn3=document.getElementById("btn3").innerHTML
        var btn4=document.getElementById("btn4").innerHTML
        var btn5=document.getElementById("btn5").innerHTML
        var btn6=document.getElementById("btn6").innerHTML
        var btn7=document.getElementById("btn7").innerHTML
        var btn8=document.getElementById("btn8").innerHTML
        var btn9=document.getElementById("btn9").innerHTML
    
        if ( btn1=="" && btn2==2 && btn3==3 && btn4==4 && btn5== 5 && btn6==6 &&btn7==7 && btn8==8 && btn9==9){
            alert("congratulation")
        }else{
            alert("try again")
        }
    }