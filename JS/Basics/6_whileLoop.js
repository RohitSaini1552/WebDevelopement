const prompt = require('prompt-sync')();
// const shape = prompt('Enter the shape: ');



// Q1 - write a code to print numbers from 1 to 10 using a while loop

// var i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

//Q2 - write a code to print the table of 5 using while loop

// var i = 1;
// while(i <= 10){
//     // console.log("5 * ",i," = ",5 * i);

//     //using template literals
//     console.log(`5 * ${i} = ${5 * i}`);
//     i++;
// }

//Q3 - check whether user gives correct input(+ve number)

// let userInput = parseInt(prompt('Enter the Input: '));

// while(isNaN(userInput) || userInput < 0){
//     userInput = parseFloat(prompt('Enter the Input again: '));
// }

// console.log("Congratulations you made a Correct number input",userInput);


//Q4 - write a code to calculate and print sum of first 10 natural numbers

// var sum = 0;
// var i = 1;
// const n = parseInt(prompt('Enter the number of first n natural numbers: '));
// while(i <= n){
//     sum += i;
//     i++;
// }
// console.log("The sum of first ",n," natural numbers is : "+ sum);


//Q5 - write a code to check whether an input number is prime or not

const num = parseInt(prompt("Enter the number : "));
var i = 2;
var isPrime = true;
while(i <= num/2){
    if(num % i == 0) isPrime = false;
    i++;
}
console.log("The Entered number is prime : ",isPrime);



