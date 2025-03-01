 
 var i=0;
 var colors =['red','green','blue','white','pink','purple','lightgray','brown','darkblue','darkgreen','darkred','yellow','aqua','wheat','darkyellow'];
 function color(){
    var apply= document.getElementById("change");
    apply.style.color=colors[i]
    i++;
    if (i>= colors.length){
      i =0;
    }
   document.getElementById("color").style.backgroundColor="green";
   document.getElementById("color").style.width="200px";

 }