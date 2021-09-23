////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata.

// Here are the conditions:
// 1. Your message is a string containing space separated words.
// 2. You need to encrypt each word in the message using the following rules:
//      - The first letter must be converted to its ASCII code.
//      - The second letter must be switched with the last letter
// 3. Keepin' it simple: There are no special characters in the input.

// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

var encryptThis = function (text) {
  let encrypted = [];

  text = text.split(" ").map((word) => {
    if (word.length === 1) {
      encrypted.push(word[0].charCodeAt(0));
    }
    if (word.length === 2) {
      encrypted.push(word[0].charCodeAt(0) + word[1]);
    }
    if (word.length === 3) {
      encrypted.push(word[0].charCodeAt(0) + word.slice(-1) + word[1]);
    }
    if (word.length > 3) {
      encrypted.push(
        word[0].charCodeAt(0) + word.slice(-1) + word.slice(2, -1) + word[1]
      );
    }
  });

  return encrypted.join(" ");
};

/////// SOLUTION ///////
