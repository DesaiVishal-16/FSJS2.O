// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

let pyramid='';
let num="3";
  
  for(let i = 1; i <= num; i++){
     pyramid = '';
    
    for(let k = 1; k <= (num - i); k++){
      pyramid += ' ';
    }
    
    for(let j = 0; j != (2 * i - 1); j++){
      pyramid += '*';
    }
    
    for(let k =  i + 1; k <= num; k++){
      pyramid += ' ';
    } 
    console.log(pyramid);
  }


