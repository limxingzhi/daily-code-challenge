// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.

//For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.

// Entry #004 05042019

'use strict'

var input = 4;

function FirstFactorial(input, output = 1) {
  if (input == 0) {
    return output;
  } else {
    output *= input--;
    return FirstFactorial(input, output);
  }
}

console.log(FirstFactorial(input));
