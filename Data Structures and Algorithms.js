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
array.push(); // push an element/object to the end of the list/array
array.pop(); // delete an element from the end of an array
array.unshift(); // add an element to the beginning of an array
array.shift(); // remove an element from the beginning of an array
array.toString(); // converts an array to a comma-separated string of the array's values
array.splice(index to start removing elements, number of elements to remove, remaining arguments to be inserted starting at the specified index); // the number of elements to remove is inclusive, so the starting point is removed from the original array
array.slice(index to begin extraction, index to stop extraction); // shallow copies/extracts a certain number of elements from an existing array and puts those elements into a new array, and index to stop extraction is non-inclusive (set the stop index one element ahead to capture all desired elements)
// copying an array using the spread operator - arr is the array of elements you pass the function and num is the number of times the array should be copied
function copyArray(arr, num) {
  let newArr = []; // create a new empty array to copy values into
  while (num >= 1) { // continue to copy the user-passed array until reaching the final iteration of the user-passed number
    newArr.push([...arr]); // spread the user-passed array into the new empty array
    num--; // decrement the user-passed number each loop iteration in order to get to the point of exiting the loop
  }
  return newArr; // return the newly created array with all of the instances of the user-passed array, num times
}
console.log(copyArray([el1, el2, el3], 3)); // expected output: [ [el1, el2, el3], [el1, el2, el3], [el1, el2, el3] ]
// check for the presense of an element in an array
function arrayChecker(arr, elem) {
  if (arr.indexOf(elem) !== -1) { // if the index of the user-passed element is not equal to -1, meaning if the index is zero or a postive number, then it exists in the array
    return true;
  } 
  return false; // return false by default
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
// return an array of just an object's properties
function arrayOfProps(obj) {
  return Object.keys(obj); // returns an array
}


// algorithms
// convert celsius temperature value to fahrenheit and vice versa
function convertCtoF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}
function convertFtoC(fahrenheit) {
  let celsius = fahrenheit - 32 * 5/9;
  return celsius;
}
// reverse a string using a for loop
function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // console.log(str[i]);
    newStr += str[i];
  }
  return newStr;
}
// return the factorial of the provided integer, where the integer is greater than or equal to zero - this solution uses "head recursion" where all evaluation calcs are stored on the stack until the base case is reached
function factorialize(num) {
  if (num <= 0) return 1;
  return factorialize(num - 1) * num; // more elegant to say num * factorialize(num - 1)
}
factorialize(5); // expected output: 120
// factorialize function using "tail recursion" for optimized stack performace/memory usage
function factorialize(num, factorial = 1) {
  if (num <= 0) return factorial;
  return factorialize(num - 1, factorial * num); // more elegant to say num * factorialize(num - 1)
}
// factorialize function using a for loop
function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}
// find the longest word in a string
function findLongestWordLength(str) {
  let wordsArr = str.split(' ');
  let longestWord = 0;
   for (const word in wordsArr) { // can also be written as for (let i = 0; i < wordsArr.length; i++)
     if (wordsArr[word].length > longestWord) { // can also be written as if (wordsArr[i].length > longestWord)
       longestWord = wordsArr[word].length; // can also be written as longestword = wordsArr[i].length
     }
  }
  return longestWord;
}
// return largest number among nested arrays - procedurally
function largestOfFour(arr) {
  const finalList = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    finalList[i] = largestNumber;
  }

  return finalList;
}
// check if a string ends with the given target string - declartively
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
// repeat a given string n times
// for loop version
function repeatString(str, num) {
  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}
