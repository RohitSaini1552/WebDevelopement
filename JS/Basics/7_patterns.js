// Q1 - write a code to print following pattern
/*
    i/j 1   2   3   4   5
    1   *   _   _   _   _
    2   *   *   _   _   _
    3   *   *   *   _   _
    4   *   *   *   *   _
    5   *   *   *   *   *
*/
const prompt = require('prompt-sync')();
var n = parseInt(prompt("Enter the size of Grid : "));
for(var i = 1;i<=n;i++){
    for(var j = 1;j<=n;j++){
        if(i >= j) process.stdout.write("*\t");
        else process.stdout.write("_\t");
    }
    console.log("\n");
}