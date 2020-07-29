const buttons=document.querySelectorAll(".button");
//console.log(buttons);
let result;
let num;
function calcNumbers(num){
    form.inputDisplayResult.value+=num;
    return form.inputDisplayResult.value;
    

}
function backspaceNum(number){
  const cutNum=number.slice(0,-1);
  return cutNum;
}

buttons.forEach(function(btn){
   btn.addEventListener("click",function(e){
      
      
      const classes=e.currentTarget.classList;
      
      if(classes.contains("clear")){
    
        const inputDisplayResult=document.querySelector("#inputDisplayResult");
    
        inputDisplayResult.value="";
        const outputDisplayResult=document.querySelector("#outputDisplayResult");
        
        outputDisplayResult.value="";
        
    
      }
      

      else if(!classes.contains("equal")){
       const value=e.currentTarget.value;
      
       
       result=calcNumbers(value);
      // console.log(result);
       
      
       
     
      
       
      // const result=eval(value);
       //console.log(value);
      

       
      


      //console.log(result.length);
     
    }

    if(classes.contains("backspace")){
      result=backspaceNum(result);
      const sign=result.slice(-1);
      const signNum=parseFloat(sign);
      

      // console.log(result);
      document.querySelector("#inputDisplayResult").value=result;
      if(!isNaN(signNum/2))
      { 
        const num=eval(result);
     document.querySelector("#outputDisplayResult").value=num; 
      }
      else{
        document.querySelector("#outputDisplayResult").value="";
      }
      
     if(result.length==0){
       
      const outputDisplayResult=document.querySelector("#outputDisplayResult");
       
        outputDisplayResult.value="";
    }
        
     }
     

     //console.log(result);
    
    
    if(!classes.contains("sign"))
    {
       num=eval(result);
       
     
     document.querySelector("#outputDisplayResult").style.display="block";
        
     document.querySelector("#outputDisplayResult").value=num;
         
    }
    
    if(classes.contains("equal")){
       num=eval(result);
       
      
     
      document.querySelector("#inputDisplayResult").value=num;
      
      document.querySelector("#outputDisplayResult").style.display="none";
     
    
    }
   // console.log(result);
    
    

      

   });
   
   
});
//const num=eval(result);
//console.log(num);
