////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/552e45cc30b0dbd01100001a/train/javascript

// You should write a simple function that takes string as input
// and checks if it is a valid Russian postal code, returning true or false.

// A valid postcode should be 6 digits with no white spaces, letters or other symbols.
// Empty string should also return false.

// Please also keep in mind that a valid post code cannot start with 0, 5, 7, 8 or 9

// Examples
// Valid postcodes:

// 198328
// 310003
// 424000
// Invalid postcodes:

// 056879
// 12A483
// 1@63
// 111
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function zipvalidate(postcode) {
  if (postcode.length !== 6) {
    return false;
  } else if (postcode.match(/[A-Za-z]/g)) {
    return false;
  } else if (postcode.charAt(0).match(/[05789]/g)) {
    return false;
  } else if (postcode.match(/[^a-z0-9]/gi)) {
    return false;
  } else {
    return true;
  }
}

/////// SOLUTION ///////
