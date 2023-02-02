# <img height="24px" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"> Q&A:

1. Create a variable.js file and declare variables and assign string, boolean, undefined and
  null data types,Display all the value with their data type.

```js
let str='stringsss';
let bool=false;
let num=2344;
let undef;
let n=null;

console.log("str is",typeof str);      //string
console.log("bool is",typeof bool);    //boolean
console.log("num is",typeof num);      //number
console.log("undef is",typeof undef);  //undefined
console.log("n is",typeof n);          //null
``` 

2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

```js
let firstName="vishal";
let lastName ="desai";
let maritalStatus="Unmarried";
let country="india";
let age=21;


console.log(`${firstName}  ${lastName}  I'm from ${country}.  I'm ${age} years old and I'm ${maritalStatus}`);
```

3. Declare a varibale and assign string value to it and change all the string characters to capital letters using toUpperCase() method

```js
let capital="uppercase";
console.log(capital.toUpperCase());
```
4. Declare a varibale and assign string value to it and check if the string 
contains a word Script using includes() method

```js
let incl="it is javascript"
console.log(incl.includes("script"));
```
5. Declare a varibale and assign string value to it and then split it into 
an array using split() method

```js
let sp="A Apple a day keeps the doctor away";
const arr = sp.split();
console.log(arr);
console.log(sp.split(''));
```
6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the 
comma and change it to an array

```js
let faang='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const arr=faang.split(',');
console.log(arr);
```
7. Declare an array containing the multiple values and use lastIndexOf to determine the 
position of the first and last occurrence of a word "pw skills".

```js
let occ=["ineuron","pw skills","edureka","occurance","pw skills"]

 // this gives last occurance
console.log(occ.lastIndexOf("pw skills"));

// this gives first occurance
console.log(occ.indexOf("pw skills"));
```
8. Demonstrate the use of trim() to remove any trailing whitespace at 
the beginning and the end of a string.

```js
let tm="       string      ";
//this gives string value without whitespaces
console.log(tm.trim());

//this gives  length of a string without whitespaces
console.log(tm.trim().length);
```
9. Boolean value is either true or false.
- Write three JavaScript statement example which provide truthy value.
- Write three JavaScript statement example which provide falsy value.

```js
//this gives truthy value
console.log(Boolean(true));
console.log(Boolean(1==1));
console.log(Boolean(null==undefined));

//this gives falsy value
console.log(Boolean(false));
console.log(Boolean(2==='2'));
console.log(Boolean(null===undefined));
```
10.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
 - 4 > 3
 - 4 >= 3
 - 4 < 3
 - 4 <= 3
 - 4 == 4
 - 4 === 4
 - 4 != 4
 - 4 !== 4
 - 4 != '4'
 - 4 == '4'
 - 4 === '4'
 - Find the length of python and jargon and make a falsy comparison statement.

 ```js

    // 4 > 3     => true
    // 4 >= 3    => true
    // 4 < 3     => false
    // 4 <= 3    => false
    // 4 == 4    => true
    // 4 === 4   => true
    // 4 != 4    => false
    // 4 !== 4   => false
    // 4 != '4'  => false
    // 4 == '4'  => true
    // 4 === '4' => false

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
 ```
 11. Use the Date object to do the following activities
- What is the year today?
- What is the month today as a number?
- What is the date today?
- What is the day today as a number?
- What is the hours now?
- What is the minutes now?
- Find out the numbers of seconds elapsed from January 1, 1970 to now.

```js
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
```
12. Create a human readable time format using the Date time object
     - YYYY-MM-DD HH:mm
     - DD-MM-YYYY HH:mm
     - DD/MM/YYYY HH:mm
```js
let readable=new Date();
let month=readable.getMonth()+1;

if(month<10){
month="0"+month;
}
let hours=readable.getHours();
if(hours<10){
    hours="0"+month;
}
let min=readable.getMinutes();
if(min<10){
    min="0"+min;
}

console.log(`YYYY-MM-DD HH:mm = ${readable.getFullYear()}-${month}-${readable.getDate()} ${hours}:${min}`);

console.log(`DD-MM-YYYY HH:mm = ${readable.getDate()}-${month}-${readable.getFullYear()}  ${hours}:${min}`);

