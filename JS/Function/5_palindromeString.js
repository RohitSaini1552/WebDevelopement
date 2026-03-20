let reverse = (str) => {
    let result = "";
    for(let char=str.length-1;char>=0;char--){
        result += str[char];
    }
    return result;
};
let ispalindrome = (str) => {
    return (reverse(str) === str) ? true : false;
};

console.log(ispalindrome("Master"));