// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// - 4 > 3
// - 4 >= 3
// - 4 < 3
// - 4 <= 3
// - 4 == 4
// - 4 === 4
// - 4 != 4
// - 4 !== 4
// - 4 != '4'
// - 4 == '4'
// - 4 === '4'
// - Find the length of python and jargon and make a falsy comparison statement.


//Ans

//         4 > 3       =    true
//         4 >= 3      =    true
//         4 < 3       =    false
//         4 <= 3      =    false
//         4 == 4      =    true
//         4 === 4     =    true
//         4 != 4      =    false
//         4 !== 4     =    false
//         4 != '4'    =    false
//         4 == '4'    =    true
//         4 === '4'   =    false


console.log(`4>3 is ${4>3}`);
console.log(`4>=3 is ${4>=3}`);
console.log(`4<3 is ${4<3}`);
console.log(`4<=3 is ${4<=3}`);
console.log(`4==4 is ${4==4}`);
console.log(`4===4 is ${4===4}`);
console.log(`4!=4 is ${4!=4}`);
console.log(`4!==4 is ${4!==4}`);
console.log(`4!='4' is ${4!='4'}`);
console.log(`4=='4' is ${4=='4'}`);
console.log(`4==='4' is ${4==='4'}`);
 

//Find the length of python and jargon and make a falsy comparison statement
let py="python";
let jr="jargon";

console.log(py.length);
console.log(jr.length);

console.log(`${py.length != jr.length}`);


