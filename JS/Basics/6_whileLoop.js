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

let userInput = parseInt(prompt('Enter the Input: '));

while(userInput < 0){
    userInput = parseFloat(prompt('Enter the Input again: '));
}

console.log("Congratulations you made a Correct number input");




