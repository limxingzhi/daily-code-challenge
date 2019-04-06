// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.

// Entry #005 06042019


// Utils functions

'use strict'

function shiftArray(arrayInput) {
  var arrayOutput = [];
  while (arrayInput.length > arrayOutput.length + 1) {
    arrayOutput[arrayOutput.length] = arrayInput[arrayOutput.length + 1];
  }
  return arrayOutput;
}

function smallestInt(arrayIn) {
  if (arrayIn.length <= 1) {
    return arrayIn[0];
  }

  if (arrayIn[1] >= arrayIn[0] || arrayIn[1] <= 0) {
    arrayIn[1] = arrayIn[0];
  }
  arrayIn = shiftArray(arrayIn);

  return smallestInt(arrayIn);
}


// Actual program
var input = [3, 4, -1, 1];
var output = smallestInt(input.slice(0));

for (var i = 0; i < input.length; i++) {
  if (output + 1 == input[i]) {
    output = input[i]
  } else {
    output = output;
  }
}

output < 0 ? output = 0 : output++;

console.log(output);
