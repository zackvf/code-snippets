// countdown function with recursion -
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

// create a range of numbers with recursion -
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const rangeArr = rangeOfNumbers(startNum + 1, endNum);
    rangeArr.unshift(startNum);
    return rangeArr;
  }
}


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