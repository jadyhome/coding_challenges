////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/557af4c6169ac832300000ba/train/javascript

// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten.
// He wants to replace all the rotten pieces of fruit with fresh ones.
// For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"].
// Your task is to implement a method that accepts an array of strings containing fruits
// should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function removeRotten(bagOfFruits) {
  // if the bagOfFruits array equals to 0/empty, or if the array is null/false
  if (bagOfFruits === 0 || !bagOfFruits) {
    return [] // we return an empty array
  } else {
    // else, we return the following:
    return bagOfFruits.map((x) => x.replace("rotten", "").toLowerCase())
    // using the map() method, we map through the array, and replace all the strings that contain the word "rotten"
    // and replace it with an empty string - ""
    // we use the toLowerCase() method and change the strings to lowercase
  }
}

/////// SOLUTION ///////
