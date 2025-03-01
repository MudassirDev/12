function check(){
    var rows=document.getElementById("get-rows").value
    var width=document.getElementById("get-width").value
    var height=document.getElementById("get-height").value


    for( var a=0 ; a<=rows;a++){
        
    document.write("<input type='text' style='border 3px solid; height:"+height+"px; width:"+width+"px'><br><br>");
  width-=10;
  height-=10;
}
    
}