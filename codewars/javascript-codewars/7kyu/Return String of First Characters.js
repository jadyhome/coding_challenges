////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5639bdcef2f9b06ce800005b/train/javascript

// In this exercise, a string is passed to a method and a new string has to be returned
// with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function makeString(s) {
  s = s.split(" ");
  return s.map((f) => f.charAt(0)).join("");
}

/////// SOLUTION ///////
