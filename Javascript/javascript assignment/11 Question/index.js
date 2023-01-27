// Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.


const obj= new Date();
console.log(obj);
console.log("Year is",obj.getFullYear());
console.log("Month is",obj.getMonth());
console.log("Today date is",obj.getDate());
console.log("Today Day is",obj.getDay());
console.log("Hours now is",obj.getHours());
console.log("Min now is",obj.getMinutes());


//- Find out the numbers of seconds elapsed from January 1, 1970 to now.
let elsp=new Date(1960,01,01);

console.log(`sec elapsed from jan 1 1970 to now = ${Math.round((obj-elsp)/1000)}`);