console.log(`DD/MM/YYYY HH:mm = ${readable.getDate()}/${month}/${readable.getFullYear()}  ${hours}:${min}`);
```     
13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' 
but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

```js
let age=prompt("Enter your Age")
if(age>=18){
    console.log("ou are old enough to drive");
}
else{
    console.log(`Wait For ${18-age} years to drive`);
}
```
14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? 
Create a program which checks that the given number is even or odd.

```js
let number=5;
if(number% 2==0){
    console.log(`${number} is even number`);
}
else{
    console.log(`${number} is odd number`);
}
console.log(number);
```

15. Write a program which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F

    ```js
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
    ```

    16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer

    ```js
    let month="january";
    month=month.toLowerCase();
    if(month==="september"|| month==="october"||month==="november"){
    console.log("the season is Autumn");
    }else if(month==="december"|| month==="january"||month==="february"){
    console.log("the season is Winter");
    }else if(month==="march"|| month==="april"||month==="may"){
    console.log("the season is Spring");
    }else if(month==="june"|| month==="july"||month==="august"){
    console.log("the season is Summer");
    }else{
    console.log("invalid month");
    }
    ```
    17.  Write a program which tells the number of days in a month.
    - let days=new Date()
    - console.log(days.getMonth());
    - console.log(days.getDate());
    - console.log(days.getDay());
    ```js
    let month="MARCH";
    month=month.toLowerCase();
    if(month=="february"){
    console.log(`${month} has 28 days`);
    }else if(month === "january" ||
         month === "march" ||
         month === "may" ||
         month == "july" ||
         month === "august" ||
         month == "october" ||
         month == "december"){
         console.log(`${month} has 31 days`);

    }else if(month === "april" || month === "june" || month === "september" || month === "november"){
             console.log(`${month} has 30 days`);
    }else{

    console.log(`${month} not valid month`);
    }
    ```
    18. Write a program which tells the number of days in a month, now consider leap year.

   ```js
    let getleapdays= function(month,year){
    return new Date(year,month,0).getDate();
    }
    console.log(getleapdays(2,2020));
   ```

   19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js
   ```js
   let countries = require('./countries.js')
   let WebTech = require('./web_techs.js')

    console.log(countries); 
    console.log(WebTech);
   ```
   ```js
   let countries=["India","America","Japan","China","Indonesia","Brazil"];
    module.exports=countries;
   ```
   ```js
   let WebTech=["ReactJS", "NodeJS", "ExpressJS", "Angular", "VueJS"];
    module.exports=WebTech;
   ```

   20. In the following shopping cart add, remove, edit items => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
- add 'Meat' in the beginning of your shopping cart if it  has not been already added
- add Sugar at the end of your shopping cart if it has not been already added
- remove 'Honey'
- modify Tea to 'Green Tea'
```js
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

 //- add 'Meat' in the beginning of your shopping cart if it has not been already added
 if (shoppingCart.indexOf("Meat") == -1) {
     shoppingCart.unshift("Meat");
 } else {
     console.log("Meat is already present.");
 }
 console.log('Meat is added',shoppingCart);

 //- add Sugar at the end of your shopping cart if it has not been already added
 if (shoppingCart.indexOf("Sugar") == -1) {
     shoppingCart.push("Sugar");
 } else {
     console.log('Sugar is already present');
 }
 console.log('Sugar is added',shoppingCart);
 
 //- remove 'Honey'
 shoppingCart.splice(4, 1);
 console.log('Honey is removed',shoppingCart);
 
 //- modify Tea to 'Green Tea'
 shoppingCart.splice(3, 1, "Green Tea");
 console.log('Green Tea is added',shoppingCart);
```
21. In countries array check if 'Ethiopia' exists in the    array if it exists print 'ETHIOPIA'.
  If it does not exist add to the countries list.
  ```js
  let countries=['Ethiopia','India','China'];

  if (countries.includes('Ethiopia')){
	console.log('ETHIOPIA');
   }else{
    countries.unshift('Ethiopia');
    console.log(countries);
   }
  ```
22. The following is an array of 10 students ages:
 => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
 - Sort the array and find the min and max age
 - Find the median age(one middle item or two middle items divided by two)
 - Find the average age(all items divided by number of items)
 - Find the range of the ages(max minus min)
 - Compare the value of (min - average) and (max - average), use abs() method.

 ```js
 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//- Sort the array 

const sortAges=ages.sort();
console.log(sortAges);

//find the min and max age

