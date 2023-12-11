// Recursion examples

// countdown function
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

// create a range of numbers
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const rangeArr = rangeOfNumbers(startNum + 1, endNum);
    rangeArr.unshift(startNum);
    return rangeArr;
  }
}

// adding all array elements together, where arr is the array of numbers passed and n is the array length to capture a desired result
function sum(arr, n) {
    if (n <= 0) return 0;
    return sum(arr, n - 1) + arr[n - 1];
}

// return the factorial of the provided integer, where the integer is greater than or equal to zero, using "tail recursion" for optimized stack performace/memory usage
function factorialize(num, factorial = 1) {
  if (num <= 0) return factorial;
  return factorialize(num - 1, factorial * num);
}



// General examples

// basic calculator
const calculator = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    },
    multiply: function(x, y) {
        return x * y;
    },
    divide: function(x, y) {
        return x / y;
    }
}

// basic clock
function clock() {
    setInterval(() => {
        console.clear();
        console.log(new Date().toLocaleTimeString());
    }, 1000);
}

// basic stopwatch
function Stopwatch() {
    let startTime;
    let endTime;
    let running;
    let duration = 0;
    // can also be written as let startTime, endTime, running, duration = 0

    this.start = function () {
        if (running)
            throw new Error("Stopwatch already started.");
        running = true;
        startTime = new Date();
    }

    this.stop = function () {
        if (!running)
            throw new Error("Timer already stopped.");
        running = false;
        endTime = new Date();
        let seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }
    
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    // read-only property, being a getter function, of the Stopwatch constructor function so as to not accidentally overwrite the duration outside of the timer
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}

// mimic css pesticide extension (basic functionality)
function highlightDivs() {
    const alldivs = document.getElementsByTagName("*");
    for (let div in alldivs) {
        alldivs[div].style.border = "thin solid blue";
        console.log(alldivs[div]);
    }
}

// older version of Node file system create/read/update/delete operations
const fs = require('fs');
// Create a new file and write to it
fs.writeFile('./hello.txt', 'qwer', err => {
    if (err) {
        console.log(err);
    }
})
// Read an existing file
fs.readFile('./hello.txt', (err, data) => {
 if (err) {
     console.log('err');
 }
 console.log('Async', data.toString('utf8'));
})
const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());
// Append an existing file
fs.appendFile('./hello.txt', ' 123', err => {
 if (err) {
     console.log(err);
 }
})
// Delete an existing file
fs.unlink('./hello.txt', err => {
 if (err) {
     console.log(err);
 }
 console.log('File has been deleted.');
})

// convert celsius temperature value to fahrenheit and vice versa
function convertCtoF(c) {
  return c * 9/5 + 32;
}
function convertFtoC(f) {
  return (f - 32) * 5/9;
}

// reverse a string
function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// check for the presense of an element in an array
function arrayChecker(arr, elem) {
  if (arr.indexOf(elem) !== -1) { // if the index of the user-passed element is not equal to -1, meaning if the index is zero or a postive number, then it exists in the array
    return true;
  } 
  return false; // return false by default
}

// sort an array of numbers in ascending order without mutating the original array
function nonMutatingSort(arr) {
  return arr
    .concat([]) // can also use slice() here to copy the passed array
    .sort((a, b) => a - b);
}

// turn a string with random whitespace into a hyphenated url
function onlyURL(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}

// turn a string with random whitespace into a hyphenated url
function onlyURL(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}

