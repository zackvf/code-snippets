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


