////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/579fa665bb9944f9340005d2/train/javascript

// Task
// Given a number, return the maximum value by rearranging its digits.

// Examples:
// (123) => 321 (786) => 876 ("001") => 100 (999) => 999 (10543) => 54310

// ^Note the number may be given as a string
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

const rotateToMax = (n) => {
  n = n
    .toString()
    .split("")
    .sort((a, b) => b - a);
  return Number(n.join(""));
};

/////// SOLUTION ///////
