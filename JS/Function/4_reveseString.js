// write a JS program to reverse a string using arrow functions


let reverse = (str) => {
    let result = "";
    for(let char=str.length-1;char>=0;char--){
        result += str[char];
    }
    return result;
};

console.log(reverse("Master"));