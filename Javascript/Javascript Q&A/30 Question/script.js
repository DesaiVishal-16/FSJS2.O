// Create a simple calculator program in JavaScript which can perform the addition,
// substraction, multiplication and division on given numbers.

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


