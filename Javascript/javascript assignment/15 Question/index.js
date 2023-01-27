// Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let marks=80;
let grade;
if (marks>=80 && marks<=100){
    grade="A"
    console.log(`Your marks is ${marks} and Your grade is ${grade}`);   
} else if(marks>=70 && marks<=89){
    grade="B"
 console.log(`Your marks is ${marks} and Your grade is ${grade}`);
}else if(marks>=60 && marks<=69){
    grade="C"
    console.log(`Your marks is ${marks} and Your grade is ${grade}`);
}else  if(marks>=50 && marks<=59){
    grade="D"
    console.log(`Your marks is ${marks} and Your grade is ${grade}`);
}else if(marks>=0 && marks<=49){
    grade="F"
    console.log(`Your marks is ${marks} and Your grade is ${grade}`);
}else{
    console.log("Enter Valid Marks between 0 to 100");
}


