const calculator = (a, b, op) => {
    if(op === '+') return a + b;
    else if(op === '-') return a - b;
    else if(op === '*') return a * b;
    else if(op === '/' && b != 0) return a / b;
    else return "Invalid Operator";
};
console.log(calculator(1,2,'+')); 
console.log(calculator(1,2,'*')); 
console.log(calculator(10,2,'/')); 
console.log(calculator(10,2,'%')); 


