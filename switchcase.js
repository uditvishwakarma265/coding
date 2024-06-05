// console.log(mon-1);
// console.log(tue-2);
// console.log(web-3);
// console.log(thu-4);
// console.log(fri-5);
// console.log(sat-6);
// console.log(sun-7);


// function weekday(day)
// {

// var day1=3;
// var day;
// switch (day1) {
//         case 1:
//         day=monday
//         break;

//         case 2:
//         day=tuesday
//         break; 

//         case 3:
//         day=wednesday
//         break;

//         case 4:
//         day=thursday
//         break;

//         case 5:
//         day=friday
//         break;
        
//         case 6:
//         day=saturday
//         break;

//         case 7:
//         day=sunday
//         break;

//         default:
//         return "error, plz enter week day"
//         break;
// }
// console.log(day);

// }

// var day=weekday(1);
// console.log(day);


function weekday(a)
{

let day = a;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid input";
}

console.log(dayName);
}

var output=weekday(6)
console.log(output);
