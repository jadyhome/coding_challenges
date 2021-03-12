////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/train/javascript

// Write a function called calculate that takes 3 values.
// The first and third values are numbers. The second value is a character.
// If the character is "+" , "-", "*", or "/",
// the function will return the result of the corresponding mathematical function on the two numbers.
// If the string is not one of the specified characters,
// the function should return null (throw an ArgumentException in C#).

// calculate(2,"+", 4); //Should return 6
// calculate(6,"-", 1.5); //Should return 4.5
// calculate(-4,"*", 8); //Should return -32
// calculate(49,"/", -7); //Should return -7
// calculate(8,"m", 2); //Should return null
// calculate(4,"/",0) //should return null

// Keep in mind, you cannot divide by zero.
// If an attempt to divide by zero is made, return null (throw an ArgumentException in C#)/(None in Python).
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function calculate(num1, operation, num2) {
  switch (operation) { // using the switch statement, evaluates the operation value
    case "+": // first case, is the "+" operation, if it matches the operation value
      return num1 + num2 // return the sum of num1 and num2
    case "-": // second case, is the "-" operation, if it matches the operation value
      return num1 - num2 // return the difference of num1 and num2
    case "*": // third case, is the "*" operation, if it matches the operation value
      return num1 * num2 // return the product of num1 and num2
    case "/": // fourth case, is the "/" operation, if it matches the operation value
      if (num1 === 0 || num2 === 0) { return null } // num1 or num2 cannot be 0, so we return null if either value is 0
      else { return num1 / num2 } // else we return the quotient of num1 and num2
    default: // default case, it nothing matches the operation value
      return null // we return null
  }
}

/////// SOLUTION ///////
