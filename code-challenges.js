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
// The boiling point function takes in a tempertaure
// Create a function called boilingTemp. 
// This function will take the input number called thermalReading.
// If the thermalReading is less that 212 degrees Fahrenheight, the return will be "is below boiling point"
// If the thermalReading is at exactly 212 degrees Fahrenheight, the return will be "is at boiling point"
// If the thermalReading is more than 212 degrees Fahrenheight, the return will be "is above boiling point
// anything ELSE use as a catch all error.

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

// First I used the concat method to combine the two arrays
// padres1984WorldSeriesRuns and padres1998WorldSeriesRuns into a singles array combinedRun
// with the concat method a new array would include all the elements of the original arrays.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4];
const padres1998WorldSeriesRuns = [6, 3, 5, 3];
 
const combinedRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns);
const combinedLength = combinedRuns.length;

console.log(combinedLength);

// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// The split method was used to convert the `currentCohort` string in an array of individual characters.
// The empty string passed as an argument to `split` is a seperator that specifies whre to split that string but in this case it splits the string st every character
// Next the `reverse` method was used tp reversethe order of the element in the array
// Now the `join` method was used to convert the reverse the order of the element in the array
// Next I used the `join` method to convert the reverse array back into a string. 
// The empty string passed as an argument to `join` is a seperator that specifices how to join the elements of the array effectively concatenating them together.
// The reversed string is assigned to the variable `reversedCohort`
// Finally the code outputs the value of `reveresedCohort` to the console using the `console.log` function.


const currentCohort = "Alpha 2023"

const reversedCohort = currentCohort.split("").reverse().join("");
console.log(reversedCohort);

// Expected output: "3202 ahplA"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// I used the `lastIndexOf` method of the `myNumbers` array to find the last index of the given values `givenValue1` and `givenValue2`.
// The `lastIndexOf` method returns the index of the last occurrence of a specifiied value in an array.
// The index of the last occurrence of `givenValue1` is assigned to the variable `lastIndex1`, and the index of the last occurrence of `givenValue2` is assigned to the variable `lastIndex2`.
// The final outputs the values of `lastIndex1` and lastIndex2` to the console using the `console.log`



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
// First I started with the `sort` method of the sanDiegoSummerTenperatures` and sanDiegoWinterTemperatures` arrays to sort the elements in decending order.
// The `sort` takes a compare function as an argument, which is used to determine the order of the elements.
// The compare function `(a,b) => - a` compares two values `a` and `b` and returns a positive number if `b`should come before `a`, a negative number if `a` should come before`b`, or zero if the order of `a` and `b` does not matter.
// Subtract `a` from `b`, which results in a positive number if `b` is greater than `a`, and a negative number if `a` is greater than `b`, effecticely sorting the array in descending order.  
// The sorted arrays are assigned back to the original variables `sanDiegoSummerTemperatures` and `sanDiegoWinterTemperatures`.
// The Final outputs the sorted arrays to the console using the `console.log`.


const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

sanDiegoSummerTemperatures.sort((a, b) => b - a); 
sanDiegoWinterTemperatures.sort((a, b) => b - a);

console.log(sanDiegoSummerTemperatures);
console.log(sanDiegoWinterTemperatures);
