// mutate an array declared with const - using const declaration only prevents reassignment of the variable identifier, where the elements of the array/object are still mutable
array = [a, b, c]
array[0] = c;
array[1] = a;
array[2] = b;


// prevent object mutation - can be called within a function
Object.freeze(obj);


// no need for parans when passing a single arg to an anonymous fn with arrow syntax
const function = arg => arg + 1;


// multiple args in an anon fn
const arrConcat = (arr1, arr2) => arr1.concat(arr2);


// default params in an anon fn
const increment = (number, value = 1) => number + value;


// using rest param in fn declaration
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}


// destructing assignment to extract object property values
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;

// which is the same as saying
const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// and variables can be named differently
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;


// destructure an array to swap variable values to each other - remember that you can't redeclare the variable identifiers with let or const
let a = 1, b = 2;
[b, a] = [a, b];


// destructuring an array with rest param - remove first two elements of an array and return the remaining sliced array
function removeFirstTwo(list) {
  let [a, b, ...arr] = list;
  return arr;
}


// destructuring an object's props as fn params
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({ max, min }) => (max + min) / 2.0;

// which is the same as saying
const half = (stats) => (stats.max + stats.min) / 2.0;


// creating an array of strings of template literals by looping through a nested array in an object
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < result.failure.length; i++) {
      failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`)
  }
  return failureItems;
}

const failuresList = makeList(result.failure);


// object property shorthand with object literals to create and return an object with name, age and gender properties
const createPerson = (name, age, gender) => {
  return {name, age, gender};
};


// In ES5, an object can be created by defining a constructor function and using the new keyword to instantiate the object.
// In ES6, a class declaration has a constructor method that is invoked with the new keyword. If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.
// explicit constructor - identified by the param passed to the new Vegetable method call
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // expected output: 'carrot'

// implicit constructor - no explicitly defined constructor method
class Vegetable {
  console.log("This is a vegetable class.")
}


// using getters and setters to control object prop access
// You can obtain values from an object and set the value of a property within an object.
// These are classically called getters and setters.
// Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
// Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.
// This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.
// In other words, you are abstracting implementation details from the user.
// thermostat class example
class Thermostat {
  constructor(temp) {
    this._temp = temp;
  }
  get temperature() { // returns a celsius temp value
    return 5/9 * (this._temp - 32);
  }
  set temperature(newTemp) { // set a new fahrenheit temp value
    this._temp = newTemp * 9.0 / 5 + 32;
  }
}

const thermos = new Thermostat(76); // instantiate a new thermostat object with 76 F
let temp = thermos.temperature; // expected output: 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // expected output: 26 in Celsius


// easily import all contents of a module as a new object in the file using the contents
// ex. 1 - exporting the functions needed in another file/module
const uppercaseString = string => {
  return string.toUpperCase();
}

const lowercaseString = string => {
  return string.toLowerCase();
}

export { uppercaseString, lowercaseString };

// ex. 2 - importing the functions all at once into the 'stringFunctions' object
import * as stringFunctions from "./string_functions.js"; // in this case, it's the same as saying import { uppercaseString, lowercaseString } from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");


// export default - Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const
// example of exporting a single function as it's defined
export default function subtract(x, y) {
  return x - y;
}


// promises - When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise
// A promise has three states: pending, fulfilled, and rejected. The resolve and reject parameters given to the promise argument are used to do complete the promise and exit a pending state. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;    
  if(responseFromServer) {
    resolve("Response received from server.");
  } else {  
    reject("No response received from server.");
  }
});

// When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve
makeServerRequest.then(result => {
  console.log(result);
});

// catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called
makeServerRequest.catch(error => {
  console.log(error);
});


// regex
/specific text/ // search for a specific word/text block
/specific Text/i // i is case insensitivity
/specific text/g // g is repeated instances of the text value
/spec./ // . is wild card for getting any characters before/after the text value
text.test(specific text) // test returns true or false if the text value appears in the string being searched on
text.match(specific text) // match returns an array with the extracted text value matches
/b[aiu]g/ // this example would match big, bag, and bug, but not bog - character classes only match text that fits the class
// ex. of finding all the vowels in a sentence
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);
console.log(result); // returns an array
/[a-e]at/ // hyphen defines range of characters to match, so this could return bat and cat but not hat or mat
// ex. of matching all alphabet letters in a string, which creates an array where each letter is placed in numerical order and the period is ignored
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);
/[a-z0-9]/ // match ranges of letters and numbers within a string
/[^aeiou]/ // ^caret negates characters, so this would match all non-vowel characters in a string. Outside of a character set, the caret is used to search for patterns at the beginning of strings.
// + matches characters that occur one or more times, where two or more of the same character would be considered a single instance of it
// ex. of capturing when s appears one or more times in mississippi
let testString = "Mississippi";
let testRegex = /s+/g;
let result = testString.match(testRegex); // expected output: ["ss", "ss"]
// * matches zero or more characters
// In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
// ex. of lazy matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex); // expected output: <h1>
// find one or more criminals in a hunt
let reCriminals = /C+/g; // specifically looking for one or more instances of capital c among alphanumeric strings
// $ searches for the specified characters at the end of a string
// \w - shortcut to match all upper and lowercase letters and numbers, including _, same as writing [A-Za-z0-9_]
// \W - opposite of \w, same as writing [^A-Za-z0-9_]
// \d - shortcut for digits, same as writing [0-9], which looks for a single character of any number between zero and nine
// ex. using \d
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length; // expected output: 4
let result = movieName.match(numRegex) // expected output: ["2", "0", "0", "1"]
// \D - opposite of \d, same as writing [^0-9], which looks for a single character that is not a number between zero and nine.
// restrict possible usernames solution -
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
  // userCheck variable explained:
  // ^ - start of input
  // [a-z] - first character is a letter
  // [a-z]+ - following characters are letters
  // \d*$ - input ends with 0 or more digits
  // | - or
  // ^[a-z] - first character is a letter
  // \d\d+ - following characters are 2 or more digits
  // $ - end of input
// \s - shortcut to match whitespace characters, same as writing [ \r\t\f\n\v], being carriage return, tab, form feed, and new line
// \S - opposite of \s, same as writing [^ \r\t\f\n\v], which matches all non-whitespace characters
// {} - quantity specifiers, can put two numbers inside them to specify the range of instances a character appears, can also specify just the lower number with no upper limit and vice versa, like {3,} (i.e. at least 3) and {,6} (i.e. no more than 6), can also specify exact number of character matches with a single number, like {3} (i.e. only 3)
// ? - checks for zero or one instances of the character directly preceding it, i.e. the preceding character is optional to match
// lookaheads - positive (?=element) checks that the element in the search pattern is there but won't match it, negative (?!element) checks that the element in the search pattern is not there and if not then return the rest of the pattern
// positive and negative lookahead solution (Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits) -
pwRegex = /(?=\w)(?=\D\d\d+)/
// trim whitespace before and after a string without .trim()
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "")


// debugging
// reference errors in the console typically point to misspelled variables/functions, where a "not defined" message can help isolate where a program is trying to refer to a non-existent object
// syntax errors typically point to missing closing parantheses/brackets/curly braces/quotation marks, resulting in "unexpected token, expected "symbol"" console messages
// falsy values: false, 0, "", NaN, undefined, null
// runtime errors can occur when the arguments are supplied to functions in the incorrect order, such as when using different types of arguments like an array and an integer
// OBOE - off by one errors - can occur when attempting to target an index of a string or array that shouldn't be targetted, where the message "index out of range" could occur when trying to access an index that's equal to the length of an array (or just undefined will be printed to the console)


// data structures and algorithms
// 1d/one-dimesional array - one level of elements, no nested arrays or objects within any of the elements
// multi-dimensional array - two or more levels of elements with nested arrays and/or objects
array.splice(index to start removing elements, number of elements to remove, remaining arguments to be inserted starting at the specified index); // the number of elements to remove is inclusive, so the starting point is removed from the original array
array.slice(index to begin extraction, index to stop extraction); // shallow copies/extracts a certain number of elements from an existing array and puts those elements into a new array, and index to stop extraction is non-inclusive (set the stop index one element ahead to capture all desired elements)
// copying an array using the spread operator - arr is the array of elements you pass the function and num is the number of times the array should be copied
function copyArray(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyArray([el1, el2, el3], 3)); // expected output: [ [el1, el2, el3], [el1, el2, el3], [el1, el2, el3] ]
// check for the presense of an element in an array
function arrayChecker(arr, elem) {
  if (arr.indexOf(elem) !== -1) {
    return true;
  } 
  return false;
}
// JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as every(), forEach(), map(), etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple for loop.
// loop through an array of arrays to find ones that match the passed element, and only push the ones where the element is not found (filtering algorithm)
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); // expected output: [] - all of the passed subarrays contain the element so all of them would get filtered out
// ex. of five levels of depth in an array of arrays
let nestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested'], 
  [['loop', 'shift', 6, 7, 1000, 'deep'], // 3 levels deep
    [['concat', false, true, 'deeper'], // 4 levels deep
      [['mutate', 1327.98, 'splice', 'slice', 'push'], 
        ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'deepest']]]] // 5 levels deep
];

