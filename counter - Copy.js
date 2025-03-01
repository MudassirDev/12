   var counter=0;

      function add(){

         document.getElementById("count").innerHTML=counter;

           counter= counter+1;

         }

       function sub(){

          if(counter > 0){

             counter = counter -1;

             document.getElementById("count").innerHTML=counter;

             }
         }
       function reset(){

         counter = 0;

         document.getElementById("count").innerHTML=counter;
         
         }