// recursion version
function repeatString(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatString(str, num - 1);
  }
}
// alternate recursion version
function repeatString(str, num) {
  return num > 0 ? str + repeatString(str, num - 1) : '';
}
// truncate a string if it's longer than the user-supplied max string length
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  return str;
}
// look through an array and return the first element that passes a truth test, otherwise return 'undefined'
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}
// check if a user-passed value is a boolean primitive (true/false)
function isBool(value) {
  return bool === true || bool === false ? true : false;
}
// bool checker alternate version
function isBool(value) {
  return typeof value === "boolean";
}
// capitalize the first letter in each word in a string to achieve 'title case'
function titleCase(str) {
  const strArr = str.split(" ");
  let newTitle = [];
  for (let letter in strArr) {
    newTitle[letter] = strArr[letter][0].toUpperCase() + strArr[letter].slice(1).toLowerCase();
  }
  return newTitle.join(" ");
}
// alternate version of title case function
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}
// copy each element of one array into a second array, in order, starting at a user-passed index of the second array (without mutating the original arrays)
function arraySpicer(arr1, arr2, n) {
  let newArr2 = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
      newArr2.splice(n, 0, arr1[i]);
      n++;
      // console.log(newArr2);
    }
  return newArr2;
}
// return an array that only contains truthy values from a user-passed array
function truthyFinder(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) { // checks if the element at the array's index is true
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// return the lowest index number a which a value should be inserted into an array after the array's been sorted
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length;
}
// compare two string elements in an array and return true if the letters of the second string exist in the first, otherwise return false - procedurally
function stringComparison(arr) {
  const firstElement = arr[0].toLowerCase(); // set the array's first element to a string with all lower case characters
  const secondElement = arr[1].toLowerCase(); // set the array's second element to a string with all lower case characters
  for (let i = 0; i < secondElement.length; i++) { // loop through the second string's characters
    if (firstElement.indexOf(secondElement[i]) < 0) { // if the first string doesn't contain the second string's given character at any index, return false
      return false;
    }
  }
  return true;
}
// declaritively
function stringComparison(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) { // from mdn docs: The every() method is an iterative method. It calls a provided callbackFn function once for each element in an array, until the callbackFn returns a falsy value. If such an element is found, every() immediately returns false and stops iterating through the array. Otherwise, if callbackFn returns a truthy value for all elements, every() returns true.
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}
// split a user-passed array into chunks the size of the user-passed size parameter
function chunkArrayInGroups(arr, size) {
  const newArr = []; // create a new array to push array chunks to, so that we don't mutate the user-passed array with splice
  while (arr.length > 0) { // loop through the user passed array as long as the array size is one or more elements
    newArr.push(arr.splice(0, size)); // splice the user-passed array, starting at the first element and ending at the user-passed size parameter, and push that spliced array copy into the new array
  }
  return newArr; // return the new array after all chunks have been pushed to it
}

// object-oriented programming
// using prototype props to reduce redundancy - Properties in the prototype are shared among all instances of an instantiated object, as opposed to creating separate variables in each instance of the object
// ex. of adding a prototype directly to a constructor function
function Object(param) {
  this.param = param; // own property
  Object.prototype.newParam = value // prototype property
}
// the constructor property on an instantiated object is a reference to the constructor function that created the instance. The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Since the constructor property can be overwritten, it's typically better to use 'instanceof' to check the type of an object.
// instead of tediously, individually adding prototype properties to objects, you can also create a new prototype object (using the original constructor function as the object reference, for example) and set all the desired properties in that new prototype object
// ex.
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog, // always remember to set the constructor when manually setting a new prototype object
  numLegs: 4,
  eat: function() {
    console.log('eat');
  },
  describe: function() {
    console.log('describe');
  }
};
const yeller = new Dog('yeller');
console.log(yeller); // expected output: { name: 'yeller' }
console.log(yeller.numLegs); // expected output: 4
console.log(yeller.eat()); // expected output: eat, undefined
console.log(yeller.eat); // expected output: [Function: eat]
// check if an object is a prototype of an instantiated object
Newobject.prototype.isPrototypeOf(otherobject);
// an object's prototype is also a prototype of Object.prototype, hence why instantiated objects can use the "hasOwnProperty" method, which comes from Object.prototype.hasOwnProperty
// ex. of instantiating an object without properties, which would later be assigned through creating a new prototype of that object
function Animal() { } // new instance of the object, which would just contain the constructor function
Animal.prototype = {
  constructor: Animal,
  key: property,
  fn: function() {
    console.log('test');
  } 
};
