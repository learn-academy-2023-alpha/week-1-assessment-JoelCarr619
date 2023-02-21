// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer:
//----> output: the outcome should be 5, as the push() method adds an element to the end of the array and return the new length of the array

// b) Verify and explain:
//---> console.log(colors.push("indigo")) // Output: 5, The current answer was correct as the push() method adds an element to the end of the array and returns the new length of the array.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: the cohort variable is assigned the value "LEARN 2023". When the code is ran it will output 10 to the console, the length of the string "LEARN 2023"

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// // a) Your answer: 0
// // b) Verify and explain: the greeting variable is assigned the value 'Hello World!'. The console logs the character at the index of 'greeting'. The output '0' to the console, index 4 of the string 'Hello World'. 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: the ' languages' variable is assigned an array of four strings. the code assigns to the value `1` to the `index` variable. the element at the index `1` if the `languages` array to the console. the output: "Ruby" to the console. `languages[1]`, the second element (at index `1`) of the array, which is the string "Ruby"

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: TypeError
// b) Verify and explain: the code is incorrect. The toUpperCase() method is used to convert strings to uppercase, since it i was unable to use on an array. when i ran the code on TypeError was shown 

// // --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: The Length of the dataType array is a number, so the typeof operator returns "number"
