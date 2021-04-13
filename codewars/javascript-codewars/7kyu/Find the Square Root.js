////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/56426b4e971f01fd2f00005b/train/javascript

// Create a Function that takes one parameter and returns its square root rounded to 5 decimal places.
// You are not allowed to use the Math.sqrt() or the Math.pow() methods.

// Trailing zeros should be left out. For example

// squareRoot(39) // => 6.245;
// rather than

// squareRoot(39) // => 6.24500;
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function squareRoot(x) {
  x = x ** 0.5;
  return Number(x.toFixed(5));
}

/////// SOLUTION ///////
