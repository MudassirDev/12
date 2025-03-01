
var count=0;
var item=0;
var tprice=0;
var price1;
function addtocart(){
   document.getElementById("detail").style.display=""
   price1 = parseInt(document.getElementById("price-value").innerHTML.replace("Rs. ", ""));
  

}

function increment(){
   count+=1;
   document.getElementById("digit").innerHTML=count  
   item+=1;
   document.getElementById("item").innerHTML=item
   tprice=item*price1
   document.getElementById("tprice").innerHTML=tprice
   document.getElementById("price").innerHTML=price1
   }
function decrement(){
   if(count>0){
      count-=1
      document.getElementById("digit").innerHTML=count
      item-=1
      document.getElementById("item").innerHTML=item
      tprice=item*price1
   document.getElementById("tprice").innerHTML=tprice
   
   document.getElementById("price").innerHTML=price1
   }
   if(count<=0){
      document.getElementById("price").innerHTML="0"
   }
}
