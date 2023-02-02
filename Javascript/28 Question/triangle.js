// Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

let num=3;
let triangle='';
for(let i=1;i<=num;i++){
    for(let j=0;j<num;j++){
    triangle+="";
}
for (let k = 0; k < i; k++) {
    triangle += "*";
}   
triangle +="\n";
}  
 console.log(triangle);


	









