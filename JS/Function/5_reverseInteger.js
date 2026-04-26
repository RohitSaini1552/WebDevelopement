// write a code to reverse a number using arrow functions

let reverse = (num) => {
    let result = 0;
    while (num > 0) {
        let rem = num % 10;
        result = result * 10 + rem;
        num = parseInt(num / 10);
    }
    return result;
};
console.log(reverse(1234));