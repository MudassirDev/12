function showTime(){
     var date = new Date();
     var h = date.getHours();
     var m = date.getMinutes();
     var s = date.getSeconds();
     var sassion= "AM";

     if(h==0){
        h=12
     }
     if(h>= 12){
        h = h-12
        sassion="PM"
     }
      
      h = h < 10 ? "0" +h:h; 
      m = m < 10 ? "0" +m:m;
      s = s < 10 ? "0" +s:s;

      var time = h + ":" +m+ ":" +s+ " " +sassion;
      
      document.getElementById("digital").innerText=time;

      setTimeout(showTime,1000);
    
    }