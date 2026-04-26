// write a JS program to check whether a given string is a palindrome or not


let reverse = (str) => {
    let result = "";
    for(let char = str.length-1;char>=0;char--){
        result += str[char];
    }
    return result;
};
let ispalindrome = (str) => {
    return (reverse(str) === str) ? true : false;
};

console.log(ispalindrome("radar"));