function convert(){
   var x=parseInt(num.value);
   demo.value=Number(x).toString(2);
   demo1.value=Number(x).toString(8);
   demo2.value=Number(x).toString(16);
   reset.onclick=function(){
      num.value="";
      demo.value="";
      demo1.value="";
      demo2.value="";
    }
}