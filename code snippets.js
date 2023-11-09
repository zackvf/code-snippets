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