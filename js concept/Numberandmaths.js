// 6th value

const score = 300;
console.log(typeof(score));
const balance = new Number(100);
// const balance = new String(100);
console.log(balance.toString());
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));  // ecommerce 

console.log(typeof(balance));

// const otherNumber = 23.532;
const otherNumber = 207.532;


console.log(otherNumber.toPrecision(3));

const thousand = 1000000000;
console.log(thousand.toLocaleString('en-IN'));


// +++++++++++++++++++++++++++++++++++++ Math lbrary 

console.log(Math);
console.log(Math.abs(-6));  // absolute value  - to + ,++
console.log(Math.round(4.6));


console.log(Math.random());
console.log(Math.random()*10+1);
console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10+1))

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()  * (max - min +1)) + min)
// +++++++++++++++++++++++++

// function calculator(num1, operator, num2) {
//     switch(operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             if (num2 !== 0) {
//                 return num1 / num2;
//             } else {
//                 return "Error: Division by zero";
//             }
//         default:
//             return "Error: Invalid operator";
//     }
// }

// // Examples of usage
// console.log(calculator(5, '+', 3)); // Output: 8
// console.log(calculator(5, '-', 3)); // Output: 2
// console.log(calculator(5, '*', 3)); // Output: 15
// console.log(calculator(5, '/', 3)); // Output: 1.6666666666666667
// console.log(calculator(5, '/', 0)); // Output: Error: Division by zero
// console.log(calculator(5, '%', 3)); // Output: Error: Invalid operator

// Examples using Math methods
console.log(Math.pow(2, 3));  // Output: 8 (2^3)
console.log(Math.sqrt(16));   // Output: 4 (Square root of 16)
console.log(Math.abs(-5));    // Output: 5 (Absolute value of -5)
console.log(Math.round(4.7)); // Output: 5 (Round 4.7 to the nearest integer)
console.log(Math.floor(4.7)); // Output: 4 (Floor of 4.7)
console.log(Math.ceil(4.1));  // Output: 5 (Ceiling of 4.1)

