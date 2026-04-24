// Write a program to multiply each element of array by 2

let arr = [1,2,3,4,5,6,7];

/* using for each loop 

let multiplyBy2 = arr.forEach((currElem) => {
    currElem *= 2;
    console.log(currElem);
}); */

// using map method 
let multiplyBy2 = arr.map((currElem) => {
    return currElem * 2;
});
console.log(multiplyBy2);

console.log(arr);