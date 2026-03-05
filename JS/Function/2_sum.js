//Q2 - write a code to return the sum of two numbers when passed as an argument

const prompt = require('prompt-sync')();
var num1 = parseInt(prompt("Enter 1st number : "));
var num2 = parseInt(prompt("Enter 2nd number : "));
function sum(a, b){
    return a+b;
}
console.log(`sum of ${num1} and ${num2} is `,sum(num1, num2) );  