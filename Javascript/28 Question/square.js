// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***
let num=3;
let square='';
for(let i=1;i<=num;i++){
    for(let j=0;j<num;j++){
        square+="*";
    }
    square+="\n"
}
console.log(square);