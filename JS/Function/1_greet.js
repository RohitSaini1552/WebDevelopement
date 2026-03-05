//Q1 - write a code to greet the user by taking individuals name as function parameter
const prompt = require('prompt-sync')();
var name = prompt("Enter your Name : ");
function greet(name){
    console.log(`Hello ${name} , Welcome to JS World`);
}
greet(name);