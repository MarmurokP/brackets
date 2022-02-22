module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 !== 0){
    return false;
  };
    
  let bracketsStr = '';
  let stack = [];
  let count = 0;
  let cur = '';
  let prev = '';
  bracketsConfig.forEach(el => {
    bracketsStr += el.join('');
   });
  
  for(let i = 0; i < str.length; i++){    
     let curIndex = bracketsStr.indexOf(str[i]);
     prev = cur; 
      cur =  bracketsStr[curIndex];  
         
     if(curIndex >= 0){      
      
      if(bracketsStr[curIndex] === bracketsStr[curIndex + 1]){  
        
        
        if(count % 2 !== 0){
          curIndex = curIndex + 1;          
        };       
             
        ++count;     
      };      
      
       if(curIndex % 2 !== 0){
        
        if(!stack.length){         
          return false;
        };        

        let stackPop = stack.pop();    
          
        if(stackPop !== bracketsStr[curIndex - 1]){                   
          return false;
        };
               
      } else {
        stack.push(str[i]);
      };
       
    }; 
    
  }; 
console.log(!stack.length)
  return !stack.length;
};
