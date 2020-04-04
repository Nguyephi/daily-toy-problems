/*

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

function numToStr(n) {
  return n.toString();
}

*/

function isHappy(n) {
  let numStr = numToStr(n);
  let sumOfSquares = 0;
  let isNumberHappy = false;
  let sumArr = [n];

  while(!isNumberHappy) {
    for (let i = 0; i < numStr.length; i++) {
      sumOfSquares += numStr[i]**2
    }
    if (sumOfSquares === 1) {
      isNumberHappy = true;
    } else {
      if (sumArr.includes(sumOfSquares)) {
        return isNumberHappy
      } else {
        sumArr.push(sumOfSquares)
        numStr = numToStr(sumOfSquares);
        sumOfSquares = 0;
      }
    }
  }
  return isNumberHappy
}