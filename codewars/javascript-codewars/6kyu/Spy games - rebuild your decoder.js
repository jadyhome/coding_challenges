////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/586988b82e8d9cdc520003ac/train/javascript

// You're operating behind enemy lines, but your decryption device took a bullet and no longer operates.
// You need to write a code to unscramble the encrypted messages coming in from headquarters.
// Luckily, you remember how the encryption algorithm works.

// Each message you receive is a single string, with the blocks for each letter separated by a space.
// The blocks encoding the characters are made up of seemingly random characters and are of a variable length.
// For example, a two character word might look like:

// "x20*6<xY y_r9L"

// To decode this string, you add up only the numbers in each block:
// sum of integers in "x20*6<xY" --> 2 + 0 + 6 = 8
// sum of integers in "y_r9L" --> 9

// Then map these numbers to the corresponding letters of the alphabet, with 0 representing a space:
// 0  : ' '
// 1  : 'a'
// 2  : 'b'
// ...
// 26 : 'z'

// So we have:
// "x20*6<xY y_r9L" --> "8 9" --> "hi"

// Note also, if the sum of the digits goes over 26,
// loop back to zero (standard modulo / remainder function, such that 27 == 0, 28 == 1, etc.).
// As such the previous code could have also been:

// "x20*6<xY y875_r97L" --> "8 36" --> "8 9" --> "hi"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function decrypt(code) {
  const alphabet = {
    0: " ", 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g", 8: "h", 
    9: "i", 10: "j", 11: "k", 12: "l", 13: "m", 14: "n", 15: "o", 16: "p", 17: "q", 
    18: "r", 19: "s", 20: "t", 21: "u", 22: "v", 23: "w", 24: "x", 25: "y", 26: "z",
  };

  let sum = code.split(" ").map((str) =>
    str
      .replace(/[^0-9]/g, "")
      .split("")
      .map((num) => Number(num))
      .reduce((a, b) => a + b)
  );

  let decoded = sum.map(
    (letter) => (letter = alphabet[letter > 26 ? letter - 27 : letter])
  );

  return decoded.join("");
}

/////// SOLUTION ///////
