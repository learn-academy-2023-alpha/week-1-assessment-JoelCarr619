// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        return str1;
    }   else if (str2.length > str1.length) {
        return str2;
    }   else {
        return " Both strings have the same length"
        }    
            }

const fruit1 = "apple"
const fruit2 = "banana"

console.log(compareStrings(fruit1, fruit2));
// // Expected outcome: "banana"



//Set two:
function compareStrings(str1, str2) {
    if (str1.length > str2.length){
        return str1;
    }else if (str2.length > str1.length) {
        return str2;
    } else {
        return "Both strings have the same lenght"
    }
}

const fruit3 = "cherry"
const fruit4 = "kiwi"

console.log(compareStrings(fruit3, fruit4));
// // Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
function checkBoilingPoint(temp) {
    if (temp < 212) {
        return "below boiling point";
    } else if (temp === 212) {
        return "at boiling point";
    } else {
        return "above boiling point"
    }
}

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"
console.log(checkBoilingPoint(temp1));
console.log(checkBoilingPoint(temp2));
console.log(checkBoilingPoint(temp3));

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4];
const padres1998WorldSeriesRuns = [6, 3, 5, 3];
 
const combinedRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns);
const combinedLength = combinedRuns.length;

console.log(combinedLength);

// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

const currentCohort = "Alpha 2023"

const reversedCohort = currentCohort.split("").reverse().join("");
console.log(reversedCohort);

// Expected output: "3202 ahplA"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

const lastIndex1 = myNumbers.lastIndexOf(givenValue1);
const lastIndex2 = myNumbers.lastIndexOf(givenValue2);

console.log(lastIndex1);
console.log(lastIndex2);

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

sanDiegoSummerTemperatures.sort((a, b) => b - a); 
sanDiegoWinterTemperatures.sort((a, b) => b - a);

console.log(sanDiegoSummerTemperatures);
console.log(sanDiegoWinterTemperatures);