console.log(`Min age in array is ${Math.min(...sortAges)}`);

console.log(`Max age in array is ${Math.max(...sortAges)}`);


//- Find the median age(one middle item or two middle items divided by two)

let median=Math.floor(sortAges.length/2);
console.log(`Median age is ${sortAges[median]}`);



// - Find the average age(all items divided by number of items)

   let averageAge=sortAges.reduce((a,b)=> a+b,0)/sortAges.length
   console.log('Average age is',averageAge);


// - Find the range of the ages(max minus min)

console.log(`The range of the Ages is ${Math.max(...sortAges)-Math.min(...sortAges)}`);


// - Compare the value of (min - average) and (max - average), use abs() method

console.log(`Comparison is ${Math.abs(Math.min(...sortAges)-averageAge)===Math.abs(Math.max(...sortAges)-averageAge)}`);
 ```
 23. Write a program to check that the number given by the user is a prime number or not

 ```js
 const num = parseInt(prompt("Enter a number:"));

 function isPrime(num) {
   if (num <= 1) return false;
   for (let i = 2; i < num; i++) {
     if (num % i === 0) return false;
   }
   return true;
 }
 
 if (isPrime(num)) {
   console.log(`${num} is a prime number.`);
 } else {
   console.log(`${num} is not a prime number.`);
 }
 ```

 24. Write a program to create two array "even" and "odd" having even and odd number 
between the 0 to 100 (0 and 100 included).
```js
let even=[];
let odd=[];
for(let i=0;i<=100;i++)
    if(i%2==0){
       even.push(i);

}else{
    odd.push(i);

}
console.log("Even number from 0 to 100 is",even);
console.log("Odd number  from 0 to 100 is",odd);
```
25.  Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi.
 BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, 
overweight or obese based the information given below.
- The same groups apply to both men and women.
- Underweight: BMI is less than 18.5
- Normal weight: BMI is 18.5 to 24.9
- Overweight: BMI is 25 to 29.9
- Obese: BMI is 30 or more

```js
function calBMI(weight, height) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
}
  
const weight = parseFloat(prompt("Enter your weight in Kg:"));
const height = parseFloat(prompt("Enter your height in meters:"));
const bmi = calBMI(weight, height);
console.log(`Your BMI is ${bmi}.`);
```
26.  Write a program to print the table of any number given by the user. The format of the output should be smiliar to the below example-
If the number given by the user is 2 then the output should look like this
- 2 * 1 = 2
- 2 * 2 = 4
- 2 * 3 = 6 and so on till 2 * 10 = 20.

```js
let number=prompt("Enter a number");
 
for(let i=1;i<=10;i++){
    console.log(`${number}*${i}=${number*i}`); 
}
```
27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

```js
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) console.log(i);
}
```
28. Write a program to print the given patterns using the   loops-

- a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
```
    *
 	**
 	***
```
```js
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
```

-  	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
```
	   ***
	   ***
	   ***
 ```
 ```js
 let num=3;
let square='';
for(let i=1;i<=num;i++){
    for(let j=0;j<num;j++){
        square+="*";
    }
    square+="\n"
}
console.log(square);
 ```    
-	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
```
 	     *
	    ***
       *****  
``` 
```js
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
``` 

29.  Write a javascript program which takes the input of filename as string and
 prints the extension of the file in the console

 ```js
 let filename=prompt('Enter a file name');

 let extension=filename.split('.').pop();
  if(filename.includes('.')){
    console.log('Your File extension is',extension);
  }else
    console.log('Enter valid filename with extension i.e filename.extension eg. "a.js"' );
 ```
30. Create a simple calculator program in JavaScript which can perform the addition,
 substraction, multiplication and division on given numbers.

 ```js
 let  firNum=parseFloat(prompt("Enter First Number"));
let  secNum=parseFloat(prompt("Enter Second Number"));
let  operator=prompt("chose your operator (+,-,*,/,%)");

function perfOperation(firNum, secNum, operator) {
    switch (operator) {
      case '+':
        return firNum + secNum;
      case '-':
        return firNum - secNum;
      case '*':
        return firNum * secNum;
      case '/':
        return firNum / secNum;
      case '%':
        return firNum%secNum  
      default:
        return 'Invalid operator!Enter correct operator from given option';
    }
  }
  
  const result = perfOperation(firNum, secNum, operator);
  console.log(`Result is : ${result}`);
 ```
