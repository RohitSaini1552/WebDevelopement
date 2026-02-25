const prompt = require('prompt-sync')();

// Code 1: Week Days
// const day = prompt('Enter your day: ');

// switch(day){
//     case "Monday":
//         console.log("today is monday");
//         break;
//         case "Monday":
//         console.log("today is monday");
//         break;
//         case "Tuesday":
//         console.log("today is Tuesday");
//         break;
//         case "Wednesday":
//         console.log("today is Wednesday");
//         break;
//         case "Thursday":
//         console.log("today is Thursday");
//         break;
//         case "Friday":
//         console.log("today is Friday");
//         break;
//         case "Saturday":
//         console.log("today is Saturday");
//         break;
//         default:
//             console.log("Sunday is the Funday");
// }

//code 2:areaOfShape based on user input using switch case statement 
const shape = prompt('Enter the shape: ');
const r = 7;
const l = 2;
const b = 3;
const s = 4;
var area;

switch(shape){
    case "circle":
        area = 3.14 * r * r;
        console.log("Area of circle :",area);
        break;
    case "square":
        area = s * s;
        console.log("Area of square :",area);
        break;  
    case "rectangle":
        area = l * b;
        console.log("Area of rectangle :",area);
        break;
        default:
            console.log("Invalid Shape");
}


